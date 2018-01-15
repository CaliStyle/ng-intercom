# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.0-beta.11] - 2018-1-4
### Added
- Configuration options (that would otherwise be in `window.intercomSettings`)
- Add a somewhat typed input for `Intercom.boot` and `Intercom.update`

### Removed
- **BREAKING CHANGE**: Removed deprecated `Intercom.init()` method


## [1.0.0-beta.10] - 2017-11-15
### Fixed
- **BREAKING CHANGE**: `ng-intercom` now requires peers of Angular v5. Please update your applications, or you may get an error when compiling.


## [1.0.0-beta.9] - 2017-11-01
### Fixed
- Make NPM dependencies compatible with Angular v5

## [1.0.0-beta.8] - 2017-10-14
### Fixed
- Clean up dependencies and structure
- Add compatibility with Angular v5

## [1.0.0-beta.7] - 2017-10-13
### Fixed
- Fix load script

## [1.0.0-beta.6] - 2017-09-06
### Fixed
- Properly inject options providers
- Set property onUnreadCountChange to correct value (Closing #20)

## [1.0.0-beta.3] - 2017-09-03
### Added
- **semver-major**: Create an interface to interact with Leads API (https://developers.intercom.com/v2.0/reference)


## [1.0.0-beta.1] - 2017-08-23
### Added
- **semver-major**:Add option to watch router events and fire Intercom update, as is standard practice in SPAs (#17)
- Added peer dependency for `@angular/router`. It will warn if you don't have the router installed, but it is not required to function if you are not using `updateOnRouterChange`.

### Fixed
- Fix issue with production build throwing error (#19)
- Only fire warnings if in development mode, so production code executes without warnings.

## [1.0.0-beta.0] - 2017-08-22
### Fixed
- Resolved an error where `undefined` was being exported from the module.
- Removed CommonModule from exports array

## [1.0.0-alpha.1] - 2017-07-10
### Added
- **semver-major**: New methods to line up with Intercom documentation
- **semver-major**: New directives

### Deprecated
- **semver-major**: `intercom.init()` method

### Removed
- IntercomEnvironment class
- IntercomBrowser class
- IntercomNode class


## [0.2.2] - 2017-04-21
### Fixed
- Fix reference in package.json


## [0.2.0] - 2017-03-10
### Added
- **semver-minor**: AoT compatibility
- `trackEvent()` method

### Fixed
- Move to Angular compiler so it acutally works
- Clean up module format setup
