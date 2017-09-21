/* Simple and to the point. We will enhance it if needed, but for now it only
have to show a log of the errors. However, for production it should log the
error to a DB or log file.
 */
var streamError = function(err) {
  console.log(err);
};

module.exports = streamError;

