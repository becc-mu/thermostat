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
  console.log('psm on');
$('#powerSavingModeOn').on('click', function() {
  thermostat.switchPowerSavingModeOn();
   $('#powerSavingMode').text('on')
})
$('#powerSavingModeOff').on('click', function() {
  thermostat.switchPowerSavingModeOff();
   $('#powerSavingMode').text('off')
})
//
// $( "#powerSavingModeOn" ).click(function( event ) {
//   thermostat.switchPowerSavingModeOn();
// });
})
function updateTemperature() {
  console.log('update');
  $('#temperature').text(thermostat.temperature);
  console.log('update');
}
