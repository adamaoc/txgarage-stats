import Ember from 'ember';

export default Ember.Controller.extend({
  // campaign: Ember.computed('model', function() {
  //   return this.get('model.firstObject');
  // }),
  selectedCamp: Ember.computed('model', function() {
    return this.store.find('campaign', {campaign: 'titan2015'}).then((resp) => {
      return resp.get('firstObject');
    });
  }),
});
