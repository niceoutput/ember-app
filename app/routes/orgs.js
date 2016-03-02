import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{id: "emberjs"},
			{id: "ember-cli"},
			{id: "nodejs"},
			{id: "sass"},
			{id: "postcss"}
		];
	}
});
