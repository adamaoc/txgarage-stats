import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('campaigns');
  this.route('campaign', { path: '/campaign/:camp_id' });
});

export default Router;
