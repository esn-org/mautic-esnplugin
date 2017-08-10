Mautic ESN Plugin
==================
Draft of a plugin for extending the slots and add new ones into the builder

Concept
-------
Add new slots into the builder with some predefined styles and code, just to modify the image and the text, instead of creating ones with the html, so users with not so advanced skills in HTML can use the builder with this extra slots.

Setup
-----
1. Copy ESNPluginBundle from repository into `/plugins` folder
2. Delete cache's folder content in `/app/cache`
3. Go to Settings -> Plugins (or type `YOUR-URL/s/plugins` in the browser), then click on `Install/Upgrade Plugins`
4. ESNPlugin icon will appear and will be active

Usage
-----
Once the plugin is active, the new slots will appear in the Email and Landing Pages Builders.
Just Drag&Drop them into your plugin and you will be able to use them.


TODO
----
+ Make the editor fully compatible, there is an issue with the images
+ Use own tags instead of the default ones


LICENSE
-------

Not decided yet :)
About Mautic: [License](https://github.com/mautic/mautic/blob/master/LICENSE.txt)