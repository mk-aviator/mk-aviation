(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.TestimonialsView = MKA.viewClasses.AbstractView.extend({
        name: 'testimonials',
        el: '#descriptionHolder',
        templateId: 'testimonials-tmpl',
        renderData: {
            testimonials: [{
                name: 'Dama Parikh (CPL)',
                description: 'Got to know about M. K. AVIATION through teachers. Joined it up for NAVIGATION and cleared it in first attempt. This boosted my confidence and I appeared for technical through institute and cleared TECHNICAL. Now, I have joined it up for RTR. Within a span of year I got done with all the main papers of aviation industry and it was impossible to succeed without Capt Mangesh. All he taught was to LEARN MORE, DREAM MORE, PRACTICE MORE, BECOME MORE.',
                stars: 4
            },{
                name: 'Dama Parikh (CPL)',
                description: 'Got to know about M. K. AVIATION through teachers. Joined it up for NAVIGATION and cleared it in first attempt. This boosted my confidence and I appeared for technical through institute and cleared TECHNICAL. Now, I have joined it up for RTR. Within a span of year I got done with all the main papers of aviation industry and it was impossible to succeed without Capt Mangesh. All he taught was to LEARN MORE, DREAM MORE, PRACTICE MORE, BECOME MORE.',
                stars: 5
            }, {
                name: 'Dama Parikh (CPL)',
                description: 'Got to know about M. K. AVIATION through teachers. Joined it up for NAVIGATION and cleared it in first attempt. This boosted my confidence and I appeared for technical through institute and cleared TECHNICAL. Now, I have joined it up for RTR. Within a span of year I got done with all the main papers of aviation industry and it was impossible to succeed without Capt Mangesh. All he taught was to LEARN MORE, DREAM MORE, PRACTICE MORE, BECOME MORE.',
                stars: 4
            },{
                name: 'Dama Parikh (CPL)',
                description: 'Got to know about M. K. AVIATION through teachers. Joined it up for NAVIGATION and cleared it in first attempt. This boosted my confidence and I appeared for technical through institute and cleared TECHNICAL. Now, I have joined it up for RTR. Within a span of year I got done with all the main papers of aviation industry and it was impossible to succeed without Capt Mangesh. All he taught was to LEARN MORE, DREAM MORE, PRACTICE MORE, BECOME MORE.',
                stars: 5
            }]
        }
    });
}(window.MKA, window.jQuery, window.Backbone));