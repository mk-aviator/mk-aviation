(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.ClassesView = MKA.viewClasses.AbstractView.extend({
        el: '#descriptionHolder',
        templateId: 'classes-tmpl'
    });
}(window.MKA, window.jQuery, window.Backbone));