clickCount = 0;
firstColor = "";
secondColor = "";


$(document).ready(function() {
  

  $(".picture-box").click(function() {
    turnSquare( $(this) ) 
    
  })
  
});


function turnSquare(squareObject)
{
  
 
  clickCount = clickCount + 1;
   
  $("#clickCount").html(clickCount);
  

  secretSquareColor = squareObject.data("color");
  squareObject.css("background-color", secretSquareColor);
   
 
  

 if (clickCount==1){
   firstColor= secretSquareColor;
 } 
 if (clickCount==2){
   secondColor= secretSquareColor
   checkMatches();
 }
 }

function checkMatches(){
  
 
  
  
  if(firstColor == secondColor)
  {
    alert("You win!");
  }
  else{
    alert("Try again!");
  }
  

 
  resetSquares();

}



  
  
  $("#clickCount").html(clickCount);
  
  
 
function resetSquares()
{
  clickCount = 0;
  $("#clickCount").html(clickCount);
  $(".picture-box").css("background-color", "#cccccc"); 
}