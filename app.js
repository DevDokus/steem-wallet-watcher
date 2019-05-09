///////////////////////////////////
// Steem Wallet Watcher
// Made by Devske
//////////////////////////////////////////////////////////////////////
////////////////////////// DONT CHANGE THIS //////////////////////////
//////////////////////////////////////////////////////////////////////
const log = require('chalk');
const sqlite = require('sqlite');
sqlite.open(`./db.sqlite`);
var _ = require('./lib/functions/require.js');
var opt = {};
opt.log = {};
opt.mode = {};

//////////////////////////////////////////////////////////////////////
////////////////////////// PROGRAM OPTIONS ///////////////////////////
//////////////////////////////////////////////////////////////////////
opt.user = 'devske'; //[1];
opt.webSocket = ''; //[2];
opt.mode.test = false; //[3];
opt.mode.single = true; //[4];
opt.mode.blockchain = true; //[5];
opt.mode.multi = true; //[6];
const multiAccounts = [ //[7];
  'magicdice',
  'dicetime',
  'themarkymark',
  'hendersonp',
  'minnowhelper-1',
  'minnowhelper-2',
  'minnowhelper-3',
  'minnowhelper-4',
  'minnowhelper-5'
];

//////////////////////////////////////////////////////////////////////
/////////////////////////// INFORMATION //////////////////////////////
//////////////////////////////////////////////////////////////////////
// [1]: Your steemit username (without the @ !)
// [2]: [OPTIONAL]: Set your own custom webSocket
// [3]: Enable / Disable test mode (DRY MODE)
// [4]: Enable / Disable record your account transations
// [5]: Enable / Disable record all Blockchain transations
// [5]: Enable / Disable record multi account transations

// [7]: List of users to record when multi mode is Enabled.
// - You can add as many people on the list as you want !
// - Make sure to make new entries within the   '<name here>',
// - Make sure to NOT USE a comma ( , ) on the last entry.

// If you do not know how to code, I would advice not to change
// anything below this text and in other files.
//////////////////////////////////////////////////////////////////////
//////////////////// DONT CHANGE BELOW THIS LINE /////////////////////
//////////////////////////////////////////////////////////////////////
setTimeout(function () {
  return _.check().db(opt, multiAccounts);
}, 1000);
