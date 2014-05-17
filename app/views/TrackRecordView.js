(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.TrackRecordView = MKA.viewClasses.AbstractView.extend({
        name: 'trackrecord',
        el: '#descriptionHolder',
        templateId: 'trackrecord-tmpl'
    });
}(window.MKA, window.jQuery, window.Backbone));