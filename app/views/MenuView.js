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
                this.$('#menu .item.active').removeClass('active');
                $(event.currentTarget).addClass('active');
                MKA.router.navigate('home', {
                    trigger: true
                });
            },
            'click #classesOption' : function (event) {
                this.$('#menu .item.active').removeClass('active');
                $(event.currentTarget).addClass('active');
                MKA.router.navigate('classes', {
                    trigger: true
                });
            }
        }
    });
}(window.MKA, window.jQuery, window.Backbone));