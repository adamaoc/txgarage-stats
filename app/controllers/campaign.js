import Ember from 'ember';

export default Ember.Controller.extend({
  campaign: Ember.computed('model', function() {
    return this.get('model.firstObject');
  }),
});
