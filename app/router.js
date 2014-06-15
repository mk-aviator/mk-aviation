(function (MKA, $, Backbone) {
    'use strict';
    MKA.routerClass = {
        MKARouter: Backbone.Router.extend({
            routes: {
                '': 'renderDefault',
                'home': 'renderHome',
                'classes': 'renderClasses',
                'salientfeatures': 'renderSalientFeatures',
                'testimonials': 'renderTestimonials',
                'trackrecord': 'renderTrackRecord',
                'aboutus': 'renderAboutUs',
                'admissionform': 'renderAdmissionForm'
            },
            renderDefault: function () {
                MKA.router.navigate('home', {
                    trigger: true
                });
            },
            renderHome: function () {
                MKA.views.home.render();
            },
            renderClasses: function () {
                MKA.views.classes.render();
            },
            renderSalientFeatures: function () {
                MKA.views.salientfeatures.render();
            },
            renderTestimonials: function () {
                MKA.views.testimonials.render();
            },
            renderTrackRecord: function () {
                MKA.views.trackrecord.render();
            },
            renderAboutUs: function () {
                MKA.views.aboutus.render();
            },
            renderAdmissionForm: function () {
                MKA.views.admissionform.render();
            }
        })
    };
}(window.MKA, window.jQuery, window.Backbone));