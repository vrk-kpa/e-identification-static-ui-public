# Sevi identification UI

## Description
Layout and javascript files for e-identification projects.

Mostly implemented using ReactJS.

## Prerequisities
- npm
- gulp (optional to install globally)
- sass (version 3.4 or higher)
- compass

Install external dependencies:
```
sudo apt-get install ruby-dev
sudo gem install compass
```

<a name="npm_dependencies">
Install npm dependencies:
</a>

````
npm install
````

## Check current pages

[Re-install npm dependencies](#npm_dependencies)

1. Start gulp watch: ``npm run-script watch`` (or ``gulp watch`` if gulp is installed globally)
2. Open <a href="localhost:8080/dev_index.html">localhost:8080/dev_index.html</a>
   Follow links and browser will open pages from *dev* folder

## Development and deployment

After changes in package.json, one needs to [re-install npm dependencies](#npm_dependencies)
(Unless you changed the package.json via e.g. ```npm install example-bag-of-node-tricks --save-dev``` )

See [GULPFLOWS.md](./GULPFLOWS.md) for more info about the gulpflows available.

#### Development build

Paths to javascript and stylesheet files are templated to the html files.
A gulp task takes care of templating and copying files into *dev* folder.
Html files can thereafter be opened in browser from that folder.

Therefore, the development flow is as follows

1. Start gulp dev watch: ``npm run-script watch`` (or ``gulp watch``)
2. Modify a file
3. Open <a href="localhost:8080/dev_index.html">localhost:8080/dev_index.html</a>
   Follow links and browser will open pages from *dev* folder

#### Deployment build

Either run the NPM dist script:
````
npm run-script dist-build
````
or the gulp dist task:
````
gulp dist-build
````

All files are directory *dist/*. This directory contains *pages* and *resources* folders and can as it is be copied under the *static* folder in auth-config.
