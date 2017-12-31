import directory from '../data/directory'
const apayLogo = directory.anchors['apay.io'].logo
const rippleFoxLogo = directory.anchors['ripplefox.com'].logo

const decentralized = {
  StellarTerm: {
    home: 'stellarterm.com',
  },
  LuPoEx: {
    home: 'lupoex.com',
  },
  InterStellar: {
    home: 'interstellar.exchange',
  },
  Qryptos: {
    home: 'qryptos.com',
  },
}

const centralized = {
  Binance: {
    home: 'binance.com',
    accounts: ['GCO2IP3MJNUOKS4PUDI4C7LGGMQDJGXG3COYX3WSB4HHNAHKYV5YL3VC'],
  },
  BitcoinIndonesia: {
    home: 'bitcoin.co.id',
    accounts: ['GC4KAS6W2YCGJGLP633A6F6AKTCV4WSLMTMIQRSEQE5QRRVKSX7THV6S'],
  },
  Ripplefox: {
    home: 'ripplefox.com',
    accounts: ['GCLDH6L6FBLTD3H3B23D6TIFVVTFBLZMNBC3ZOI6FGI5GPQROL4FOXIN'],
    logo: rippleFoxLogo,
  },
  Poloniex: {
    home: 'poloniex.com',
    accounts: ['GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2'],
  },
  Bittrex: {
    home: 'bittrex.com',
    accounts: ['GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3'],
  },
  Kraken: {
    home: 'kraken.com',
    accounts: ['GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM'],
  },
  OKEX: {
    home: 'okex.com',
    accounts: ['GBOEEVARKVASOQSSXCAHNTGJTVALJE2QM3AQQ2K3VXACQ6JJREQRJZKB'],
  },
  AEX: {
    home: 'aex.com',
    accounts: ['GDZCEWJ5TVXUTFH6V5CVDQDE43KRXYUFRHKI7X64EWMVOVYYZJFWIFQ2'],
  },
  BTC38: {
    home: 'btc38.com',
    accounts: ['GB7GRJ5DTE3AA2TCVHQS2LAD3D7NFG7YLTOEWEBVRNUUI2Q3TJ5UQIFM'],
  },
  Changelly: {
    home: 'changelly.com',
    accounts: ['GBV4ZDEPNQ2FKSPKGJP2YKDAIZWQ2XKRQD4V4ACH3TCTFY6KPY3OAVS7'],
  },
  Exrates: {
    home: 'lk.exrates.me',
    accounts: ['GBKTJSNUSR6OCXA5WDWGT33MNSCNQHOBQUBYC7TVS7BOXDKWFNHI4QNH'],
  },
  PapayaBot: {
    home: 'papayabot.com',
    accounts: ['GBR3RS2Z277FER476OFHFXQJRKYSQX4Z7XNWO65AN3QPRUANUASANG3L'],
    logo: apayLogo,
  },
  PapayaSwap: {
    home: 'swap.apay.io',
    accounts: ['GBGVRE5DH6HGNYNLWQITKRQYGR4PWQEH6MOE5ELPY3I4XJPTZ7CVT4YW'],
    logo: apayLogo,
  },
}

export {decentralized, centralized}
