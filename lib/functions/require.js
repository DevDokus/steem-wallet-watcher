// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
// Dont change anything in here if you do not
// know what you are doing! Or you will break it
// --------------------------------------------- \\

module.exports = {

  app: () => {
    return require('../core/app.js');
  },

  check: () => {
    return require('../core/check.js');
  },

  chalk: () => {
    return require('./chalk.js');
  }


};
