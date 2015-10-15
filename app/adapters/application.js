import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // namespace: '/',
  // host: 'http://api.txgarage.com'
  host: 'http://localhost:8888'
});
