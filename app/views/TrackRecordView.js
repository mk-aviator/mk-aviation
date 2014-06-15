(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.TrackRecordView = MKA.viewClasses.AbstractView.extend({
        name: 'trackrecord',
        el: '#descriptionHolder',
        templateId: 'trackrecord-tmpl',
        renderData: {
            trackRecords: [{
                    name: 'ASHISH SHETE',
                    subject: 'NAVIGATION'
            }, {
                    name: 'SHRENIKA BHAGAT',
                    subject: 'NAVIGATION'
            }, {
                    name: 'ISHWAR VYAS',
                    subject: 'NAVIGATION'
            }, {
                    name: 'SIRAJ ATTAR',
                    subject: 'NAVIGATION'
            }, {
                    name: 'DAMA PARIKH',
                    subject: 'NAVIGATION'
            }, {
                    name: 'SHALOMI UKRANDE',
                    subject: 'NAVIGATION'
            }, {
                    name: 'BURZIN DARUWALA',
                    subject: 'NAVIGATION'
            }, {
                    name: 'TEJASA AVASARE',
                    subject: 'NAVIGATION'
            }, {
                    name: 'MILANA DSOUZA',
                    subject: 'NAVIGATION'
            }, {
                    name: 'ABDUL BARI',
                    subject: 'NAVIGATION'
            }, {
                    name: 'DHARMIL JOSHI',
                    subject: 'NAVIGATION'
            }, {
                    name: 'PANKAJ DEVDA',
                    subject: 'NAVIGATION'
            }, {
                    name: 'ANKIT PAGDHARE',
                    subject: 'NAVIGATION'
            }, {
                    name: 'DAMA PARIKH',
                    subject: 'TEHNICAL GEN'
            }, {
                    name: 'SHALOMI UKRANDE',
                    subject: 'RTR'
            }, {
                    name: 'BURZIN DARUWALA',
                    subject: 'RTR'
            }, {
                    name: 'KEITHAIR MISQUITTA',
                    subject: 'RTR'
            }, {
                    name: 'NAMRATA MADAV',
                    subject: 'RTR'
            }, {
                    name: 'MAYUR RANGARI',
                    subject: 'NAVIGATION'
            }, {
                    name: 'SNEDEEN DMELLO',
                    subject: 'NAVIGATION'
            }, {
                    name: 'CHATTRAPAL JADEJA',
                    subject: 'NAVIGATION'
            }, {
                    name: 'JOBIN JOE',
                    subject: 'NAVIGATION'
            }, {
                    name: 'SAGAR',
                    subject: 'NAVIGATION'
            }, {
                    name: 'AKANSHA SHARMA',
                    subject: 'NAVIGATION'
            }]
        }
    });
}(window.MKA, window.jQuery, window.Backbone));