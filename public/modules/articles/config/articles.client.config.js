'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Posts', 'articles', 'dropdown', '/articles(/create)?', false);
		Menus.addSubMenuItem('topbar', 'articles', 'List Posts', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Post', 'articles/create');
	}
]);