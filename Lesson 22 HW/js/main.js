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
    var count=Number(prompt("What count do you want?"));
    var money=prompt("What valute do you want?");
    var result=0;
    const uah=24;
    const eur=1.2;
    const usd=1;
    if (money==="UAH") {
        result=count*uah;
    }
    if(money==="EUR") {
        result=count*eur;
    }
    if(money==="USD") {
        result=count*usd;
    }
    alert(result);
}