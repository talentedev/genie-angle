﻿(function (angular) {
	"use strict";

	angular
		.module("components.websites",
			[
				"ui.bootstrap",
				"app.lazyload",
				"ngSanitize",
				"REST"
			])
		.config(function($provide) {
			//Exception handling
			$provide.decorator("$exceptionHandler",
				[
					"$delegate",
					function($delegate) {
						return function(exception, cause) {
							$delegate(exception, cause);
						};
					}
				]);
		});
})(angular);
