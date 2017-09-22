# Datamining
Utility to access datastreaming from various social networks for later analysis. This is work in progress and we aim to add more sites as we advance.

## Getting Started
### Prerrequisites
You need [NodeJS](https://nodejs.org/en/) installed and configured.

### Installation
Clone (preferred) or download this repository and navigate to the folder, and then to download and install the dependencies:
```shell
npm install
```
You need to have a .env with your secrets and tokens in the same directory. It should look like this:
```
TWITTER_CONSUMER_KEY = "XXXXXXXXXXXXXXXXXXX"
TWITTER_CONSUMER_SECRET = "XXXXXXXXXXXXXXXXXXX"
TWITTER_ACCESS_TOKEN_KEY = "XXXXXXXXXXXXXXXXXXXXXXXX"
TWITTER_ACCESS_TOKEN_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXX"

```

### Usage
Navigate to the directory in which you installed  this script and execute it 
```shell
node app -f [TWITTER FILTER] -k [KEYWORD NEEDED FOR YOUR MINING]
```

Learn more about the filters and keywords in the [docs](https://dev.twitter.com/streaming/reference/post/statuses/filter)

You can always use
```shell
node app --help
```
to see the arguments and examples.
## TODO
- [ ] Add a CONTRIBUTING file!!
- [ ] Make the .env path a variable
- [X] Prettify the output to the console
- [ ] Implement tests!!
- [ ] Save results to DB
- [ ] Improve filter.js to remove noise
- [ ] Add more sites!!

## Problems? Suggestions?
Open an issue so we can look at it!.

## Contributing
Please read [CONTRIBUTING](https://github.com/cartometricsteam/datamining/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This is an Open Source project. See the [LICENSE](https://github.com/cartometricsteam/datamining/blob/master/LICENSE) file for details
