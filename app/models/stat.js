import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  time: DS.attr('string'),
  stat: DS.attr('string'),
  footer: DS.attr('string'),
  color: DS.attr('string'),
  link: DS.attr('string')
});
