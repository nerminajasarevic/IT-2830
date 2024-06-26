var count = 1

$(document).ready(function(){
    $("#reset").click(function(){
        document.getElementById("btn").innerHTML = "This Button";
        document.getElementById("btn").style.backgroundColor = 'white';
        document.getElementById("btn").disabled = false;

        document.getElementById("btn1").innerHTML = "This Button";
        document.getElementById("btn1").style.backgroundColor = 'white';
        document.getElementById("btn1").disabled = false;

        document.getElementById("btn2").innerHTML = "This Button";
        document.getElementById("btn2").style.backgroundColor = 'white';
        document.getElementById("btn2").disabled = false;

        document.getElementById("btn3").innerHTML = "This Button";
        document.getElementById("btn3").style.backgroundColor = 'white';
        document.getElementById("btn3").disabled = false;

        document.getElementById("btn4").innerHTML = "This Button";
        document.getElementById("btn4").style.backgroundColor = 'white';
        document.getElementById("btn4").disabled = false;

        document.getElementById("btn5").innerHTML = "This Button";
        document.getElementById("btn5").style.backgroundColor = 'white';
        document.getElementById("btn5").disabled = false;

        document.getElementById("btn6").innerHTML = "This Button";
        document.getElementById("btn6").style.backgroundColor = 'white';
        document.getElementById("btn6").disabled = false;

        document.getElementById("btn7").innerHTML = "This Button";
        document.getElementById("btn7").style.backgroundColor = 'white';
        document.getElementById("btn7").disabled = false;

        document.getElementById("btn8").innerHTML = "This Button";
        document.getElementById("btn8").style.backgroundColor = 'white';
        document.getElementById("btn8").disabled = false;
    });
});

$(document).ready(function(){
    $("#btn").click(function(){
        if(count == 1)
        {
            document.getElementById("btn").innerHTML = "X";
            document.getElementById("btn").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn").innerHTML = "O";
            document.getElementById("btn").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        if(count == 1)
        {
            document.getElementById("btn1").innerHTML = "X";
            document.getElementById("btn1").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn1").innerHTML = "O";
            document.getElementById("btn1").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn1").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn2").click(function(){
        if(count == 1)
        {
            document.getElementById("btn2").innerHTML = "X";
            document.getElementById("btn2").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn2").innerHTML = "O";
            document.getElementById("btn2").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn2").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn3").click(function(){
        if(count == 1)
        {
            document.getElementById("btn3").innerHTML = "X";
            document.getElementById("btn3").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn3").innerHTML = "O";
            document.getElementById("btn3").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn3").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn4").click(function(){
        if(count == 1)
        {
            document.getElementById("btn4").innerHTML = "X";
            document.getElementById("btn4").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn4").innerHTML = "O";
            document.getElementById("btn4").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn4").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn5").click(function(){
        if(count == 1)
        {
            document.getElementById("btn5").innerHTML = "X";
            document.getElementById("btn5").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn5").innerHTML = "O";
            document.getElementById("btn5").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn5").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn6").click(function(){
        if(count == 1)
        {
            document.getElementById("btn6").innerHTML = "X";
            document.getElementById("btn6").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn6").innerHTML = "O";
            document.getElementById("btn6").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn6").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn7").click(function(){
        if(count == 1)
        {
            document.getElementById("btn7").innerHTML = "X";
            document.getElementById("btn7").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn7").innerHTML = "O";
            document.getElementById("btn7").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn7").disabled = true;
    });
});

$(document).ready(function(){
    $("#btn8").click(function(){
        if(count == 1)
        {
            document.getElementById("btn8").innerHTML = "X";
            document.getElementById("btn8").style.backgroundColor = 'red';
            count = 0;
        }
        else{
            document.getElementById("btn8").innerHTML = "O";
            document.getElementById("btn8").style.backgroundColor = 'blue';
            count = 1;
        }
        document.getElementById("btn8").disabled = true;
    });
});