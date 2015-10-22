import Ember from 'ember';

export default Ember.Controller.extend({
  campaign: Ember.computed('model', function() {
    return this.get('model.firstObject');
  }),
  clicks: Ember.computed('campaign', function() {
    const campaign = this.get('campaign.slug');
    return this.store.find('click', {campaign: campaign});
  })
});
