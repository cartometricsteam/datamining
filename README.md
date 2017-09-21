# Datamining
Utility to access datastreaming from various social networks for later analysis. This is work in progress and we aim to add more sites as we advance.

## Getting Started
### Prerrequisites
You need (NodeJS)[https://nodejs.org/en/] installed and configured.

### Installation
Clone or download this repository and navigate to the folder, and then to download and install the dependencias:
```shell
npm install
```

### Usage
Navigate to the directory in which you installed  this script and execute it 
```shell
node main -f [TWITTER FILTER] -k [KEYWORD NEEDED FOR YOUR MINING]
```

You can learn more about the filters and keywords in the (docs)[https://dev.twitter.com/streaming/reference/post/statuses/filter]

You can always use
```shell
node main --help
```
to see the arguments and examples.
## TODO
- [ ] Add a CONTRIBUTING file!!
- [ ] Prettify the output to the console
- [ ] Implement tests!!
- [ ] Save results to DB
- [ ] Improve filter.js to remove noise
- [ ] Add more sites!!

## Problems?
Open an issue with your problem so we can look at it!.

## Contributing
Please read (CONTRIBUTING)[https://github.com/cartometricsteam/datamining/blob/master/CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

## License
This is an Open Source project. See the (LICENSE)[[https://github.com/cartometricsteam/datamining/blob/master/LICENSE.md]] file for details
