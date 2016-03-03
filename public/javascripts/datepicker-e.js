$(document).ready(function(){
  $('#date_in').datepicker({
    startDate: '0d',
    language: 'es',
    todayHighlight: 'true',
    format: 'mm/dd/yyyy',
    })
    .on('changeDate', function(ev){
      var date_in = $('#date_in').datepicker('getDate');
      console.log()
      $('#date_out').datepicker({
        startDate: '+1d',
        startView: '+1d',
        language: 'es',
        format: 'mm/dd/yyyy'
      });
      $('#date_in').datepicker('hide');
      $('#date_out').datepicker('show');
    });
  $('#date_out').datepicker({
    startDate: '+1d',
    language: 'es',
    format: 'mm/dd/yyyy',
    })
    .on('changeDate', function(ev){
      var date_in = $('#date_in').datepicker('getDate');
    });

})
