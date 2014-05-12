(function (MKA, $, Backbone) {
    'use strict';
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses = {
        AbstractView: Backbone.View.extend({
            initialize: function () {
                if (this.init) {
                    this.init();
                }
            },
            render: function (data) {
                $('#descriptionBackground').removeClass().addClass(this.name);
                this.$el.removeClass().addClass(this.name);
                this.template(data || this.renderData);
                if (this.renderView) {
                    this.renderView();
                }
            },
            template: function (data) {
                this.$el.html(_.template($('#' + this.templateId).html(), data));
            }
        })
    };
}(window.MKA, window.jQuery, window.Backbone));