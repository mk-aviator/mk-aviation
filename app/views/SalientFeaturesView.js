(function (MKA, $, Backbone) {
    'use strict';
    var console = window.console;
    MKA.viewClasses = MKA.viewClasses || {};
    MKA.viewClasses.SalientFeaturesView = MKA.viewClasses.AbstractView.extend({
        name: 'salientfeatures',
        el: '#descriptionHolder',
        templateId: 'salientfeatures-tmpl',
        renderData: {
            features: [
                'Guidance and coaching by Commercial Pilots.',
                'India’s only institute having consistently high “first attempt passing ratio” of its students.',
                'Basics of  Physics, Trigonometry, Algebra and Geometry are an integral part of course curriculum thus laying a strong foundation for students.',
                'Highly educated and experienced faculty.',
                'Question Banks  are carefully designed after years of research on DGCA exam patterns.',
                'Weekly tests conducted to assess knowledge and enhance confidence',
                'Highly customized and continuously updated study material as per latest DGCA recommendations.',
                'In-depth coverage of every essential topic.',
                'Highly effective teaching methodology which makes even the most complex concepts, very easy to understand.',
                'Simplified ways for solving numerical problems.',
                'State-of-the-art infrastructure well-lit and air conditioned classrooms.'
            ]
        }
    });
}(window.MKA, window.jQuery, window.Backbone));