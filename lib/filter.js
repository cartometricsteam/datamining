const chalk = require('chalk');
/*
For now, it only put the tweet on the console. Later,
it will save it in a DB.
*/
var streamFilter = function(tweet) {
  console.log(chalk.green(tweet.user.screen_name, ' : ' , tweet.text));
};

module.exports = streamFilter;
