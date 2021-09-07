// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
.setPublicPath('public')
.sass('src/scss/app.scss', 'css')
.options({
    postCss: [require('tailwindcss')],
    processCssUrls: false
})
.browserSync({
    server: './',
    files: ['./**/*.html', './dist'],
});