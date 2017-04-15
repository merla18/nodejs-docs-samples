/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('../../../system-test/_setup');

const tools = require('@google-cloud/nodejs-repo-tools');
const config = require('./config');

// TODO: Need a way to add env vars to the yaml file during deployment
test.serial.skip(`${config.test}:deploy`, (t) => {
  t.plan(0);
  return tools.testDeploy(config)
    .then(
      () => tools.deleteVersion(config),
      (err) => tools.deleteVersion(config).then(() => Promise.reject(err))
    );
});
