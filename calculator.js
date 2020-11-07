$(document).ready(function(){
    console.log("Hello world");

    var on = false;
    var num1 = '';
    var num2 = '';
    var temp = '';
    var operand = '';
    
    
// need to add event listener to button div and 
//single funtion extract button's value and 
//push to mainScreen
    $("#on").click(function(){
        if (!on){
        $("#mainScreen").html('');
        $("#subscreen").html('')
        $("#mainScreen").append(0)
        on = true;
        }
    });

    

    $("#off").click(function(){
        on = false;
        $("#mainScreen").html('');
        $("#subscreen").html('Press ON to start')
        temp = '';
    });

    $("#negative").click(function(){
        if (on) {
            if (temp === '') {
                temp = '0';
            }
            if (temp.indexOf('-') === -1) {
            temp = '-'+temp;    
            $("#mainScreen").html(temp)
            } else {
                temp = temp.substring(1);
                $("#mainScreen").html(temp)
            }
        }
    });
    
    $("#7").click(function(){
        if (on && temp.length < 10) {
        temp += 7;
        $("#mainScreen").html(temp);
        }
    });

    $("#8").click(function(){
        if (on && temp.length < 10) {
        temp += 8;
        $("#mainScreen").html(temp);
        }
    });

    $("#9").click(function(){
        if (on && temp.length < 10) {
        temp += 9;
        $("#mainScreen").html(temp);
        }
    });

    $("#4").click(function(){
        if (on && temp.length < 10) {
        temp += 4;
        $("#mainScreen").html(temp);
        }
    });

    $("#5").click(function(){
        if (on && temp.length < 10) {
        temp += 5;
        $("#mainScreen").html(temp);
        }
    });
   
    $("#6").click(function(){
        if (on && temp.length < 10) {
        temp += 6;
        $("#mainScreen").html(temp);
        }
    });
    
    $("#1").click(function(){
        if (on && temp.length < 10) {
        temp += 1;
        $("#mainScreen").html(temp);
        }
    });
    $(document).keydown(function(){
        event.preventDefault();
        if (on && temp.length < 10) {
            if (event.keyCode === 97 || event.keyCode === 49) {
                temp += 1;
                $("#mainScreen").html(temp);
            }
        }
    });

    $("#2").click(function(){
        if (on && temp.length < 10) {
        temp += 2;
        $("#mainScreen").html(temp);
        }
    });
    $(document).keydown(function(){
        event.preventDefault();
        if (on && temp.length < 10) {
            if (event.keyCode === 98 || event.keyCode === 50) {
                temp += 2;
                $("#mainScreen").html(temp);
            }
        }
    });
   
    $("#3").click(function(){
        if (on && temp.length < 10) {
        temp += 3;
        $("#mainScreen").html(temp);
        }
    });

    $("#0").click(function(){
        if (on && temp.length < 10 && temp !== '0') {
        temp += 0;
        $("#mainScreen").html(temp);
        }
    });
// once would be perfect here
    $("#float").click(function(){
        if (on && temp.length < 10 && temp.indexOf('.') === -1) {
        temp += '.';
        $("#mainScreen").html(temp);
        }
    });

    $("#c").click(function(){
        if (on) {
        temp='';
        num1 = 0;
        num2 = 0;
        $("#mainScreen").html('');
        $("#subscreen").html('RESET')
        $("#mainScreen").append(0)
        }
    });

    $("#plus").click(function(){
        if (on) {
        num1 = Number(temp);
        $("#subscreen").html(temp);
        $("#subscreen").append(" +")
        temp = '';
        operand = '+';
        $("#mainScreen").html('');
        $("#mainScreen").append(0)
        }
    });
    $("#minus").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '-';
        $("#mainScreen").html('');
        $("#mainScreen").append(0)
        }
    });
    $("#product").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '*';
        $("#mainScreen").html('');
        $("#mainScreen").append(0)
        }
    });
    $("#division").click(function(){
        if (on) {
        num1 = Number(temp);
        temp = '';
        operand = '/';
        $("#mainScreen").html('');
        $("#mainScreen").append(0)
        }
    });

    $("#equals").click(function(){
        if (on && operand === '+') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 + num2);
            $("#subscreen").append(` ${num2} = ${result}`)
            $("#mainScreen").html('');
            if (result < 10000000000) {
            
            $("#mainScreen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#mainScreen").append("Out of range")
            }
        }

        if (on && operand === '-') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 - num2);
            $("#mainScreen").html('');
            if (result < 10000000000) {
            
            $("#mainScreen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#mainScreen").append("Out of range")
            }
        }

        if (on && operand === '*') {
            num2 = Number(temp);
            temp = '';
            var result;
            result = (num1 * num2);
            $("#mainScreen").html('');
            if (result < 10000000000) {
                if (result.toString().length > 9) {
                    result = result.toFixed(2);
                }            
            $("#mainScreen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                $("#mainScreen").append("Out of range")
            }
        }

        if (on && operand === '/') {
            num2 = Number(temp);
            temp = '';
            var result = (num1 / num2);
            $("#mainScreen").html('');
            if (result < 10000000000) {
                if (result.toString().length > 9) {
                    result = result.toFixed(2);
                }
            $("#mainScreen").append(result)
            num1 = 0;
            num2 = 0;
            }
            else {
                console.log(result)
                $("#mainScreen").append("Out of range")
            }
        }
    });
});