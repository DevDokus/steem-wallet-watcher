const _ = require('../functions/require.js');
const sqlite = require('sqlite');

module.exports = {

  db: (opt, multi) => {
    sqlite.run(`create table if not exists single (user text, tFrom text, amount text, memo text, timestamp text)`);
    sqlite.run(`create table if not exists multi (user text, tFrom text, amount text, memo text, timestamp text)`);
    sqlite.run(`create table if not exists blockchain (user text, tFrom text, amount text, memo text, timestamp text)`);
    return _.app().start(opt, multi);
  }

};
