/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('tabulation', function(editor) {

	editor.on('keydown', function(e) {
		// Check for tab but not ctrl/cmd+tab since it switches browser tabs
		if (e.keyCode != 9 || tinymce.util.VK.metaKeyPressed(e)) {
			return;
		}

		e.preventDefault();

		editor.insertContent('&nbsp; &nbsp; &nbsp; &nbsp;');
		console.log(editor.selection.getStart());
		console.log(editor.dom.getParent(editor.selection.getStart()));
		if (editor.dom.getParent(editor.selection.getStart(), 'LI,DT,DD')) {

			if (e.shiftKey) {
				outdentSelection();
			} else {
				indentSelection();
			}
		}
	});
});
