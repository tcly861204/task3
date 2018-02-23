const gulp = require('gulp');
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');

/*压缩js*/
gulp.task('jsmin',function (cb) {
  return gulp.src(["src/*/*.js","src/*.js"])
      .pipe(babel())
      .pipe(gulp.dest("./dev"));
});

/*默认执行任务*/
gulp.task("default",function() {
  gulp.watch("src/*/*.js",["jsmin"]);
});


// gulp.task('jsmin1',function (cb) {
//   return gulp.src("src/*.js")
//       .pipe(babel())
//     //   .pipe(uglify({
//     //       mangle: true, //类型：Boolean 默认：true 是否修改变量名
//     //       compress: true  //类型：Boolean 默认：true 是否完全压缩
//     //   }))
//       .pipe(gulp.dest("./dev"));
// });

/*移动静态资源*/
gulp.task('copy',  function() {
return gulp.src('src/views/*')
    .pipe(gulp.dest('dev/views'));
});
// gulp.task('copy1',  function() {
// return gulp.src('src/public/*/*')
//     .pipe(gulp.dest('dev/public'));
// });

/*默认执行任务*/
gulp.task("default",function() {
  gulp.watch("src/*/*.js",["jsmin"]);
  // gulp.watch("src/*.js",["jsmin1"]);
  gulp.watch("src/views/*",["copy"]);
  // gulp.watch("src/public/*/*",["copy1"]);

});