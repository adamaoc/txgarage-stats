import DS from 'ember-data';

export default DS.Model.extend({
  campaign: DS.attr('string'),
  datetime: DS.attr('string'),
  page: DS.attr('string')
});
