// ==UserScript==
// @name         Reddit Remove More From
// @namespace    reddit_remove_more_from
// @description  Removes the "more from subreddit" links that appear on comments pages when you are not signed in
// @homepageURL  https://github.com/daraeman/reddit_remove_more_from
// @author       daraeman
// @version      1.1
// @date         2017-06-10
// @include      https://www.reddit.com/r/*/comments/*
// @downloadURL  https://github.com/daraeman/reddit_remove_more_from/raw/master/reddit_remove_more_from.user.js
// @updateURL    https://github.com/daraeman/reddit_remove_more_from/raw/master/reddit_remove_more_from.meta.js
// ==/UserScript==

(function() {
	"use strict";
	var children = document.getElementsByClassName( "seo-comments-recommendations" );
	for ( var i = 0; i < children.length; i++ )
		children[i].parentNode.removeChild( children[i] );
})();
