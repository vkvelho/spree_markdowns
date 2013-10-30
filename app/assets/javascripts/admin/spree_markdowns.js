//= require admin/spree_backend
//= require markdown

$(function() {

  $('<a href="#" class="button icon-eye-close" title="Click with confidence. Live preview makes no changes." icon="icon-eye-close" id="product_description_preview_button">Live preview</a>').appendTo('#product_description_field');

  $('#product_description_preview_button').click(function(e) {

    if($('#product_description_preview').is(":visible")) {
      $('#product_description_preview').slideUp();
      $('#product_description_preview_button')
        .addClass("icon-eye-close")
        .removeClass("icon-eye-open");
    } else {
      $('#product_description_preview').slideDown();
      $('#product_description_preview_button')
        .removeClass("icon-eye-close")
        .addClass("icon-eye-open");
    }

    e.preventDefault();

  });

  $('#product_description').bind('keyup', function() {
    $('#product_description_preview').html(markdown.toHTML($('#product_description').val()));
  });
});
