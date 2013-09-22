
import Em from 'ember';

var controller = Em.ObjectController.extend({
    applicationName: 'Emberyl - yet another ember template.',
    contentVisible: false,

    actions: {
        toggleContent: function() {
            this.toggleProperty('contentVisible');
        }
    }
});

export default controller;

