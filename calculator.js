$(document).ready(function() {
    
    var on = false;
    var num1 = '';
    var num2 = '';
    var temp = '';
    var operand = '';
    
    // ------- event listener for digits buttons (by class) --------
    $(".digits").click(function() {
      if (on && temp.length < 10) {
        console.log(this.innerText)
        temp += this.outerText;
        $("#mainScreen").html(temp);
     }
    });
    
    // ---- event listener for non digit buttons (by class - functional) ------------
    function nonDigitBtns(nonDigitClass) {
      nonDigitClass.click(function() {
        if (this.innerText === 'On') {
          if (!on){
            $("#mainScreen").html('');
            $("#subscreen").html('')
            $("#mainScreen").append(0)
            on = true;
          }
        };
        if (this.innerText === 'Off') {
          on = false;
          $("#mainScreen").html('');
          $("#subscreen").html('Press ON to start')
          temp = '';
        };
        if (this.innerText === "+/-") {
          if (on) {
            if (temp === '') {
            temp = '0';
            }
            if (temp.indexOf('-') === -1) {
              temp = '-' + temp;    
              $("#mainScreen").html(temp)
            } else {
              temp = temp.substring(1);
              $("#mainScreen").html(temp)
            }
          }  
        };
        if (this.innerText === '.') {
          if (on && temp.length < 10 && temp.indexOf('.') === -1) {
            temp += '.';
            $("#mainScreen").html(temp);
          }
        };
    
        if (this.innerText === 'C') {
          if (on) {
            temp='';
            num1 = 0;
            num2 = 0;
            $("#mainScreen").html('');
            $("#subscreen").html('RESET')
            $("#mainScreen").append(0)
          }
        };
      });
    }
    nonDigitBtns($(".calcBtns"));

    //---- event listener for 0 to prevent repetition of 0 ------
    $("#0").click(function(){
        if (on && temp.length < 10 && temp !== '0') {
        temp += 0;
        $("#mainScreen").html(temp);
        }
    });
    
    // ------ event listener for operand ----------
    $(".operand").click(function() {
      if (on) {
        num1 = Number(temp);
        $("#subscreen").html(temp);
        $("#subscreen").append(` ${this.innerText}`)
        temp = "";
        operand = this.innerText;
      }
    });  

    // ------ event listener for equals sign  -------
    function equalsSign () {
      if (on && num1 !== '') {
        num2 = Number(temp);
        temp = '';
        var result = operand === '+' ? num1 + num2
                    :operand === '-' ? num1 - num2
                    :operand === '*' ? num1 * num2
                    :operand === '/' ? num1 / num2
                    : "error";
        if (result > 100000000) {
          result = "Out of range"
        } 
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(2);
        }
        $("#subscreen").append(` ${num2} = ${result}`)
        $("#mainScreen").html(result);
        num1 = '';
        num2 = '';
      }
    }
    $("#equals").click(equalsSign);
    
    //-------------------- keyboard input listeners --------------
    $(document).keydown(function() {
      if (on) {
        if (event.keyCode === 27 || event.keyCode === 46) {
          temp='';
          num1 = 0;
          num2 = 0;
          $("#mainScreen").html('');
          $("#subscreen").html('RESET')
          $("#mainScreen").append(0)
        } else if (event.keyCode === 97 || event.keyCode === 49) {
            temp += "1";
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 98 || event.keyCode === 50) {
            temp += '2';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 99 || event.keyCode === 51) {
            temp += '3';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 100 || event.keyCode === 52) {
            temp += '4';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 101|| event.keyCode === 53) {
            temp += '5';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 102 || event.keyCode === 54) {
            temp += '6';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 103 || event.keyCode === 55) {
            temp += '7';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 104 || event.keyCode === 56) {
            temp += '8';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 105 || event.keyCode === 57) {
            temp += '9';
            $("#mainScreen").html(temp);
        } else if (event.keyCode === 96 || event.keyCode === 48) {
            if (temp !== "0") {
              temp += '0';
              $("#mainScreen").html(temp);
            }
        } else if (event.keyCode === 110 || event.keyCode === 190) {
            if (on && temp.length < 10 && temp.indexOf('.') === -1) {
                temp += '.';
                $("#mainScreen").html(temp);
              }
        } else if (event.keyCode === 107) {
            num1 = Number(temp);
            $("#subscreen").html(temp);
            $("#subscreen").append(` +`)
            temp = "";
            operand = "+";
        } else if (event.keyCode === 109) {
            num1 = Number(temp);
            $("#subscreen").html(temp);
            $("#subscreen").append(` -`)
            temp = "";
            operand = "-";
        } else if (event.keyCode === 106) {
            num1 = Number(temp);
            $("#subscreen").html(temp);
            $("#subscreen").append(` *`)
            temp = "";
            operand = "*";
        } else if (event.keyCode === 111) {
            num1 = Number(temp);
            $("#subscreen").html(temp);
            $("#subscreen").append(` /`)
            temp = "";
            operand = "/";
        } else if (event.keyCode === 13) {
            equalsSign();
        } 
    }

    });

});