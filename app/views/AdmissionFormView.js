(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.AdmisssionFormView = MKA.viewClasses.AbstractView.extend({
        name: 'admissionform',
        el: '#descriptionHolder',
        templateId: 'admissionform-tmpl'
    });
}(window.MKA, window.jQuery, window.Backbone));