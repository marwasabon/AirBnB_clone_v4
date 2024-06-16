//script for 1-hbnb html page
$(document).ready(function () {


  $('BUTTON').click(function () {
    filterPlaces({ 'amenities': Object.keys(amenities) });
  });
});

function filterPlaces (json = {}) {
  $('section.places article').remove();
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify(json),
    contentType: 'application/json',
    success: function (response) {
    //what to do??
		}
  }

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (textStatus === 'success') {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
});
		function fetchPlaces (json = {}) {
//getting places from API
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({}),
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      $('section.places').append(
        `<article>
          <div class="title">
            <h2>${data[i].name}</h2>
            <div class="price_by_night">${data[i].price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${data[i].max_guest} Guest(s)</div>
            <div class="number_rooms">${data[i].number_rooms} Bedroom(s)</div>
            <div class="number_bathrooms">${data[i].number_bathrooms} Bathroom(s)</div>
          </div>
          <div class="description">
            ${data[i].description}
          </div>
        </article>`
      );
    }
  }
});
}
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

