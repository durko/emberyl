
import Em from 'ember';

var route = Em.Route.extend({
    actions: {
        showAlert: function() {
            window.alert('Event handled by route.');
        }
    }
});

export default route;

