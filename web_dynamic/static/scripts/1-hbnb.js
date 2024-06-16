//script for 1-hbnb html page
$(document).ready(function () {
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

