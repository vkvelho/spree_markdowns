//= require admin/spree_backend
//= require markdown

$(function() {

  $('<a href="#" class="icon-eye-open" title="Click with confidence. Live preview makes no changes." icon="icon-eye-close" id="product_description_preview_button">Toggle HTML-preview</a>').appendTo('#product_description_field');
  hideDescriptionPreview();
  
  $('#product_description_preview_button').click(function(e) {
    if($('#product_description_preview').is(":visible")) {
      hideDescriptionPreview();  
    } else {
      showDescriptionPreview();
    }

    e.preventDefault();

  });

  $('#product_description').bind('keyup', function() {
    $('#product_description_preview').html(markdown.toHTML($('#product_description').val()));
  });

  function hideDescriptionPreview() {
    $('#product_description_preview').slideUp();
    $('#product_description_preview_button')
      .addClass("icon-eye-close")
      .removeClass("icon-eye-open");
  } 

  function showDescriptionPreview() {
    $('#product_description_preview').slideDown();
    $('#product_description_preview_button')
      .removeClass("icon-eye-close")
      .addClass("icon-eye-open");
  }
});
