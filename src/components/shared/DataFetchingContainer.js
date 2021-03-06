import React from 'react'
import PropTypes from 'prop-types'
import {withServer} from './HOCs'
import {handleFetchDataFailure} from '../../lib/utils'

const propTypesContainer = {
  limit: PropTypes.number,
  page: PropTypes.number,
  usePaging: PropTypes.bool,
  refresh: PropTypes.bool,
  refreshRate: PropTypes.number,
  server: PropTypes.object,
}

const withDataFetchingContainer = (
  fetchDataFn,
  rspRecsToPropsFn
) => Component => {
  const dataFetchingContainerClass = class extends React.Component {
    static defaultProps = {
      limit: 5,
      page: 0,
      refresh: false,
      refreshRate: 15000,
      usePaging: false,
    }

    state = {
      isLoading: true,
      records: [],
    }

    componentDidMount() {
      this.fetchData(fetchDataFn(this.props))
      if (this.props.refresh === true && this.props.usePaging === false) {
        // don't refresh data on paging views
        this.timerID = setInterval(
          () => this.fetchData(fetchDataFn(this.props)),
          this.props.refreshRate
        )
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.page === prevProps.page) return

      if (this.props.page > prevProps.page) this.fetchData(this.state.next())
      else if (this.props.page < prevProps.page)
        this.fetchData(this.state.prev())

      this.setState({isLoading: true, records: []})
    }

    componentWillUnmount() {
      if (this.timerID) {
        clearInterval(this.timerID)
        delete this.timerID
      }
    }

    fetchData(fetchDataPromise) {
      fetchDataPromise
        .then(r => this.responseToState(r))
        .then(newState => {
          this.setState(newState)
          return null
        })
        .catch(e => {
          handleFetchDataFailure()(e)
          this.setState({isLoading: false})
        })
    }

    responseToState(rsp) {
      return {
        isLoading: false,
        next: rsp.next,
        prev: rsp.prev,
        records: rspRecsToPropsFn(rsp.records),
      }
    }

    render() {
      return (
        <Component
          isLoading={this.state.isLoading}
          records={this.state.records}
          {...this.props}
        />
      )
    }
  }

  dataFetchingContainerClass.propTypes = propTypesContainer

  return withServer(dataFetchingContainerClass)
}

export {withDataFetchingContainer}
