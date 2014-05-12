(function (MKA, $, Backbone) {
    'use strict';
    MKA.routerClass = {
        MKARouter: Backbone.Router.extend({
            routes: {
                'home': 'renderHome',
                'classes': 'renderClasses',
                'salientfeatures': 'renderSalientFeatures'
            },
            renderHome: function () {
                MKA.views.home.render();
            },
            renderClasses: function () {
                MKA.views.classes.render();
            },
            renderSalientFeatures: function () {
                MKA.views.salientfeatures.render();
            }
        })
    };
}(window.MKA, window.jQuery, window.Backbone));