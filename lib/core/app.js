const SteemBot = require('steembotter').default;
const _ = require('../functions/require.js');
const sqlite = require('sqlite');

var x = module.exports = {

  start: (opt, multi) => {
    function node() {
      if (opt.webSocket == '') return 'http://rpc.steemviz.com';
      return opt.webSocket;
    }
    console.log(_.chalk()._red(`-----------------------------------------------------------`));
    if (opt.mode.test == true) {
      console.log(_.chalk().red(`YOU ARE IN DRY MODE --- NOTHING WILL BE STORED IN THE DATABSE !!`));
      console.log(_.chalk()._red(`-----------------------------------------------------------`));
      setTimeout(function () {
        return x.dry(opt, node());
      }, 5000);
    };
    console.log(_.chalk()._red(`-----------------------------------------------------------`));
    console.log(_.chalk()._cyan(`[RPC NODE]: ${node()}`));
    if (opt.mode.blockchain == true) {
      console.log(_.chalk()._cyan(`[SETTINGS]: Blockchain Mode Activated`));
      setTimeout(function () {
        x.watchAll(opt, node());
      }, 5000);
    }

    if (opt.mode.single == true) {
      console.log(_.chalk()._cyan(`[SETTINGS]: Single Mode Activated`));
      setTimeout(function () {
        x.single(opt, node());
      }, 5000);
    }

    if (opt.mode.multi == true) {
      console.log(_.chalk()._cyan(`[SETTINGS]: Multi Mode Activated`));
      setTimeout(function () {
        x.multi(opt, multi, node());
      }, 5000);
    }
    console.log(_.chalk()._red(`-----------------------------------------------------------`));
    console.log(_.chalk()._yellow(`[INFO]: If multiple modes enabled.\nYou will see dublicated transactions in the console !`));
    console.log(_.chalk()._red(`-----------------------------------------------------------`));
  },

  watchAll: (opt, node) => {
    var username = opt.user;
    var postingkey = '';
    var bot = new SteemBot({
      username,
      postingkey,
      node
    });
    bot.onDeposit(handleDeposit);

    function handleDeposit(data, responder) {
      sqlite.run(`insert into blockchain (user, tFrom, amount, memo, timestamp) values ('${data.to}', '${data.from}', '${data.amount}', '${data.memo}', '${new Date()}')`);
      x.log(data);
    }
    bot.start();
  },

  single: (opt, node) => {
    var username = opt.user;
    var postingkey = '';
    var bot = new SteemBot({
      username,
      postingkey,
      node
    });
    bot.onDeposit(opt.user, handleDeposit);

    function handleDeposit(data, responder) {
      sqlite.run(`insert into single (user, tFrom, amount, memo, timestamp) values ('${data.to}', '${data.from}', '${data.amount}', '${data.memo}', '${new Date()}')`);
      x.log(data);
    }
    bot.start();
  },

  multi: (opt, m, node) => {
    var username = opt.user;
    var postingkey = '';
    var bot = new SteemBot({
      username,
      postingkey,
      node
    });
    bot.onDeposit(m, handleDeposit);

    function handleDeposit(data, responder) {
      sqlite.run(`insert into multi (user, tFrom, amount, memo, timestamp) values ('${data.to}', '${data.from}', '${data.amount}', '${data.memo}', '${new Date()}')`);
      x.log(data);
    }
    bot.start();
  },

  dry: (opt, node) => {
    var username = opt.user;
    var postingkey = '';
    var bot = new SteemBot({
      username,
      postingkey,
      node
    });
    bot.onDeposit(handleDeposit);

    function handleDeposit(data, responder) {
      x.log(data);
    }

    bot.start();
  },

  log: (data) => {
    console.log(_.chalk()._cyan(`${_.chalk()._yellow(`[USER]:`)} ${data.to} ${_.chalk()._yellow(`[RECEIVED]:`)} ${data.amount} ${_.chalk()._yellow(`[FROM]:`)} ${data.from}`));
  }

};
