/*
  App configuration example created by eoswebnetbp1
*/
const path = require('path');
let config = {};

// production mod
config.PROD = true;

// mongo uri and options
config.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
config.MONGO_OPTIONS = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true,
  dbName: 'EOSweb',
  user: 'root',
  pass: 'test123',
};

// cron processes (aggregation of main stat - actions, transactions, accounts, analytics)
config.CRON = true;
config.CRON_API = 'https://api-testnet.canfoundation.io:8443';

// anable TPS APS daemon aggregation
config.TPS_ENABLE = true;
config.MAX_TPS_TIME_UPDATE = 5000; // time of break between reload (leave by default)

// enable for private network (daemon for Actions, Accounts)
config.CUSTOM_GLOBA_STATS = true;

// producer json name
config.producerJSON = 'bp.json';

// telegram alert bot (depreceted)
config.telegram = {
  ON: false,
  TOKEN: '',
  TIME_UPDATE: 5000
};

// reserve nodes
config.endpoints = [
      'https://api-testnet.canfoundation.io:8443'
      // 'https://eos.greymass.com',
      // 'https://public.eosinfra.io', 
      // 'http://eosbp-0.atticlab.net'
];

// eosjs
config.eosConfig = {
  chainId: "5dad9f713ce25d88d509c54e69820eb5ddda1132fc15107b33b56ad6d7110de5",
  keyProvider: "",
  httpEndpoint: config.endpoints[0],
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true,
  logger: {
    error: console.error
  }
};


// api url for producers list
config.customChain = 'https://api-testnet.canfoundation.io:8443';

// api url for history
config.historyChain = 'https://history-testnet.canfoundation.io';

// tokens api
config.tokensAPI = 'http://api.light.xeos.me/api/account/eos/';

config.apiV = 'v1'; // api version
config.RAM_UPDATE = 5 * 60 * 1000; // time for ram update - /api/api.*.socket
config.HISTORY_UPDATE = 5 * 60 * 1000; // time for stats update - /api/api.*.socket 
config.MAX_BUFFER = 500000; // max buffer size for child processes (kb) - /crons
config.blockUpdateTime = 900; // mainpage upades frequency  - /api/api.*.socket in ml sec
config.offsetElementsOnMainpage = 10; // blocks on mainpage
config.limitAsync = 30; // max threads for async.js module  
config.updateTPS = 1000;

// slack notifications
config.loggerSlack = {
      alerts: {
        type: '',
        token: '',
        channel_id: '',
        username: '',
      }
};

module.exports = config;

