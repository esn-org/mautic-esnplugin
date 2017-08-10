<?php

/*
 * @copyright   Erasmus Student Network AISBL. 2017
 * @author      Gorka Guerrero Ruiz
 *
 * @link        http://esn.org
 *
 * @license     -
 */

return array(
  'name'        => 'ESNPlugin',
  'description' => 'Add extra slot items into the config builder',
  'author'      => 'Gorka Guerrero',
  'version'     => '0.1.0',

  'services'    => array(
    'events' => array(
      'plugin.esnplugin.pagebuilder.subscriber' => array(
        'class' => 'MauticPlugin\ESNPluginBundle\EventListener\SlotSubscriber'
      )
    ),
    'forms' => array(
      'plugin.esnplugin.form.type.slot.esnplugin' => [
        'class' => 'MauticPlugin\ESNPluginBundle\Form\Type\SlotESNPluginType',
        'alias' => 'slot_esnplugin',
      ],  
    ),
  ),
);
