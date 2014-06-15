(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.MenuView = MKA.viewClasses.AbstractView.extend({
        el: '#menuHolder',
        templateId: 'menu-tmpl',
        init: function () {
            this.render();
        },
        events: {
            'click #homeOption' : function (event) {
                MKA.router.navigate('home', {
                    trigger: true
                });
            },
            'click #classesOption' : function (event) {
                MKA.router.navigate('classes', {
                    trigger: true
                });
            },
            'click #salientfeaturesOption' : function (event) {
                MKA.router.navigate('salientfeatures', {
                    trigger: true
                });
            },
            'click #testimonialsOption' : function (event) {
                MKA.router.navigate('testimonials', {
                    trigger: true
                });
            },
            'click #trackrecordOption': function (event) {
                MKA.router.navigate('trackrecord', {
                    trigger: true
                });
            },
            'click #aboutusOption' : function (event) {
                MKA.router.navigate('aboutus', {
                    trigger: true
                });
            },
            'click #admissionformOption' : function (event) {
                MKA.router.navigate('admissionform', {
                    trigger: true
                });
            }
        }
    });
}(window.MKA, window.jQuery, window.Backbone));