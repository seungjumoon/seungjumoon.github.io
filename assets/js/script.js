$(document).ready(function(){
  $('#logo').click(function(){
    location.reload();
  });
  $('#menu_introduce').click(function(){
    $('#menu_introduce').css('border-bottom', '1px solid');
    $('#menu_products').css('border-bottom', 'none');
    $('#content_introduce').show();
    $('#content_products').hide();
  });
  $('#menu_products').click(function(){
    $('#menu_introduce').css('border-bottom', 'none');
    $('#menu_products').css('border-bottom', '1px solid');
    $('#content_introduce').hide();
    $('#content_products').show();
  });
});