// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  BUNDLES,
  getPluginConfig,
  splitChunksName
} = require('./desktop/core/src/desktop/js/webpack/configUtils');
const shared = require('./webpack.config');

module.exports = {
  devtool: shared.devtool,
  mode: shared.mode,
  target: 'webworker',
  performance: shared.performance,
  resolve: shared.resolve,
  entry: {
    sqlLocationWebWorker: ['./desktop/core/src/desktop/js/sql/sqlLocationWebWorker.js'],
    sqlSyntaxWebWorker: ['./desktop/core/src/desktop/js/sql/sqlSyntaxWebWorker.js']
  },
  optimization: {
    minimize: false,
    splitChunks: {
      name: splitChunksName
    }
  },
  output: {
    path: __dirname + '/desktop/core/src/desktop/static/desktop/js/bundles/workers',
    filename: shared.output.filename,
    chunkFilename: shared.output.chunkFilename,
    globalObject: 'this'
  },
  module: shared.module,
  plugins: getPluginConfig(BUNDLES.WORKERS).concat([
    new CleanWebpackPlugin([
      `${__dirname}/desktop/core/src/desktop/static/desktop/js/bundles/workers`
    ])
  ])
};
