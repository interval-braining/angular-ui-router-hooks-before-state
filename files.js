beforeStateFiles = {
  angular: [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js'
  ],
  build: [
    'build/*.min.js'
  ],
  src: [
    'src/ui-router-hooks-before-state.js'
  ],
  test: [
    "test/**/*Spec.js"
  ],
  testUtils: [
    'bower_components/angular-mocks/angular-mocks.js'
  ]
};

if (exports) {
  exports.files = beforeStateFiles;
}
