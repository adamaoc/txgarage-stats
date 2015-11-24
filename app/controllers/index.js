import Ember from 'ember';

export default Ember.Controller.extend({
  data: null,

  getData: function() {
    $.get( "http://localhost:8888/views/", ( data ) => {
      this.set('data', data.views);
    });
  }.on('init'),

  chartData: Ember.computed('data', function() {
    return this.get('data');
  })


});
