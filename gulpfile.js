var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix.sass('./assets/css/sass/app.scss', './public/css')
        .styles([
            './assets/css/vendor/normalize.css',
            './assets/css/vendor/bootstrap.min.css'
        ], './public/css/vendor.css');


    mix.scripts([
            './assets/js/vendor/jquery-1.12.0.min.js',
            './assets/js/vendor/modernizr-2.8.3.min.js',
            './assets/js/vendor/bootstrap.min.js'
        ], './public/js/vendor.js');
});
