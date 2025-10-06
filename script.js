$(document).ready(function(){

  // Mostrar painel com efeito slide
  $("#mostrar").click(function(){
    $("#painel").slideDown(600);
  });

  // Ocultar painel com efeito slide
  $("#ocultar").click(function(){
    $("#painel").slideUp(600);
  });

  // Alternar visibilidade
  $("#toggle").click(function(){
    $("#painel").slideToggle(600);
  });

  // Mover painel com animação personalizada
  $("#mover").click(function(){
    $("#painel").animate({
      left: '+=100px',
      opacity: '0.8',
      width: '350px'
    }, 800).animate({
      left: '0px',
      opacity: '1',
      width: '300px'
    }, 800);
  });

});
