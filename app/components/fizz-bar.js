import Ember from 'ember';

let i = 0;

export default Ember.Component.extend({
  fizz: Ember.computed(function() {
    let ret = !!(i % 2);
    i++;
    return ret;
  }),
  someCP: Ember.computed.or('fizz', 'bar')
});
