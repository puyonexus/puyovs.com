[![Netlify Status](https://api.netlify.com/api/v1/badges/aa48f6f6-77d0-4291-b6c9-d2737e284251/deploy-status)](https://app.netlify.com/sites/puyovs-net/deploys)

# PuyoVS.net Website
This is the source code for the Puyo VS website.

## Development
To get started with development, you need a copy of Git and Node.JS installed. The current Node.JS LTS should always be sufficient.

To install Git on Windows or macOS, grab a package from the official [Git website](https://git-scm.com/). For Linux and other UNIX-likes, please consult your operating system's preferred package repository. For example, on Debian and Ubuntu based distributions, you can install a copy of Git by issuing the command `sudo apt install git`. If you are uncomfortable with the Git CLI, you may also wish to try a UI like [GitHub Desktop](https://desktop.github.com/). [Visual Studio Code](https://code.visualstudio.com/) also contains some Git functionality and is the recommended text editor for development.

To install Node.JS on Windows or macOS, grab a package from the official [Node.JS download page](https://nodejs.org/en/download/). For Linux, it is recommended to use the [NodeSource repositories](https://github.com/nodesource/distributions) to get an up-to-date copy of Node.JS for many distributions; if your distribution is not covered, or you are on another UNIX-like operating system, try using the latest version available from your package manager or repository.

Once you have Node.JS installed and available to use, clone this repository. (You may use a GUI tool such as GitHub Desktop to do this.)

```sh
git clone git@github.com:puyonexus/puyovs.net.git
cd puyovs.net
```

Run `npm install` to install the dependencies.

```sh
npm install
```

Finally, run `npm run serve` to get a development server.

```sh
npm run serve
```

Success! You can now begin editing files and the changes should show up live in your local server. By default the local server will be available at [http://localhost:1234](http://localhost:1234), but check your console output to be sure.

PuyoVS.net is written in the [Pug template language](https://pugjs.org/language/attributes.html) and uses [Parcel Bundler](https://parceljs.org/) version 1 for bundling and minification.
