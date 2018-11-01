$(document).ready(function() {
  var thermostat = new Thermostat();

  $(document).click(function() {
  $('#temperature').text( thermostat.temperature );
  $('#power-status').text( "PSM " + thermostat.getPowerStatus() );
  $('#temperature').attr('class', thermostat.currentEnergyUsage());
})
  //console.log('ready');
  //updateCurrentTemperature();
  $('#temperature').text(thermostat.temperature);

  $(document).click(function(){
    $('#temperature').text(thermostat.temptemperature);
  })

//console.log('hello');
$('#temperature-up').on('click', function(){
  thermostat.up();

$('#temperature').text(thermostat.temperature);
})

$('#temperature-down').on('click', function(){
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})

$('#temperature-reset').on('click', function(){
  thermostat.reset();
  //console.log('reset button');
  $('#temperature').text(thermostat.temperature);
})
  //console.log('psm on');
$('#powerSavingModeOn').on('click', function() {
  thermostat.switchPowerSavingModeOn();
   $('#powerSavingMode').text('on')
})
$('#powerSavingModeOff').on('click', function() {
  thermostat.switchPowerSavingModeOff();
   $('#powerSavingMode').text('off')
})

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

});
