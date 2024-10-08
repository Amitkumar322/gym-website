// var a = parseInt(prompt("Please give feed back regarding with SAM Fitness site!..."))
// if ( a == true){
//     alert("thanks for giving feedback");
// }else if (a == false || a == ""){
//     prompt("Please give feed back regarding with SAM Fitness site!...");
// }else{
//     prompt("Please give feed back regarding with SAM Fitness site!..."); 
// }


var form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    var formdata = {
        firstname : document.getElementById("input1").value,
        lastname :document.getElementById("input2").value,
        mobileno :document.getElementById("input3").value,
        emailId :document.getElementById("input4").value,
        training :document.getElementById("input5").value,
    }
    console.log(formdata);
    if(input3.value > 10){
        alert("only 10 digit no. is allowed")
    }
    else{input3}
})