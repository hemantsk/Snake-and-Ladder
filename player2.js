Y_NEW_POSITION = 0;
Y_CURRENT_POSITION = 0;
Y_ROLL_COUNT = 0;

function startYPlay() {
    document.getElementById("player2").disabled = true;
    document.getElementById("player1").disabled = false;
    var dieValueForY = Math.floor(Math.random() * 6) + 1;
    document.getElementById("nextPlay").innerHTML = "Next Player 1's chance";

    if (dieValueForY == 1) {
        Y_ROLL_COUNT++;
    }
    if (Y_ROLL_COUNT > 0 && Y_NEW_POSITION + dieValueForY < 31) {
        Y_NEW_POSITION += dieValueForY;
        switch (Y_NEW_POSITION) {
            case 3:
                Y_NEW_POSITION = 22;
                break;
            case 5:
                Y_NEW_POSITION = 8;
                break;
            case 11:
                Y_NEW_POSITION = 26;
                break;
            case 17:
                Y_NEW_POSITION = 4;
                break;
            case 19:
                Y_NEW_POSITION = 7;
                break;
            case 20:
                Y_NEW_POSITION = 29;
                break;
            case 21:
                Y_NEW_POSITION = 9;
                break;
            case 27:
                Y_NEW_POSITION = 1;
                break;

        }
    }
    document.getElementById("yResult").innerHTML = "Position:" + Y_NEW_POSITION + "\t" + "dice:" + dieValueForY;
    if (Y_NEW_POSITION == 30) {
        alert("\n\t Player 2 WON ....game over \n\t ");
        window.location.reload();
    }
    changeYPosition(Y_NEW_POSITION, Y_CURRENT_POSITION);
    Y_CURRENT_POSITION = Y_NEW_POSITION;
}

function changeYPosition(Y_NEW_POSITION, Y_CURRENT_POSITION) {
    var v = document.getElementById(Y_NEW_POSITION).innerHTML;
    var v1 = 0;
    if (Y_CURRENT_POSITION > 0) v1 = document.getElementById(Y_CURRENT_POSITION).innerHTML;

    if (v != "X" && v1 != "XY") {
        if ((Y_CURRENT_POSITION == 0 && Y_NEW_POSITION == 1) || Y_NEW_POSITION == Y_CURRENT_POSITION)
            document.getElementById(Y_NEW_POSITION).innerHTML = "Y";

        else {

            document.getElementById(Y_NEW_POSITION).innerHTML = "Y";
            document.getElementById(Y_CURRENT_POSITION).innerHTML = Y_CURRENT_POSITION;
        }
    }
    if (v == "X") {
        document.getElementById(Y_NEW_POSITION).innerHTML = "XY";
        document.getElementById(Y_CURRENT_POSITION).innerHTML = Y_CURRENT_POSITION;

    }
    if (v1 == "XY") {
        if (Y_NEW_POSITION != Y_CURRENT_POSITION) {
            document.getElementById(Y_NEW_POSITION).innerHTML = "Y"; //if(Y_CURRENT_POSITION==0)Y_CURRENT_POSITION=1;

            document.getElementById(Y_CURRENT_POSITION).innerHTML = "X";
            X_CHART_POSITION = Y_CURRENT_POSITION;
        } else {
            document.getElementById(X_NEW_POSITION).innerHTML = "XY";
        }
    }

}
