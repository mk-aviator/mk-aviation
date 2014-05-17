(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.AboutUsView = MKA.viewClasses.AbstractView.extend({
        name: 'aboutus',
        el: '#descriptionHolder',
        templateId: 'aboutus-tmpl'
    });
}(window.MKA, window.jQuery, window.Backbone));