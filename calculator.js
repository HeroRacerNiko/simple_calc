$(document).ready(function(){
    console.log("Hello world");

    var on = false;
    var num1 = '';
    var num2 = '';
    var temp = '';
    var operand = '';
    
    
// need to add event listener to button div and 
//single funtion extract button's value and 
//push to screen
    $("#on").click(function(){
        if (!on){
        $("#screen").html('');
        $("#screen").append(0)
        on = true;
        }
    });

    $("#off").click(function(){
        on = false;
        $("#screen").html('');
        temp = '';
    });

    $("#negative").click(function(){
        if (temp.indexOf('-') === -1) {
        temp = '-'+temp;    
        $("#screen").html(temp)
        } else {
            temp = temp.substring(1);
            $("#screen").html(temp)
        }
    });
    
    $("#7").click(function(){
        if (on && temp.length < 10) {
        temp += 7;
        $("#screen").html(temp);
        }
    });

    $("#8").click(function(){
        if (on && temp.length < 10) {
        temp += 8;
        $("#screen").html(temp);
        }
    });

    $("#9").click(function(){
        if (on && temp.length < 10) {
        temp += 9;
        $("#screen").html(temp);
        }
    });

    $("#4").click(function(){
        if (on && temp.length < 10) {
        temp += 4;
        $("#screen").html(temp);
        if (temp.indexOf('-') === -1 && temp !== 0) {
            $("#screen").html('');
            temp = "-" + temp;
            $("#screen").append(temp)
            }
        } else if (temp.indexOf('-') !== -1) {
            $("#screen").html('');
            temp = Math.abs(Number(temp));
            $("#screen").append(temp);
            }
    });

    $("#5").click(function(){
        if (on && temp.length < 10) {
        temp += 5;
        $("#screen").html(temp);
        }
    });
   
    $("#6").click(function(){
        if (on && temp.length < 10) {
        temp += 6;
        $("#screen").html(temp);
        }
    });

    $("#1").click(function(){
        if (on && temp.length < 10) {
        temp += 1;
        $("#screen").html(temp);
        }
    });

    $("#2").click(function(){
        if (on && temp.length < 10) {
        temp += 2;
        $("#screen").html(temp);
        }
    });
   
    $("#3").click(function(){
        if (on && temp.length < 10) {
        temp += 3;
        $("#screen").html(temp);
        }
    });

    $("#0").click(function(){
        if (on && temp.length < 10 && temp !== '0') {
        temp += 0;
        $("#screen").html(temp);
        }
    });
// once would be perfect here
    $("#float").click(function(){
        if (on && temp.length < 10 && temp.indexOf('.') === -1) {
        temp += '.';
        $("#screen").html(temp);
        }
    });

    $("#c").click(function(){
        if (on) {
        temp='';
        num1 = 0;
        num2 = 0;
        $("#screen").html('');
        $("#screen").append(0)
        }
    });

    $("#plus").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '+';
        $("#screen").html('');
        $("#screen").append(0)
        }
    });
    $("#minus").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '-';
        $("#screen").html('');
        $("#screen").append(0)
        }
    });
    $("#product").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '*';
        $("#screen").html('');
        $("#screen").append(0)
        }
    });
    $("#division").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '/';
        $("#screen").html('');
        $("#screen").append(0)
        }
    });

    $("#equals").click(function(){
        if (on && operand === '+') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 + num2);
            $("#screen").html('');
            if (result < 10000000000) {
            
            $("#screen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#screen").append("Out of range")
            }
        }

        if (on && operand === '-') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 - num2);
            $("#screen").html('');
            if (result < 10000000000) {
            
            $("#screen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#screen").append("Out of range")
            }
        }

        if (on && operand === '*') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 * num2);
            $("#screen").html('');
            if (result < 10000000000) {
            
            $("#screen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#screen").append("Out of range")
            }
        }

        if (on && operand === '/') {
            num2 = Number(temp);
            temp = '';
            var result = (num1 / num2);
            $("#screen").html('');
            if (result < 10000000000) {
                if (result.toString().length > 9) {
                    result = result.toFixed(2);
                }
            $("#screen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                console.log(result)
                $("#screen").append("Out of range")
            }
        }
    });
});