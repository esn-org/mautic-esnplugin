/**
 * Launch builder
 *
 * @param formName
 * @param actionName
 */

Mautic.initSlotListeners = function() {
    Mautic.builderSlots = [];
    Mautic.selectedSlot = null;

    console.log('helo');

    Mautic.builderContents.on('slot:init', function(event, slot) {
        slot = mQuery(slot);
        var type = slot.attr('data-slot');

        // initialize the drag handle
        var slotToolbar = Mautic.getSlotToolbar();
        var deleteLink  = Mautic.getSlotDeleteLink();
        var focus       = Mautic.getSlotFocus();

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
                }
            );
            image.froalaEditor(froalaOptions);
        }

        // Store the slot to a global var
        Mautic.builderSlots.push({slot: slot, type: type});
    });


    Mautic.builderContents.on('slot:change', function(event, params) {
        // Change some slot styles when the values are changed in the slot edit form
        var fieldParam = params.field.attr('data-slot-param');
        var type = params.type;

        if (fieldParam === 'cardcaption') {
            params.slot.find('td.esnplugin-caption').text(params.field.val());
        } else if (fieldParam === 'text-align') {
            var values = ['left', 'center', 'right'];
            if (type === 'esnplugin') {
                params.slot.find('.esnplugin-caption').css(fieldParam, values[params.field.val()]);
            } 
        } else if (fieldParam === 'align') {
            Mautic.builderContents.find('[data-slot-focus]').each( function() {
                var focusedSlot = mQuery(this).closest('[data-slot]');
                if (focusedSlot.attr('data-slot') == 'image') {
                    // Deactivate froala toolbar
                    focusedSlot.find('img').each( function() {
                        mQuery(this).froalaEditor('popups.hideAll');
                    });
                    Mautic.builderContents.find('.fr-image-resizer.fr-active').removeClass('fr-active');
                }
            });

            var values = ['left', 'center', 'right'];
            if ('esnplugin' === type) {
                params.slot.find('td.esnplugin-image').css('text-align', values[params.field.val()]);
            } 
        } else if (fieldParam === 'caption-color') {
            params.slot.find('.esnplugin-caption').css('background-color', '#' + params.field.val());
        } else if (fieldParam === 'background-color' || fieldParam === 'color') {
            var matches = params.field.val().match(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/);

            if (matches !== null) {
                var color = matches[1];

                if (fieldParam === 'background-color') {
                    if ('esnplugin' === type) {
                        params.slot.find('.esnplugin').css(fieldParam, '#' + color);
                    } else {
                        params.slot.find('a').css(fieldParam, '#' + color);
                        params.slot.find('a').attr('background', '#' + color);
                        params.slot.find('a').css('border-color', '#' + color);
                    }
                } else if (fieldParam === 'color') {
                    if ('esnplugin' === type) {
                        params.slot.find('.esnplugin-caption').css(fieldParam, '#' + color);
                    } 
                }
            }
        }
    });
};
