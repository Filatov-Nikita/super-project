const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//const gcmq = require('gulp-group-css-media-queries');
//const rename = require('gulp-rename');
//const concat = require('gulp-concat');
const del = require('del');
var copy = require('copy');

var config = {
    src: './public',
    build: './resources/assets/old-image',
    img: {
        src: '/img/*',
        dest: '/img/'
    },
    css: {
        src: '/css/*',
        dest: '/css/'
    },
};

gulp.task('img', function(){
    gulp.src(config.src + config.img.src)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.src + config.img.dest));
});


gulp.task('css', function(){
    gulp.src(config.src + config.css.src)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.build + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('del', function(){
    let path = config.build + '/*';
    
    if(path.substr(0, 1) === '/'){
        console.log("never delete files from root :)");
    }
    else{
        del.sync(path);
    }
});
    
gulp.task('copy', function(){
    copy(config.src + config.img.src, config.build, function () {});
});

gulp.task('imagemin', ['del', 'copy', 'img'], function(){});

gulp.task('preproc', function(){
   gulp.src(config.src + config.preproc.src)
       .pipe(preproc())
       .pipe(gcmq())
       .pipe(sourcemaps.init())
       .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
       }))
       .pipe(cleanCSS({
           level: 2
       }))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest(config.build + config.preproc.dest))
       .pipe(browserSync.reload({
            stream: true
        }));
});
