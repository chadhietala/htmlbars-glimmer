import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', { path: 'profile/:id' });
  this.route('search');
  this.route('me');
});

export default Router;
