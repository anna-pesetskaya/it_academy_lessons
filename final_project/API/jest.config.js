const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  reporters: ['default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Contract Monitoring Test Report',
        publicPath: './reports',
        filename: 'test-report.html',
        enableMergeData: true,
        dataMergeLevel: 3,
      },
    ],
  ],
  maxWorkers: "20%",
};

module.exports = config;