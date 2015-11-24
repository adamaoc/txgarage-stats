import DS from 'ember-data';

export default DS.Model.extend({
  labels: DS.attr(),
  datasets: DS.attr()
});
