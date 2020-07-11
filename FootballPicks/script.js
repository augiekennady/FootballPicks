

function watchForm(){
  $('form').on( 'submit', function( event ){
    event.preventDefault();

    let name = $('.team').val();

    if( name === "49ers" || name === "San Francisco" || name === "San Francisco 49ers" || name === "forty-niners" || name === "Forty-niners" || name === "niners" || name === "Niners" || name === "SF"){
      $( '#Response' ).html( "<h2>Goddamn right.</h2>" );
      $ ('#Score') .html ("<h2> Your Score is 1 </h2>")
    }
    else{
      $( '#Response' ).html( "<h3>Guess again, asshole.</h3>" );
      $ ('#Score') .html ("<h3> Your Score is 0 </h3>")
    }
  });
}


watchForm();