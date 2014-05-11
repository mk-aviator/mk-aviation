(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.HomeView = MKA.viewClasses.AbstractView.extend({
        name: 'home',
        el: '#descriptionHolder',
        templateId: 'home-tmpl'
    });
}(window.MKA, window.jQuery, window.Backbone));