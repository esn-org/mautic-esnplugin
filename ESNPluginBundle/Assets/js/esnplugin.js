/**
 * Launch builder
 *
 * @param formName
 * @param actionName
 */

 Mautic.mySlotListener = function() {

  Mautic.builderContents.on('slot:init', function(event, slot) {

    slot = mQuery(slot);
    var type = slot.attr('data-slot');

    // Initialize different slot types
    if (type === 'esnplugin') {
      var image = slot.find('img');
        // fix of badly destroyed image slot
      image.removeAttr('data-froala.editor');

      image.on('froalaEditor.click', function (e, editor) {
        slot.closest('[data-slot]').trigger('click');
      });

      // Init Froala editor
      var froalaOptions = mQuery.extend({}, Mautic.basicFroalaOptions, {
        linkList: [], // TODO push here the list of tokens from Mautic.getPredefinedLinks
        imageEditButtons: ['imageReplace', 'imageAlign', 'imageAlt', 'imageSize', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove'],
        useClasses: false
      });
      image.froalaEditor(froalaOptions);
    }

    // Store the slot to a global var
    Mautic.builderSlots.push({slot: slot, type: type});
  });


  Mautic.builderContents.on('slot:change', function(event, params) {

    // Change some slot styles when the values are changed in the slot edit form
    var fieldParam = params.field.attr('data-slot-param');
    var type = params.type;

    Mautic.clearSlotFormError(fieldParam);

    if (fieldParam === 'padding-top' || fieldParam === 'padding-bottom') {
      params.slot.css(fieldParam, params.field.val() + 'px');
    } else if (fieldParam === 'cardcaption') {
      params.slot.find('td.esnplugin-caption').text(params.field.val());
    } else if (fieldParam === 'href') {
      params.slot.find('a').eq(0).attr('href', params.field.val());
    } else if (fieldParam === 'link-text') {
      params.slot.find('a').eq(0).text(params.field.val());
    }
  });

};
