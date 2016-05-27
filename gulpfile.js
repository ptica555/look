var gulp = require("gulp");
var less = require("gulp-less");
var spritesmith = require("gulp.spritesmith")

gulp.task("spriteCreator", function(){
	gulp.src("dev/img/*.png").pipe(spritesmith({
		imgName: "build/img/sprite.png",
		cssName: "dev/less/imports/sprite.less" ,
		algoritm: "binary-tree",
		padding:10
	})).pipe(gulp.dest("./"));
});

gulp.task("cssCreator",function(){
	gulp.src("dev/less/general.less").pipe(less()).pipe(gulp.dest("build/css"));
})