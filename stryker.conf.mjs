// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", 'dashboard'],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",
  coverageAnalysis: "perTest",
  mutate: [
      'src/**/*.ts?(x)',
    '!src/**/__tests__/**/*.ts?(x)',
    '!{src,lib}/**/*@(.spec|.test|.stories|Spec|Test).ts?(x)'
  ],
 thresholds: { "high": 80, "low": 60, "break": 40 }
};
export default config;
