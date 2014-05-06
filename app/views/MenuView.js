(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.MenuView = MKA.viewClasses.AbstractView.extend({
        el: '#menuHolder',
        templateId: 'menu-tmpl',
        init: function () {
            this.render();
        }
    });
}(window.MKA, window.jQuery, window.Backbone));