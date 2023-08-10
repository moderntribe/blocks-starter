# Moose

## Requirements

* Git
* Composer
* Node v16.13.1 or higher & NPM v8.1.2 or higher
* NVM is recommended for managing multiple versions of node on the same workstation.

## Local Development

One of the goals of this starter is to allow developers to use whatever local development platform that works best for them. There are some details below for Lando and Local by Flywheel. If you are using a different environment, feel free to add it.

### Lando

You can use [Lando](https://lando.dev/download/) to for your local development. When starting a new project, change the name value in the `.lando.yml` file to the name of the project. Then run `lando start` to build the environment. The `local-config.php` is setup to support lando out of the box. Once the lando is running, you can follow the BE Setup instructions for the composer commands to finish the setup. When running composer commands make sure to run `lando composer [command]` in order to run composer in the container.

### Local by Flywheel

It is recommeneded to create a blank blueprint in Local by Flywheel in order to make it easier to startup a project. Select the blank blueprint, clone in the repository to the public folder and then follow the BE Setup instructions for getting started. Make sure to use the Open Site Shell option to run composer commands allowing you to have the right PHP version in your shell path.

## Getting Started

### BE Setup

Run `composer run setup-project` to copy the `.env`, `auth.json`, and `local-config` files over. Once that has completed, update the `.env` file to include the required license for Gravity Forms and update the `auth.json` to include the [ACF License for the username](https://www.advancedcustomfields.com/resources/installing-acf-pro-with-composer/) and the site url (`https://moose.lndo.site`) in the password section. Once the keys are up to date, run `composer install` to pull in the required libraries.  Then run `composer setup-wordpress` to install WordPress using WP Cli. Depending on your local environment you may need to update your `local-config.php` for the local environment you are working in.

``` bash
composer setup-project
# ... update .env file if you need ACF Pro and Gravity Forms
composer install
composer setup-wordpress
```

For WordPress updates, you can change the `--version=` value in the `setup-wordpress` composer script.

### Front End Dev

1. Duplicate the `local-config-sample.json` file into a git-ignored `local-config.json` and update the certsPath and host entries to match your local dev set up.
1. In the root of the project, run `nvm use` to confirm the correct version of node is in-use.
1. Run `npm install` to install the required dependencies.
1. Run `npm run dev` to start the webpack watch & browsersync tasks.

### Front End Scripts

* `npm run dist`: Builds production versions of all assets.
* `npm run dev`: Builds dev assets and starts an instance of browsersync to handle live-reload for changes.
* `npm run create-block`: Starts an interactive shell script to generate a new block per WordPress's [Create Block script](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) and the theme config.
* `npm run format`: Runs Prettier on all theme assets (css, scss, js, & json files).
* `npm run lint`: Prettifies, lints (and fixes) theme & root assets (css, scss, js, & json files). Also see the sub-tasks for specific file types.
* `npm run server_dist`: Alias for the `dist` task.

These scripts are based on WordPress's [WP-Scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package. See the documentation there for additional information.

There are also several additional scripts aliased directly from wp-scripts that may be useful:

* `packages-check`
* `check-engines`
* `check-licenses`

## Testing

A test suite is ready to use utilizing [Slic](https://github.com/stellarwp/slic). You can follow the instructions on the Slic readme to configure testing locally. Slic utilizes [WP-Browser](https://wpbrowser.wptestkit.dev/) and [Codeception](https://codeception.com/) to run tests in a docker container allowing us to use all the generate commands those libraries have to offer.

The only major setup config you must do for slic is set the php-version to 8.0 since the default is 7.4.  You can do this by running `slic php-version set 8.0`.

Once Slic is installed, you can go to the project root and enter `slic here` telling slic that you want to run tests from this folder.  Then run `slic use site` telling slic that you want to run the tests for the full site and not just a singular plugin or theme. Then you are ready to start testing by running `slic run wpunit`. You can exchange out the `wpunit` for any of the testing suites you would like to run (`wpunit`, `unit`, `functional`, or `acceptance`).  

## Modern Tribe

[![Modern Tribe](https://moderntribe-common.s3.us-west-2.amazonaws.com/marketing/ModernTribe-Banner.png)](https://tri.be/contact/)
