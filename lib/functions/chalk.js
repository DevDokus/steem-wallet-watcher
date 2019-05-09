////////////////////////////////////////////////////////////////////////////////
//////////////////////   The Curiosity Discord Project   ///////////////////////
////////////////////////////////////////////////////////////////////////////////
// The Curiosity Project - CuriosityDiscord.com

// Crossfire Games made by @Gizmo#5057
const chalk = require('chalk');

module.exports = {

  /* Background - No Colored Text */

  blue: function(msg) {
    return chalk.bgBlue.white(msg);
  },

  red: function(msg) {
    return chalk.bgRed.white(msg);
  },

  magenta: function(msg) {
    return chalk.bgMagenta.white(msg);
  },

  cyan: function(msg) {
    return chalk.bgCyan.white(msg);
  },

  green: function(msg) {
    return chalk.bgGreen.white(msg);
  },

  yellow: function(msg) {
    return chalk.bgYellow.black(msg);
  },

  /* No Background - Colored Text */

  _blue: function(msg) {
    return chalk.blue(msg);
  },

  _red: function(msg) {
    return chalk.red(msg);
  },

  _magenta: function(msg) {
    return chalk.magenta(msg);
  },

  _cyan: function(msg) {
    return chalk.cyan(msg);
  },

  _green: function(msg) {
    return chalk.green(msg);
  },

  _yellow: function(msg) {
    return chalk.yellow(msg);
  }

};
