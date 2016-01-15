 X_NEW_POSITION = 0;
 X_CURRENT_POSITION = 0;
 X_ROLL_COUNT = 0;

 function startXPlay() {
     document.getElementById("player1").disabled = true;
     document.getElementById("player2").disabled = false;
     var dieValueForX = Math.floor(Math.random() * 6) + 1;
     document.getElementById("nextPlay").innerHTML = "Next Player 2's chance";

     if (dieValueForX == 1) {
         X_ROLL_COUNT++;
     }
     if (X_ROLL_COUNT > 0 && X_NEW_POSITION + dieValueForX < 31) {
         X_NEW_POSITION += dieValueForX;
         switch (X_NEW_POSITION) {
             case 3:
                 X_NEW_POSITION = 22;
                 break;
             case 5:
                 X_NEW_POSITION = 8;
                 break;
             case 11:
                 X_NEW_POSITION = 26;
                 break;
             case 17:
                 X_NEW_POSITION = 4;
                 break;
             case 19:
                 X_NEW_POSITION = 7;
                 break;
             case 20:
                 X_NEW_POSITION = 29;
                 break;
             case 21:
                 X_NEW_POSITION = 9;
                 break;
             case 27:
                 X_NEW_POSITION = 1;
                 break;

         }
     }
     document.getElementById("xResult").innerHTML = "Position:" + X_NEW_POSITION + "\t" + "dice:" + dieValueForX + "  ";
     if (X_NEW_POSITION == 30) {
         alert("\n\t Player 1 WON ....game over \n\t ");
         window.location.reload();
     }
     changeXPosition(X_NEW_POSITION, X_CURRENT_POSITION);
     X_CURRENT_POSITION = X_NEW_POSITION;
 }

 function changeXPosition(X_NEW_POSITION, X_CURRENT_POSITION) {

     var a = document.getElementById(X_NEW_POSITION).innerHTML;
     var b = 0;
     if (X_CURRENT_POSITION > 0) b = document.getElementById(X_CURRENT_POSITION).innerHTML;
     if (a != "Y" && b != "XY") {
         if ((X_CURRENT_POSITION == 0 && X_NEW_POSITION == 1) || X_NEW_POSITION == X_CURRENT_POSITION) {
             document.getElementById(X_NEW_POSITION).innerHTML = "X";
         } else {

             document.getElementById(X_NEW_POSITION).innerHTML = "X";
             document.getElementById(X_CURRENT_POSITION).innerHTML = X_CURRENT_POSITION;
         }
     }
     if (a == "Y") {
         document.getElementById(X_NEW_POSITION).innerHTML = "XY";
         document.getElementById(X_CURRENT_POSITION).innerHTML = X_CURRENT_POSITION;
     }
     if (b == "XY") {
         if (X_NEW_POSITION != X_CURRENT_POSITION) {
             document.getElementById(X_NEW_POSITION).innerHTML = "X";
             document.getElementById(X_CURRENT_POSITION).innerHTML = "Y";
             val12 = X_CURRENT_POSITION;
         } else {
             document.getElementById(X_NEW_POSITION).innerHTML = "XY";
         }
     }

 }

 function buttons() {

     document.getElementById("player1").disabled = false;
     document.getElementById("player2").disabled = false;


 }
