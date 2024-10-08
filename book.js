

var form1 = document.querySelector("#form1");
form1.addEventListener('submit',function(event){
    event.preventDefault();
    
    var formdata = {
        phoneNumber: document.getElementById("input1").value,
        PersonNo:  document.getElementById("input2").value,
        Arrivaldate :  document.getElementById("input3").value,
        DepartureDate:  document.getElementById("input4").value,
       
       

    }
    console.log(formdata);
})

var form2 = document.querySelector("#form2");
form2.addEventListener('submit',function(event){
    event.preventDefault();
    formdata2 = {
        fullName :  document.getElementById("input5").value,
        Email : document.getElementById("input6").value,
        Address :   document.getElementById("input7").value,
        City :   document.getElementById("input8").value,
        state :  document.getElementById("input9").value,
        zipCode :  document.getElementById("input10").value,
    }
    console.log(formdata2);
})


var form3 = document.querySelector("#form3");
form3.addEventListener('submit',function(event){
    event.preventDefault();
    formdata3 = {
        Nameoncard: document.getElementById("input11").value,
        cardNo :  document.getElementById("input12").value,
        expMonth : document.getElementById("input13").value,
        expYear : document.getElementById("input14").value,
        CvvNo :  document.getElementById("input15").value,
    }
    console.log(formdata3);
})
// form1
function data1(){

    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;
    var d = document.getElementById("input4").value;


    if(a==""||b==""||c==""||d==""){
        alert("all fields are mandatory you do not skip these fields.")
    }
    else if(a.length > 10 || a.length < 10) {
        alert("you enter the no. should be 10 digit only in phone no.")
    }
    else if (isNaN(a)){
        alert("enter only number")
    }
    
}
form.addEventListener("click",function (e) {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;
    var d = document.getElementById("input4").value;
    e.preventDefault();
})

// form1

// form2
function data2(){

    var e = document.getElementById("input5").value;
    var f = document.getElementById("input6").value;
    var g = document.getElementById("input7").value;
    var h = document.getElementById("input8").value;
    var i = document.getElementById("input9").value;
    var j = document.getElementById("input10").value;

    if(e==""||f==""||g==""||h==""||i==""||j==""){
        alert("all fields are mandatory you do not skip these fields.")
    }
    else if(i.length > 5 || i.length < 5){
        alert("enter 5 no. only in zip code ")
    }
    else if(f.checkValidity()){
        alert("valid email")
    }
    else{
        alert("this emalil is not valid ")
    }

}
form.addEventListener("click",function (e) {
   
    var e = document.getElementById("input5").value;
    var f = document.getElementById("input6").value;
    var g = document.getElementById("input7").value;
    var h = document.getElementById("input8").value;
    var i = document.getElementById("input9").value;
    var j = document.getElementById("input10").value;
    e.preventDefault(); 
})

// form2
// form3
function data3(){
    var k = document.getElementById("input11").value;
    var l = document.getElementById("input12").value;
    var m = document.getElementById("input13").value;
    var n = document.getElementById("input14").value;
    var o = document.getElementById("input15").value;

    if(k==""||l==""||m==""||n==""||o==""){
        alert("all fields are mandatory you do not skip these fields.")
    }
    if(l.length >16||l.length<16){
        alert("please enter the valid numbers")
    }
    else if (isNaN(n)){
        alert("please enter only numbers")
    }
    else if(o.length>4||o.length<4){
        alert("only four are allowed")
    }
    }
    form.addEventListener("click",function (e) {
        var k = document.getElementById("input11").value;
        var l = document.getElementById("input12").value;
        var m = document.getElementById("input13").value;
        var n = document.getElementById("input14").value;
        var o = document.getElementById("input15").value;
        e.preventDefault();
    })


// form3

