# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). Each changelog entry gets prefixed with the category of the item (Added, Changed, Depreciated, Removed, Fixed, Security).

## [2023.11]

- Chore: WordPress 6.4.1 Update
- Chore: Plugin updates - advanced-custom-fields-pro:6.2.2, limit-login-attempts-reloaded:2.25.26, seo-by-rank-math:1.0.205, safe-svg:2.2.1

## [2023.10]

- Chore: Update package.json dependencies and related scripts. Update supported browsers (browserlist).
- Added: Terms block v1.0.0. Displays a set of terms for a given taxonomy. Is able to display those terms in a few different ways (links, pills).
- Updated: WordPress Core update to 6.3.2
- Updated: Disable Emojis to 1.7.6, Limit Login Attempts Reloaded to 2.25.25, RankMath to 1.0.203, ACF Pro to 6.2.1.1
- Adds: Lighthouse GitHub Action for automatic track of SEO, Accessability, Performance, and Best Practices.

## [2023.08]

- Added: GTM4WP Plugin for handling Google Tag Manager.
- Updated: Deployments to use the secrets.COMPOSER_AUTH_JSON for auth.json file.
- Updated: Composer method for pulling in ACF requiring the use of a auth.json file.
- Updated: WordPress core to 6.3, ACF to 6.2, Gravity Forms to 2.7.12, Local Lando PHP version to 8.1, Yoast SEO to ^20.1.
- Updated: Misc composer packages updated to match local PHP version
- Added: Stacking order controls on the Column block. This allows editors to control what order columns appear in at mobile widths.
- Updated: Swapped Yoast SEO plugin out in favor of [Rank Math SEO](https://wordpress.org/plugins/seo-by-rank-math/) plugin. Remove Redirection plugin as Rank Math supports the same feature. Updated primary term helper method to support both plugins' primary term meta value.

## [2023.06]

- Added: Ability to hide ACF menu item using the `HIDE_ACF_MENU` constant (boolean true hides the menu item) or if we are in a production environment.

## [2023.05]

- Security: Removed default support for XML-RCP Authentication.

## [2023.04]

- Added: GitHub actions for Coding Standards, Static Analysis and Testing.
- Added: Default testing suite utilizing Slic.
- Updated: local-config.json & browsersync.config.js keys to work for both Lando and LocalWP.
- Updated: package.json config so npm scripts run using the config keys rather than repeated strings.
- Updated: webpack.config.js to make use of package.json config keys and fix an issue with the block.json file not being copied correctly on build.
- Added: PostCSS custom selectors, custom media queries, and globalCSS configs and examples.
- Chore: Updated WordPress Core to v6.2, Advanced Custom Fields Pro to v6.0.7, and `composer update` for all misc dependencies and plugins.
- Chore: Updated package.json dependencies and related scripts.
- Changed: Moved CHANGELOG.md from `/.github` to project root.

## [2022.10]

- Added: Initial Repo Setup.
