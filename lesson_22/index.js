import reporter from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
      "App Version": "0.3.2",
      "Test Environment": "STAGING",
      "Browser": "Chrome",
      "Platform": "Windows 11",
      "Parallel": "Scenarios",
      "Executed": "Remote"
    },
    failedSummaryReport: true,
};

reporter.generate(options);