$(document).on('ready',function(){
   $('.sacaModal').on('click',function() {
          
          type = $(this).attr('data-type');
          
          $('.capa-contenedoramodal').fadeIn(function() {
              
              window.setTimeout(function(){
                  $('.modalClaro.'+type).addClass('modalClaro-visible');
              }, 100);
              
          });
      });
      

      $('.cerrar').click(function() {
          $('.capa-contenedoramodal').fadeOut().end().find('.modalClaro').removeClass('modalClaro-visible');
      });
 });
