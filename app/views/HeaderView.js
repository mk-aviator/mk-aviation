(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.HeaderView = MKA.viewClasses.AbstractView.extend({
        el: '#headerHolder',
        templateId: 'header-tmpl',
        events: {
            'click .logo': function () {
                MKA.router.navigate('home', {
                    trigger: true
                });
            }
        },
        init: function () {
            this.render();
        }
    });
}(window.MKA, window.jQuery, window.Backbone));