/* ADD CITY FUNCTION */
$('#entered_city').click(function() {
  var $newCity = $('#findYourCity').val();
  var $newText = "<p class='added'>You picked" + " " + $newCity + ".</p>"
  $('#findYourCity').val("");
  $('.city_list').after(function() {
    return "<br>" + "<br>" + $newText;
  });
  resetClass();
  //Empties dropdown box
  //$('.dropdown-content').empty();
  //$('.dropdown-content').css('border', 'none');
  //Returns back to placeholder
});

/* ON FOCUS CITY LOADER */
/*$('#findYourCity').keyup(function() {
  var cities = ["austin", "denton", "dallas", "fort worth", "oklahoma city", "houston", "corpus christi", "el paso", "tulsa", "paris", "los angeles", "new york city"];
  var foundCity = [];
  var userInputEdited = $('#findYourCity').val().toLowerCase();
  for (var i = 0; i < cities.length; i++) {
    //If user deletes entirely, returns search bar back to zero state
    if (userInputEdited == "") {
      $('.dropdown-content').empty();
      $('.dropdown-content').css('border', 'none');
      //If user enters a city that has a match
    } else if (cities[i].indexOf(userInputEdited) !== -1) {
      foundCity.push(cities[i].toUpperCase());
      //Creates a border around dynamically created dropd-down list
      $('.dropdown-content').css('border', '1px solid #000');
    }
  }
  //If user continues typing after a selected city: Ex. "Denton's Sister City"
  if (foundCity.length == 0) {
    $('.dropdown-content').css('border', 'none');
  }
 //Actually loading the dropdown menu
  var j = 0;
  while (j < foundCity.length) {
    var newList = "";
    newList = foundCity[j];
    $('.dropdown-content').append(function() {
      return "<li class='added'>" + newList + "</li>";
    });
    j++;
  }
});
*/

// Grab by keys
/*
$('#findYourCity').on('keydown', function(event) {
  if (event.which == 40) {
    $('.dropdown-content li').first().addClass('styles');
    var $selectedCity = $('.styles').html();
    $('#findYourCity').val($selectedCity);
    $('#findYourCity').on('keydown', function(event) {
      if (event.which == 40) {
      $('.styles').next('li').addClass('styles');
      $('.styles').prev('li').removeClass('styles');
      var $selectedCity = $('.styles').html();
    //  $('#findYourCity').val($selectedCity);
    } else if (event.which == 38) {
        $('.styles').prev('li').addClass('styles');
        $('.styles').next('li').removeClass('styles');
        var $selectedCity = $('.styles').html();
        //$('#findYourCity').val($selectedCity);
      }
    });
  }
});
*/

$('#start').click(function() {
  $('.dropdown-content li:first').addClass('styles');
  addContent();
  $('#down').click(function() {
    $('.styles').next().addClass('styles');
    $('.styles').prev().removeClass('styles');
    addContent();
  });
  $('#up').click(function() {
    $('.styles').prev().addClass('styles');
    $('.styles').next().removeClass('styles');
    addContent();
  });
});

function addContent() {
  var $selectedCity = $('.styles').html();
  $('#findYourCity').val($selectedCity);
}

function resetClass() {
  $('.dropdown-content li').removeClass('styles');
}



// Focus by mouse (hover design by CSS)
$('.dropdown-content').on('click', 'li', function() {
  var $selectedCity = $(this).html();
  $('#findYourCity').val($selectedCity);
  //Returns back to placeholder and no border
  //$('.dropdown-content').empty();// - This depracates the dropdown box empty function when a city is picked.
  $('.dropdown-content').css('border', 'none');
});
