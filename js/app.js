var comments = [];
var $commentInput = $("#comment-Input");
//PONE EL CONTADOR A 0
var contador= 0;

function loadPage() {

  $('.modal').modal();
  $(".button-collapse").sideNav();
  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
  $('.parallax').parallax();
  //$("#form").submit(paintComments);
 // $commentInput.keyup(validateComment);
  $(".contador").text("Puntos: " + points);
  $("#count_click").click(count_click_add);
  $("#env-msg").click(paintComments);

}

//AÑADE UN CLICK AL EJECUTAR LA FUNCIÓN
function count_click_add() {
  contador += 50;
  $(".contador").text("Puntos: " + contador);
  localStorage.setItem("puntos", contador);
}

  var points = localStorage.getItem("puntos");




function validateComment () {
  var $containerAddComment = $("#add-comment");

  if($($commentInput).val().trim().length > 0) {
    $containerAddComment.removeAttr("disabled");
  } else {
    $containerAddComment.attr("disabled", true);
  }
}
/*
function addComment(e) {
  e.preventDefault();
  // Con estas lineas toman el valor del usuario agrega los inputs y los guarda en variables
  var comment = $commentInput.val();
  // Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
  var comment = {
    "newComment": comment,
  };

  // Agregamos el contacto a nuestra data para poder filtrar y eliminar posteriormente
  comments.push(comment);
  //console.log(comments);
  // Esta funcion pinta en el html
  paintCommentsInHtml(comment);

  // limpiando valores del form
  $commentInput.val(" ");
}*/

function paintComments () {
  // crear elementos con DOM
  var $newComment = $("<div />", {
   
  });
  var $containerComment = $("<div />");
  var $content=$("#texto").val();


  // Asignando valores
  $containerComment.html($content);
  $newComment.append($containerComment);

  
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $(".container-new-msg").prepend($newComment);
  $("#texto").val(" ");

}

//AÑADE A TODOS LOS BOTONES CON EL NAME count_click QUE AL SER PULSADOS EJECUTEN EL CONTADOR
$( document ).ready(function(){
  $("#count_click").click(function(){
     count_click_add();
  });
});






  $(document).ready(loadPage);
