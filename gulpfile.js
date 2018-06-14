var gulp = require('gulp');

var webserver = require('gulp-webserver')

var url = require('url')

var fs = require('fs');

var path = require('path')

var list = require('./data/list.json')
gulp.task('server', function() {
    gulp.src('src')
        .pipe(webserver({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify(list))
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})