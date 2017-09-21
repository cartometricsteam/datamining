// # REQUIRES
/*
API keys  go into the .env file in the format {SOCIAL NETWORK}_{KEY CLASS}.
*/
const dotenv = require("dotenv").config(),
      Twitter = require("twitter"),
      argv = require("yargs")
             .usage('Usage: $0 --filter=[str] --keyword=[str]')
             .option( "f", { alias: "filter", demand: true, describe: "Filter keyword for the Twitter API", type: "string" } )
             .option( "k", { alias: "keyword", demand: true, describe: "Keyword you want to use for filtering", type: "string" } )
             .example("$0 -f \"track\" -k \"javascript\" ", "Get tweets about Javascript")
             .epilog( "Copyright (c) 2017 Cartometrics under MIT License" )
             .argv,
      streamFilter = require("./lib/filter"),
      streamError = require("./lib/error");


// # VARIABLES
/*
Creates a Twitter instances and give it our account credential (which, as
you alredy know, are in the .env file)
*/
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
/*
Will be passed to the Twitter stream as the filtering token of the API.
*/
const token = {};


// # MAIN LOGIC

/*
Construct the token from the arguments given.
*/
token[argv.filter] = argv.keyword;

/*
Connect to Twitter stream with the user credentials and the given token
*/

client.stream("statuses/filter", token, function (stream) {
  stream.on("data", streamFilter);
  stream.on("error", streamError);
});

