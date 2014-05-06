(function (MKA, $) {
    'use strict';
    window.MKA = MKA = window.MKA || {};
    MKA.start = function () {
        this.views = {
            header: new this.viewClasses.HeaderView(),
            menu: new this.viewClasses.MenuView(),
            home: new this.viewClasses.HomeView()
        };
        this.router = new this.routerClass.MKARouter();
        Backbone.history.start();
        this.router.navigate('home', {
            trigger: true
        });
    };
}(window.MKA, window.jQuery));