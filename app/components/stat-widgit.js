import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stat-widget'],
  classNameBindings: ['color'],
  
  title: Ember.computed('data', function() {
    return this.get('data.title');
  }),
  time: Ember.computed('data', function() {
    return this.get('data.time');
  }),
  stat: Ember.computed('data', function() {
    return this.get('data.stat');
  }),
  footer: Ember.computed('data', function() {
    return this.get('data.footer');
  }),
  color: Ember.computed('data', function() {
    let color = this.get('data.color');
    if(!color) {
      return 'stat-widget--gray';
    }
    return 'stat-widget--' + color;
  })
});
