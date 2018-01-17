/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.DefaultApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * SEOgenie REST Specification Edit or GenerateBakend at https://editor.swagger.io
 * Version: 1.0.0
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
/**
 * @license Private
 */

goog.provide('API.Client.DefaultApi');

goog.require('API.Client.JsonObject');
goog.require('API.Client.LoginData');
goog.require('API.Client.apiResponse');
goog.require('API.Client.error');
goog.require('API.Client.keyword');
goog.require('API.Client.page');
goog.require('API.Client.site');
goog.require('API.Client.user');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.DefaultApi = function($http, $httpParamSerializer, $injector) {
	/** @private {!string} */
	this.basePath_ =  '/api';

	/** @private {!Object<string, string>} */
	this.defaultHeaders_ = $injector.has('DefaultApiDefaultHeaders')
		?
		/** @type {!Object<string, string>} */ (
			$injector.get('DefaultApiDefaultHeaders'))
		: {};

	/** @private {!angular.$http} */
	this.http_ = $http;

	/** @package {!Object} */
	this.httpParamSerializer = $injector.get('$httpParamSerializer');
};
API.Client.DefaultApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * Login to SEOgenie System
 * Login to the System
 * @param {!LoginData} body Login Data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.apiResponse>}
 */
API.Client.DefaultApi.prototype.accountLoginPost = function(body, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/account/login';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'body' is set
	if (!body) {
		throw new Error('Missing required parameter body when calling accountLoginPost');
	}
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'POST',
		url: path,
		json: true,
		data: body,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * 
 * Verify Site availability
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.apiResponse>}
 */
API.Client.DefaultApi.prototype.checkSite = function(opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/sites/checkSite';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * 
 * Returns keywords associated with user&#39;s Site
 * @param {!string} siteId Id of site
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.keyword>}
 */
API.Client.DefaultApi.prototype.getKeywords = function(siteId, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ +
		'/keywords/{siteId}'
		.replace('{' + 'siteId' + '}', String(siteId));

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'siteId' is set
	if (!siteId) {
		throw new Error('Missing required parameter siteId when calling getKeywords');
	}
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * Get pages for User&#39;s Site
 * Returns pages from the system that the user has access to
 * @param {!string} siteId Site Id of needed site
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.page>>}
 */
API.Client.DefaultApi.prototype.getPages = function(siteId, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/pages';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'siteId' is set
	if (!siteId) {
		throw new Error('Missing required parameter siteId when calling getPages');
	}
	if (siteId !== undefined) {
		queryParameters['siteId'] = siteId;
	}

	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * 
 * Returns authenticated user&#39;s Sites
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.site>>}
 */
API.Client.DefaultApi.prototype.getSites = function(opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/sites';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * 
 * Returns user basic info
 * @param {!string} id User id to return
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.user>}
 */
API.Client.DefaultApi.prototype.getUserInfoById = function (id, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/users/userInfo/{id}'
		.replace('{' + 'id' + '}', String(id));

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'id' is set
	if (!id) {
		throw new Error('Missing required parameter id when calling getUserInfoById');
	}
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	 return this.http_(httpRequestParams);
};

/**
 * 
 * Returns users Sites
 * @param {!string} userId User id to return
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.site>}
 */
API.Client.DefaultApi.prototype.getUserSites = function(userId, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ +
		'/sites/{userId}'
		.replace('{' + 'userId' + '}', String(userId));

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'userId' is set
	if (!userId) {
		throw new Error('Missing required parameter userId when calling getUserSites');
	}
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * 
 * Returns all System users
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.user>>}
 */
API.Client.DefaultApi.prototype.getUsers = function(opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/users';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'GET',
		url: path,
		json: true,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};

/**
 * Add Customer&#39;s Site to the System
 * Add new Site to the System
 * @param {!JsonObject} body Site sata
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.apiResponse>}
 */
API.Client.DefaultApi.prototype.sitesAddNewPost = function(body, opt_extraHttpRequestParams) {
	/** @const {string} */
	var path = this.basePath_ + '/sites/addNew';

	/** @type {!Object} */
	var queryParameters = {};

	/** @type {!Object} */
	var headerParams = angular.extend({}, this.defaultHeaders_);
	// verify required parameter 'body' is set
	if (!body) {
		throw new Error('Missing required parameter body when calling sitesAddNewPost');
	}
	/** @type {!Object} */
	var httpRequestParams = {
		method: 'POST',
		url: path,
		json: true,
		data: body,
		params: queryParameters,
		headers: headerParams
	};

	if (opt_extraHttpRequestParams) {
		httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
	}

	return this.http_(httpRequestParams);
};
