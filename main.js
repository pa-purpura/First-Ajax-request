$(document).ready(function(){


  $('.casella').click(function(){

    var casellaselezionata = $(this);

    $.ajax({

      url: 'https://www.boolean.careers./api/random/int',
      method: 'GET',

      success: function(data,stato){
        var intero = (data.response);
        console.log(intero);

        if (intero > 5) {
          casellaselezionata.addClass('green').html(intero);
        }
        else{
          casellaselezionata.addClass('yellow').html(intero);
        }
      },
      
      error: function(request, data, state){
      },
    });
  });

});
