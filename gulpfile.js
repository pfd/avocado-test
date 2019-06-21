var gulp = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('hello', done => {
  console.log('hello!');
  done();
});

exports.default = defaultTask

