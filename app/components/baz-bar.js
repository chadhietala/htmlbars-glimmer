import Ember from 'ember';

let count = 0;
export default Ember.Component.extend({
  someProp: Ember.computed(function() {
    return 'some CP1 in baz bar';
  }),
  someProp2: Ember.computed(function() {
    return 'some CP2 in baz bar';
  }),
  someProp3: Ember.computed(function() {
    return 1;
  }),
  someProp4: Ember.computed(function() {
    return 'some CP4 in baz bar';
  }),
  someProp5: Ember.computed(function() {
    return 'some CP5 in baz bar';
  }),
  someProp6: Ember.computed(function() {
    return 2;
  }),
  treeOfGarbage: Ember.computed('someProp', 'someProp2', 'someProp3', 'someProp4', 'someProp5', 'someProp6', function() {
    let ret = 'WAT' + this.get('someProp') + (count % 2 ? this.get('someProp2') + this.get('someProp3') : 'MISS') + this.get('someProp4') + this.get('someProp5') + this.get('someProp6');
    count++;

    return ret;
  })
});
