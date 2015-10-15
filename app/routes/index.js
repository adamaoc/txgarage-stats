import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      stats: store.find('stat'),
      campaigns: store.find('campaign'),
      clicks: store.find('click')
    });
  },
  setupController: function(controller, models) {
    var stats = models.stats;
    var campaigns = models.campaigns;
    var clicks = models.clicks;

    controller.set('widgets', stats);
    controller.set('campaigns', campaigns);
    controller.set('clicks', clicks);
  }
});
