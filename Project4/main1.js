function check(){

}

const boxes = document.getElementsByClassName("huge");

function clear(){
    Array.from(boxes).forEach(box => {
        box.value = "";
    })
}

function process(id) {
    console.log("hello: " + id);
    let i = 0;
    const input = new Array();
    Array.from(boxes).forEach(box => {
        if((box.value == "X") || (box.value == "O") || (box.value == "")) {
            input[i] = document.getElementById("input"+(i+1)).value; 

        } else {
            alert("Only X or O are allowed values");
            box.value = "";
        }
        i++;
        //box.value = "";
    })

        if((input[0] == input[1]) && (input[1] == input[2]) && (input[1] !== ""))
        {
            document.getElementById("box1").style.color = "green";
            document.getElementById("box2").style.color = "green";
            document.getElementById("box3").style.color = "green";
            alert("Player: " + input[0] + " won.");
            clear();
        }
        else if((input[3] == input[4]) && (input[4] == input[5]) && (input[5] !== ""))
        {
            document.getElementById("box4").style.color = "green";
            document.getElementById("box5").style.color = "green";
            document.getElementById("box6").style.color = "green";
            alert("Player: " + input[3] + " won.");
            clear();
        }
        else if((input[6] == input[7]) && (input[7] == input[8]) && (input[8] !== ""))
        {
            document.getElementById("box7").style.color = "green";
            document.getElementById("box8").style.color = "green";
            document.getElementById("box9").style.color = "green";
            alert("Player: " + input[6] + " won.");
            clear();
        }
        else if((input[0] == input[3]) && (input[3] == input[6]) && (input[6] !== ""))
        {
            document.getElementById("box1").style.color = "green";
            document.getElementById("box4").style.color = "green";
            document.getElementById("box7").style.color = "green";
            alert("Player: " + input[0] + " won.");
            clear();
        }
        else if((input[1] == input[4]) && (input[4] == input[7]) && (input[7] !== ""))
        {
            document.getElementById("box2").style.color = "green";
            document.getElementById("box5").style.color = "green";
            document.getElementById("box8").style.color = "green";
            alert("Player: " + input[1] + " won.");
            clear();
        }
        else if((input[2] == input[5]) && (input[5] == input[8]) && (input[8] !== ""))
        {
            document.getElementById("box3").style.color = "green";
            document.getElementById("box6").style.color = "green";
            document.getElementById("box9").style.color = "green";
            alert("Player: " + input[2] + " won.");
            clear();
        }
        else if((input[0] == input[4]) && (input[4] == input[8]) && (input[8] !== ""))
        {
            document.getElementById("box1").style.color = "green";
            document.getElementById("box5").style.color = "green";
            document.getElementById("box9").style.color = "green";
            alert("Player: " + input[0] + " won.");
            clear();
        }
        else if((input[2] == input[4]) && (input[4] == input[6]) && (input[6] !== ""))
        {
            document.getElementById("box3").style.color = "green";
            document.getElementById("box5").style.color = "green";
            document.getElementById("box7").style.color = "green";
            alert("Player: " + input[2] + " won.");
            clear();
        }
        else if((input[0] != "") && (input[1] != "") && (input[2] != "") && (input[3] != "") && (input[4] != "") && (input[5] != "") && (input[6] != "") && (input[7] != "") && (input[8] != ""))
        {
            alert("Game Drawn. Start again.");
            clear();
        }

}


Array.from(boxes).forEach(box => {
    box.addEventListener("keyup",process);
});



