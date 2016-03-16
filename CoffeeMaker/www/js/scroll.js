$(function() {
    $( "#slider" ).slider({
      value:1,
      min: 6,
      max: 20,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value + ":00-" + ui.value + ":30" );
      }
    });
    $( "#amount" ).val($( "#slider" ).slider( "value" ) + ":00-" + $( "#slider" ).slider( "value" ) + ":30");
  });