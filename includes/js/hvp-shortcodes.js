// JavaScript Document
jQuery(document).ready(function($) {
    var hvped;
    var hvpurl;
    //add the button to tinymce editor
    (function() {
        tinymce.create('tinymce.plugins.hvp_video', {
            init : function(ed, url) {
                ed.addButton('hvp_video', {
                    title : 'Hola Video Player',
                    image : url+'/../images/hola_player.svg',
                    onclick : function() {
                        $('.hvp-popup-overlay').fadeIn();

                        var popupcontent = $('.hvp-popup-content');
                        popupcontent.fadeIn();
                        $('.hvp-popup-overlay').fadeIn();
                        $('html, body').animate({ scrollTop: popupcontent.offset().top - 80 }, 500);

                        // Post / Page Follow Button
                        $('#hvp-video-url').val('');
                        $('#hvp-video-ads').attr('checked', false);
                        $('#hvp-video-ads').prop('checked', false);
                        $('#hvp-ads-url').val('');
                        $('#hvp-width').val('');
                        $('#hvp-height').val('');
                        $('#hvp-type').val('');
                        $('#hvp-video-control').val('');
                        $('#hvp-autoplay').val('');
                        $('#hvp-poster').val('');
                        $('#hvp-loop').val('');
                        $('#hvp-mute').val('');
                        $('#hvp-ytcontrol').val('');
                        $('#hvp-id').val('');
                        $('#hvp-class').val('');
                        $('#hvp-template').val('');
                    }
                });
            },
            createControl : function(n, cm) {
                return null;
            },
        });
        tinymce.PluginManager.add('hvp_video', tinymce.plugins.hvp_video);
    })();

    // Display ads url input
    $(document).on('change', '#hvp-video-ads', function(){
        if($(this).is(':checked')){
            $('.hvp-ads-container').show();
        }
        else{
            $('.hvp-ads-container').hide();
        }
    });

    //close popup window
    $(document).on("click", ".hvp-close-button, .hvp-popup-overlay", function() {
        $('.hvp-popup-overlay').fadeOut();
        $('.hvp-popup-content').fadeOut();
    });

    $(document).on("click", "#hvp-insert-shortcode", function() {
        var hvpshortcode = 'hvp-video';
        var hvpshortcodestr = '';

        if(hvpshortcode != '') {
            hvpSwitchDefaultEditorVisual();
            var hvp_vid_url            = $('#hvp-video-url').val();
            var hvp_ads_url         = $('#hvp-ads-url').val();
            var hvp_width            = $('#hvp-width').val();
            var hvp_height            = $('#hvp-height').val();
            var hvp_type            = $('#hvp-type').val();
            var hvp_video_control    = $('#hvp-video-control').val();
            var hvp_autoplay        = $('#hvp-autoplay').val();
            var hvp_poster            = $('#hvp-poster').val();
            var hvp_loop            = $('#hvp-loop').val();
            var hvp_mute            = $('#hvp-mute').val();
            var hvp_ytcontrol        = $('#hvp-ytcontrol').val();
            var hvp_id                = $('#hvp-id').val();
            var hvp_class            = $('#hvp-class').val();
            var hvp_template        = $('#hvp-template').val();

            hvpshortcodestr    += '['+hvpshortcode;
            if(hvp_vid_url != '')
                hvpshortcodestr    += ' url="'+hvp_vid_url+'"';
            if(hvp_ads_url != '' && $('#hvp-video-ads').is(':checked')) {
                hvpshortcodestr    += ' adtagurl="'+hvp_ads_url+'"';
            }
            if(hvp_width != '')
                hvpshortcodestr    += ' width="'+hvp_width+'"';
            if(hvp_height != '')
                hvpshortcodestr    += ' height="'+hvp_height+'"';
            if(hvp_type != 'simple' && hvp_type != '')
                hvpshortcodestr    += ' ' + hvp_type + '="true"';
            if(hvp_video_control != 'true' && hvp_video_control != '')
                hvpshortcodestr    += ' controls="'+hvp_video_control+'"';
            if(hvp_autoplay != 'false' && hvp_autoplay != '')
                hvpshortcodestr    += ' autoplay="'+hvp_autoplay+'"';
            if(hvp_loop != 'false' && hvp_loop != '')
                hvpshortcodestr    += ' loop="'+hvp_loop+'"';
            if(hvp_poster != '')
                hvpshortcodestr    += ' poster="'+hvp_poster+'"';
            if(hvp_mute != 'false' && hvp_mute != '')
                hvpshortcodestr    += ' muted="'+hvp_mute+'"';
            if(hvp_ytcontrol != 'false' && hvp_ytcontrol != '')
                hvpshortcodestr    += ' ytcontrol="'+hvp_ytcontrol+'"';
            if(hvp_id != '')
                hvpshortcodestr    += ' video_id="'+hvp_id+'"';
            if(hvp_class != '')
                hvpshortcodestr    += ' class="'+hvp_class+'"';
            if(hvp_template != 'hola-skin' && hvp_template != '')
                hvpshortcodestr    += ' template="'+hvp_template+'"';

            hvpshortcodestr    += '][/'+hvpshortcode+']';
            //send_to_editor(hvpshortcodestr);
            //tinymce.get('content').execCommand('mceInsertContent',false, wpwfpshortcodestr);
            window.send_to_editor(hvpshortcodestr);
            jQuery('.hvp-popup-overlay').fadeOut();
            jQuery('.hvp-popup-content').fadeOut();
        }
    });
});

//switch wordpress editor to visual mode
function hvpSwitchDefaultEditorVisual() {
    if (jQuery('#content').hasClass('html-active')) {
        switchEditors.go(editor, 'tinymce');
    }
}

//Convert with html entity
function hvpHtmlEntity(character) {
    if(character == '"') {
        return '&quot;';
    }
}
