 
 // global variables
 var equation = "";
 var operator = "";
 var output = document.querySelector('#output');
 var previousEquation = document.querySelector("#previous");
 var count = 0;
 var operation_clicked = false;
 var decimalCount = 0;


 
function Operation(char) {
    // Append the operator to the output field
    output.value += char;

    // Store input to equation variable
    // Adding @ to visualize breaks between the equation
    equation += output.value + "@";

    // Operation button has to be clicked at least once
    if (count > 0) {
        // Split equation into two parts
        var slice = equation.split("@");

        // Assign each end to a float var
        var int1 = parseFloat(slice[0]);
        var int2 = parseFloat(slice[1]);

        // Run compute function
        solution = Compute(int1, int2);

        // Assign solution to input box value
        output.value = solution;

        // Assign solution num to equation
        equation = solution + "@";
    }

    // Changing global variables
    operator = char;
    count++;
    operation_clicked = true;
    decimalCount = 0;
}


 // function Operation(char){ //function on operation click
    
 //    //Repeats for each operator
 //    // #1
 //    if(char == "+"){
 //        // store input to equation variable
 //        // adding @ to visualize breaks between the equation
 //        equation += output.value + "@";
        
 //       //operation button has to be clicked at least once
 //       if(count > 0){
 //        //split equation into two parts
 //        var slice = equation.split("@");

 //        //assign each end to a float var
 //        var int1 = parseFloat(slice[0]);
 //        var int2 = parseFloat(slice[1]);
        
 //        // run compute function
 //        solution = Compute(int1, int2);

 //        // assign solution to input box value
 //        output.value = solution;

 //        // assign solution num to equation
 //        equation = solution + "@";
 //       }

 //       // changing global variables
 //       operator = "+";
 //       count++;
 //       operation_clicked = true;
 //       decimalCount = 0;

 //    }

 //    // #2
 //    else if(char == "-"){
        
 //        equation += output.value + "@";
        
       
 //       if(count > 0){
 //            var slice = equation.split("@");
 //            var int1 = parseFloat(slice[0]);
 //            var int2 = parseFloat(slice[1]);
 //            console.log(equation);
 //            solution = Compute(int1, int2);
 //            output.value = solution;
 //            equation = solution + "@";
 //       }
 //       operator = "-";
 //       count++;
 //       operation_clicked = true;
 //       decimalCount = 0;

 //    }

 //    // #3
 //    else if(char == "/"){
        
 //        equation += output.value + "@";
        
       
 //       if(count > 0){
 //            var slice = equation.split("@");
 //            var int1 = parseFloat(slice[0]);
 //            var int2 = parseFloat(slice[1]);
 //            console.log(equation);
 //            solution = Compute(int1, int2);
 //            output.value = solution;
 //            equation = solution + "@";
 //       }
 //       operator = "/";
 //       count++;
 //       operation_clicked = true;
 //       decimalCount = 0;

 //    }

 //    // #4
 //    else if(char == "*"){
        
 //        equation += output.value + "@";
        
       
 //       if(count > 0){
 //            var slice = equation.split("@");
 //            var int1 = parseFloat(slice[0]);
 //            var int2 = parseFloat(slice[1]);
 //            console.log(equation);
 //            solution = Compute(int1, int2);
 //            output.value = solution;
 //            equation = solution + "@";
 //       }
 //       operator = "*";
 //       count++;
 //       operation_clicked = true;
 //       decimalCount = 0;

 //    }

 // }



 function Append(char){
    // limit characters
    if (output.value.length > 18 && !(operation_clicked)){
        return 0;
    }
    
    // if +,-,/, or * is clicked
    if (operation_clicked){
        // reset input box to single number
        output.value = char;
        // reset operation boolean
        operation_clicked = false;
        
    }
    else{
        // add num into textbox
        output.value += char;
    }
    
 }

 // for adding decimals
 // limiting to only 1
 function AppendDec(char){
    
    //limiting character count
    if (output.value.length > 18){
        return 0;
    }
    
    // if +,-,/,* is clicked
    if (operation_clicked){
        // assign textbox value to num (decimal)
        output.value = char;
        // add 1 to global var 
        decimalCount++;
        // reset operation boolean
        operation_clicked = false;
    }
    
    // if no decimals in textbox
    else if (decimalCount == 0){
        // add decimal onto existing textbox string
        output.value += char;

        // add 1 to global var
        decimalCount++;
    }
    
    
 }

 // resets all global variables
 function Clear(){
    count = 0;
    equation = "";
    operator = "";
    output.value = "";
    previousEquation.value = "";
    decimalCount = 0;
 }

 function Backspace(){
    // assign textbox value to str variable
    str = output.value;

    // chop off last character of str
    str = str.substring(0, str.length-1);

    // output new string to textbox
    output.value = str;
    
 }

 function Compute(int1, int2){
    // store equation for secondary textbox
    var prevEq = storeEquation(int1, int2);
    // assign returned var to textbox
    previousEquation.value = prevEq;
    
    // create local variable
    var solution = 0

    // compute required equation
    if (operator == "+"){
        solution = int1 + int2;
    }
    if (operator == "-"){
        solution = int1 - int2;
    }
    if (operator == "*"){
        solution = int1 * int2;
    }
    if (operator == "/"){
        solution = int1 / int2;
    }
    
    // return solution value as a string
    return solution.toString();
    
    
 }

// function for when equals button is clicked
 function Equals(){
    
    // if operator var is not empty
    if (operator != ""){
        // assign/add current textbox value to equation string
        // adding @ to visualize breaks between the equation
        equation += output.value + "@";

        // slice equation string at @ character
        var slice = equation.split("@");

        // assign each end to a float var
        var int1 = parseFloat(slice[0]);
        var int2 = parseFloat(slice[1]);
        
        // compute
        solution = Compute(int1, int2);
        
        // assign solution to textbox value
        output.value = solution;

        // store solution + @ in global var equation
        equation = solution + "@";

        // reset global variables
        count = 0;
        operation_clicked = true;
        operator = "";
        equation = "";
    }
    else{
        return 0;
    }

 }


 function Percent(){

    // assign float value of textbox to num
    var num = parseFloat(output.value);

    // set textbox value to num / 100 as a string
    output.value = (num / 100).toString();
 }

 // used for storing equation expression once solution is needed
 function storeEquation(int1, int2){
    // create blank str variable
    var string = "";

    // fill in expression with both numbers
    string = int1 + " " + operator + " " + int2 + " " + "=";

    
    // return equation string
    return string;

 }