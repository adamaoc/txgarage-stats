import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.store.find('campaign', {campaign: params.camp_id});
  },
  setupController(controller, model) {
    // var clicks = this.store.find('click', {campaign: 'titan2015'}).then((res) => {
    //   console.log('clicks', res);
    // });
  }
});
