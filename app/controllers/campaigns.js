import Ember from 'ember';

export default Ember.Controller.extend({
  campaigns: Ember.computed('model', function() {
    return this.get('model');
  }),
});
