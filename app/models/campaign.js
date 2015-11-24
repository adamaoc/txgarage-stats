import DS from 'ember-data';
import Ember from 'ember';
/* global moment */

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  slug: DS.attr('string'),
  totals: DS.attr('number'),
  start: Ember.computed('startDate', function() {
    // debugger;
    var date = moment(this.get('startDate'));
    return date;
  })
});
