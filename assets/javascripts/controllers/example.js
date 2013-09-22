
import Em from 'ember';

var controller = Em.ObjectController.extend({
    actions: {
        showAnotherAlert: function() {
            window.alert('Event handled by controller.');
        }
    }
});

export default controller;

