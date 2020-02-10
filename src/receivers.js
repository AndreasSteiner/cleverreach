var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		get: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '?' + queryString.stringify(data)
			});
		},
		getEvents: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/events?' + queryString.stringify(data)
			});
		},
		getGroups: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/groups?' + queryString.stringify(data)
			});
		},
		getOrders: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/orders?' + queryString.stringify(data)
			});
		},
		getAttributes: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/attributes?' + queryString.stringify(data)
			});
		},
		getTags: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/tags?' + queryString.stringify(data)
			});
		},
		createEvent: function(id, data) {			
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'receivers.json/' + id + '/events',
				body: data,
				json: true
			});
		},
		createOrder: function(id, data) {			
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'receivers.json/' + id + '/orders',
				body: data,
				json: true
			});
		},
		createTag: function(id, data) {			
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'receivers.json/' + id + '/tags',
				body: data,
				json: true
			});
		},
		checkValid: function(data) {			
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'receivers/isvalid.json',
				body: data,
				json: true
			});
		},
	};
};
