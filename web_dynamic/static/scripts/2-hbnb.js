//script for 1-hbnb html page
$(document).ready(function () {

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (textStatus === 'success') {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
});

  let amenities = {};
  $('div.amenities ul.popover li').each(function () {
    if ($(this).find(':checkbox').prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    }
  });

$('div.amenities ul.popover li').click(function () {
    let cd = $(this).find(':checkbox');
    let name = $(this).attr('data-name');
    let id = $(this).attr('data-id');
    if (!cd.prop('checked')) {
	   delete amenities[id];
    } else {
	   amenities[id] = name;
	   console.log($(this).attr('data-name'));
    }


  if ($.isEmptyObject(amenities)) {
    $('div.amenities h4').html('&nbsp;');
  } else {
    $('div.amenities h4').text(Object.values(amenities));
  }

