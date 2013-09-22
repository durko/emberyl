
import Em from 'ember';

var route = Em.Route.extend({
    actions: {
        transitionToExample: function() {
            this.transitionTo('example');
        }
    }
});

export default route;

