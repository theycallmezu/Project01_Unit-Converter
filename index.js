


let numberMain = document.getElementById("userInput");

function numberSelector() {

    let voteable;

    let userUnitNumber = Number(document.getElementById("userInput").value); 
    
    if (isNaN(userUnitNumber)) {
      voteable = "Umm... that is not a number.";
      numberMain.textContent = `0`;

    } else {   
      voteable = (userUnitNumber < 0) ? "Whao... You're in the negatives." : "That's a great number.";
      numberMain.textContent = userUnitNumber;
    }
    
    document.getElementById("error-message").innerHTML = voteable ;


    let meterAmount = document.getElementById("meter");
    let meterMeasurement = document.getElementById("meter-m");
    let feetAmount = document.getElementById("feet");
    let feetMeasurement = document.getElementById("feet-m");



    meterAmount.textContent = numberMain.textContent;

    oneMeterToFeet = 3.28084;
    resultMeter = numberMain.textContent * oneMeterToFeet;
    resultMeter = resultMeter.toFixed(3)
    document.getElementById("meter-m").textContent = `${resultMeter}`;

    feetAmount.textContent = numberMain.textContent;

    oneFeetToMeter = 0.3048;
    resultFeet = numberMain.textContent * oneFeetToMeter;
    resultFeet = resultFeet.toFixed(3)
    document.getElementById("feet-m").textContent = `${resultFeet}`;




    let literAmount = document.getElementById("liter");
    let literMeasurement = document.getElementById("liter-m");
    let gallonAmount = document.getElementById("gallon");
    let gallonMeasurement = document.getElementById("gallon-m");



    literAmount.textContent = numberMain.textContent;
    gallonAmount.textContent = numberMain.textContent;

    oneLiterToGallon = 0.264172;
    resultLiter = numberMain.textContent * oneLiterToGallon;
    resultLiter = resultLiter.toFixed(3)
    document.getElementById("liter-m").textContent = `${resultLiter}`;

    

    oneGallontoLiter = 3.78541;
    resultPound = numberMain.textContent * oneGallontoLiter;
    resultPound = resultPound.toFixed(3)
    document.getElementById("gallon-m").textContent = `${resultPound}`;


    let kiloAmount = document.getElementById("kilo");
    let kiloMeasurement = document.getElementById("kilo-m");
    let poundAmount = document.getElementById("pound");
    let poundMeasurement = document.getElementById("pound-m");


    kiloAmount.textContent = numberMain.textContent;
    poundAmount.textContent = numberMain.textContent;

    oneKiloTopound = 2.20462;
    resultKilo = numberMain.textContent * oneKiloTopound;
    resultKilo = resultKilo.toFixed(3)
    document.getElementById("kilo-m").textContent = `${resultKilo}`;

    onePoundToKilo = 0.453592;
    resultPound = numberMain.textContent * onePoundToKilo;
    resultPound = resultPound.toFixed(3)
    document.getElementById("pound-m").textContent = `${resultPound}`;

  }