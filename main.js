// # REQUIRES
/*
API keys  go into the .env file in the format {SOCIAL NETWORK}_{KEY CLASS}.
*/
const dotenv = require("dotenv").config(),
      Twitter = require("twitter");


/*
Creates a Twitter instances and give it our account credential (which, as
you alredy know, are in the .env file)
*/
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
