import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      stats: store.find('stat'),
      campaigns: store.find('campaign'),
      newsletters: store.find('newsletter')
    });
  },
  setupController: function(controller, models) {
    var stats = models.stats;
    var campaigns = models.campaigns;
    var clicks = models.clicks;
    var newsletters = models.newsletters;

    controller.set('widgets', stats);
    controller.set('campaigns', campaigns);
    controller.set('clicks', clicks);
    controller.set('newsletters', newsletters);
  }
});
