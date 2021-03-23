function check(input)
{
    if((document.getElementById(input).value == "X") || (document.getElementById(input).value == "O"))
    {
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const input3 = document.getElementById("input3").value;
        const input4 = document.getElementById("input4").value;
        const input5 = document.getElementById("input5").value;
        const input6 = document.getElementById("input6").value;
        const input7 = document.getElementById("input7").value;
        const input8 = document.getElementById("input8").value;
        const input9 = document.getElementById("input9").value;
        if((input1 == input2) && (input2 == input3) && (input2 !== ""))
        {
            alert("Player: " + input1 + " won.");
            clear();
        }
        else if((input4 == input5) && (input5 == input6) && (input6 !== ""))
        {
            alert("Player: " + input4 + " won.");
            clear();
        }
        else if((input7 == input8) && (input8 == input9) && (input9 !== ""))
        {
            alert("Player: " + input7 + " won.");
            clear();
        }
        else if((input1 == input4) && (input4 == input7) && (input7 !== ""))
        {
            alert("Player: " + input1 + " won.");
            clear();
        }
        else if((input2 == input5) && (input5 == input8) && (input8 !== ""))
        {
            alert("Player: " + input2 + " won.");
            clear();
        }
        else if((input3 == input6) && (input6 == input9) && (input9 !== ""))
        {
            alert("Player: " + input3 + " won.");
            clear();
        }
        else if((input1 == input5) && (input5 == input9) && (input9 !== ""))
        {
            alert("Player: " + input1 + " won.");
            clear();
        }
        else if((input3 == input5) && (input5 == input7) && (input7 !== ""))
        {
            alert("Player: " + input3 + " won.");
            clear();
        }
        else if((input1 != "") && (input2 != "") && (input3 != "") && (input4 != "") && (input5 != "") && (input6 != "") && (input7 != "") && (input8 != "") && (input9 != ""))
        {
            alert("Start again.");
            clear();
        }
    } else
    {
        alert("Only X or O are allowed values");
        document.getElementById(input).value = "";
    }
}

function clear()
{
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("input4").value="";
    document.getElementById("input5").value="";
    document.getElementById("input6").value="";
    document.getElementById("input7").value="";
    document.getElementById("input8").value="";
    document.getElementById("input9").value="";
}