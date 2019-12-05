function firstTask(){
        var name=prompt("What is your name?");
        alert ("Hello"+" "+name+"!");
}

function secondTask(){
    var dateOfBirth=prompt("In what year did you birth?");
    const NowYear=2019;
    alert("You are "+ Number(NowYear-dateOfBirth)+" old!");
}

function thirdTask(){
    var a=Number(prompt("What a lenth?"));
    alert ("Perimetr kvadrata: "+a*4 +"cm kv!");
}

function fourthTask(){
    var rad=Number(prompt("Enter radius"));
    const pi=3.14;
    var square=pi*rad*rad;
    alert(square);
}

function fifthTask(){
    var dist=Number(prompt("What distance do you need?"));
    var time=Number(prompt("How long do you want to be in road?"));
    var temp=dist/time;
    alert(temp);
}

function sixthTask(){
    
}