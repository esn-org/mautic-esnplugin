<?php

/*
 * @copyright   Erasmus Student Network AISBL. 2017
 * @author      Gorka Guerrero Ruiz
 *
 * @link        http://esn.org
 *
 * @license     -
 */

namespace MauticPlugin\ESNPluginBundle\Form\Type;

use Symfony\Component\Form\Extension\Core\ChoiceList\ChoiceList;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Mautic\CoreBundle\Form\Type\SlotType;

/**
* Class SlotESNPluginType.
*/
class SlotESNPluginType extends SlotType {
  /**
   * @param FormBuilderInterface $builder
   * @param array                $options
   */
  public function buildForm(FormBuilderInterface $builder, array $options){
    
    $builder->add('caption', TextType::class, [
      'label'      => 'mautic.core.image.caption',
      'label_attr' => ['class' => 'control-label'],
      'required'   => false,
      'attr'       => [
        'class'           => 'form-control',
        'data-slot-param' => 'cardcaption',
      ],
    ]);

    $builder->add('link-text', 'text', [
      'label'      => 'mautic.core.button.text',
      'label_attr' => ['class' => 'control-label'],
      'required'   => false,
      'attr'       => [
        'class'           => 'form-control',
        'data-slot-param' => 'link-text',
      ],
    ]);

    $builder->add('href', 'text', [
      'label'      => 'mautic.core.button.link',
      'label_attr' => ['class' => 'control-label'],
      'required'   => false,
      'attr'       => [
        'class'           => 'form-control',
        'data-slot-param' => 'href',
      ],
    ]);

    parent::buildForm($builder, $options);
  }

  /**
   * @return string
   */
  public function getName()
  {
    return 'slot_esnplugin';
  }
}
