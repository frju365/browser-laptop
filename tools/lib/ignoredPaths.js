/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = [
  'pre-commit',
  'pre-push',
  'test/',
  'docs/',
  'tools/',
  'signcode-tf',
  'rx',
  'nslog',
  'eslint',
  'cppunitlite',
  'caniuse-db',
  'cross-env',
  'spectron',
  '\\.(0|13ctype|APACHE2|BSD|DOCS|DS_Store|LESSER|Makefile|a|ac|aff|after|am|arcconfig|arclint|babelrc|bat|before|bnf|brave-gyp|c|cardinalrc|cc|cfg|closure-compiler|cmake|cmd|covignore|cpp|csv|cxx|d|def|deps|dic|dll|dntrc|dockerignore|dsp|editorconfig|editorconfig~|el|enc|entitlements|eot|esprima|flow|flowconfig|gitattributes|githug|gitignore|gitattributes|gitignore|gitkeep|gitmodules|gnu|gradle|gyp|gypi|gz|h|hbs|hxx|idl|iml|in|inc|include|info|jade|java|jsfmtrc|jshint|jshintignore|jshintrc|jslintrc|jst|js~|keep|lint|lintignore|lock|log|ls|m4|mailmap|map|markdown|md|mdown|md~|mem|min-wd|mk|mkd|mm|mustache|myspell|myspell|name|nsh|nsi|nsprc|nuspec|nvmrc|o|old|orig|otf|param|patch|pegjs|post|pre|pro|py|rej|s|sage|scss|settings|sh|skip|source-map|stamp|swo|tap|targ|template|tern-port|tern-project|testignore|tm_properties|tmp|tpl|ts|txt|un~|vscode|xcf|xml|yaml|yml)$',
  '/deps/',
  'Release/obj',
  'obj.target',
  'ad-block/(node_modules|test|perf|sample|scripts|test|vendor|ABPFilterParserData.dat)',
  'tracking-protection/(node_modules|test|data|scripts|vendor)',
  'tracking-protection/build/node_modules',
  'tracking-protection/build/Release/(sample.exe|test.exe)',
  'sqlite3/src',
  'nsp/node_modules',
  'electron-installer-squirrel-windows',
  'electron-chromedriver',
  'electron-installer-debian',
  'node-notifier/vendor',
  'node-gyp',
  'npm',
  'jsdoc',
  'docs',
  'sinon',
  'electron-download',
  'electron-rebuild',
  'electron-packager',
  'electron-builder',
  'electron-prebuilt',
  'electron-rebuild',
  'electron-winstaller-fixed',
  'muon-winstaller',
  'electron-installer-redhat',
  'flow-bin',
  'babel$',
  'babel-(?!polyfill|regenerator-runtime|preset-env)',
  'jsdom-global',
  'react-addons-perf',
  'react-addons-test-utils',
  'enzyme',
  'git-rev-sync',
  'sqlite3',
  'uglify-js',
  'webdriverio',
  'webpack-dev-server',
  'Brave(.+)',
  'brave-(.+)'
]
