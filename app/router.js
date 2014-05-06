(function (MKA, $, Backbone) {
    'use strict';
    MKA.routerClass = {
        MKARouter: Backbone.Router.extend({
            routes: {
                'home': 'renderHome',
                'classes': 'renderClasses'
            },
            renderHome: function () {
                MKA.views.home.render();
            },
            renderClasses: function () {
                console.log('classes');
            }
        })
    };
}(window.MKA, window.jQuery, window.Backbone));