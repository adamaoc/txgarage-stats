import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stat-widget'],
  classNameBindings: ['color'],

  title: Ember.computed('data', function() {
    return this.get('data.title');
  }),
  slug: Ember.computed('data', function() {
    return this.get('data.slug');
  }),
  stat: Ember.computed('data', function() {
    return this.get('data.stat').toLocaleString();
  }),
  color: Ember.computed('data', function() {
    let color = this.get('data.color');
    if(!color) {
      return 'stat-widget--gray';
    }
    return 'stat-widget--' + color;
  })
});
