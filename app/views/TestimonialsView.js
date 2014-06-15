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
                stars: 5
            },{
                name: 'Ishwar Vyas',
                description: 'A very good class for navigation plus the tutor is friendly which helps become comfortable while studying adding to this, study material is very precisely made for DGCA exam.',
                stars: 4
            }, {
                name: 'Milana Dsouza',
                description: 'Mangesh Sir\'s classes not only cleared my Navigation exam in first attempt but also gave me knowledge beyond what is written in books! Besides this, Sir is very patient, dedicated and he keeps explaining a particular topic until its fully understood. Mangesh Sir is more than anything a friend to his students so learning is not stressful . . . its easy!',
                stars: 4
            }]
        }
    });
}(window.MKA, window.jQuery, window.Backbone));