const gulp = require('gulp');
const ts = require('gulp-typescript'),
      del = require('del');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('scripts', () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);