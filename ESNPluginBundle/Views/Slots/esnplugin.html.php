<?php

/*
 * @copyright   Erasmus Student Network AISBL. 2017
 * @author      Gorka Guerrero Ruiz
 *
 * @link        http://esn.org
 *
 * @license     -
 */
?>

<table class="esnplugin" align="center" style="background-color: #ddd; border-collapse: collapse !important;">
    <tr><td class="esnplugin-image" align="center"><img width="100%" src="<?php echo $view['assets']->getUrl('themes/blank-big.png', null, null, true); ?>" alt="An image"/></td></tr>
    <tr><td class="esnplugin-caption" style="line-height:16px;padding: 5px;background-color: #bbb;font-size:16px;color:#000" align="center">
      Your image caption goes here. You can change the position of the caption and style in the customize slot tab.
    </td></tr>
    <tr><td class="esnplugin-button" style="line-height:16px;padding: 5px;background-color: #bbb;font-size:16px;color:#000" align="center">
      <a href="#"  class="button" target="_blank" style="display:inline-block;text-decoration:none;border-color:#4e5d9d;border-width: 10px 20px;border-style:solid; text-decoration: none; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; background-color: #4e5d9d; display: inline-block;font-size: 16px; color: #ffffff; ">
    I want this!
</a>
    </td></tr>
</table>
<div style="clear:both"></div>
<?php echo $view['assets']->includeScript('plugins/ESNPluginBundle/Assets/js/esnplugin.js', 'mySlotListener', 'mySlotListener'); ?>
