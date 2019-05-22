var i = 0;
var x = 0;
callXml();


function callXml() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  var newFileName = "content.xml?" + new Date().getTime();
  xhttp.open("GET", newFileName, true);
  xhttp.send();
};
function myFunction(xml) {
  
var bScore = Number(xml.responseXML.getElementsByTagName("BRADMAN")[x].childNodes[x].nodeValue);
var pScore = Number(xml.responseXML.getElementsByTagName("PERKINS")[x].childNodes[x].nodeValue);
var sScore = Number(xml.responseXML.getElementsByTagName("SAUVAGE")[x].childNodes[x].nodeValue);
var fScore = Number(xml.responseXML.getElementsByTagName("FREEMAN")[x].childNodes[x].nodeValue);
  
document.getElementById("rh").innerHTML = xml.responseXML.getElementsByTagName("RH")[x].childNodes[x].nodeValue;
document.getElementById("r1").innerHTML = xml.responseXML.getElementsByTagName("R1")[x].childNodes[x].nodeValue;
document.getElementById("r2").innerHTML = xml.responseXML.getElementsByTagName("R2")[x].childNodes[x].nodeValue;
document.getElementById("r3").innerHTML = xml.responseXML.getElementsByTagName("R3")[x].childNodes[x].nodeValue;
  
var graphTotal = bScore + pScore + sScore + fScore;
var bScoreMath = bScore / graphTotal * 300;
var pScoreMath = pScore / graphTotal * 300;
var sScoreMath = sScore / graphTotal * 300;
var fScoreMath = fScore / graphTotal * 300;
  
document.getElementById("bGraph").style.height = bScoreMath + "px";
document.getElementById("pGraph").style.height = pScoreMath + "px";
document.getElementById("sGraph").style.height = sScoreMath + "px";
document.getElementById("fGraph").style.height = fScoreMath + "px";

document.getElementById("bradmanScore").innerHTML = bScore;
document.getElementById("perkinsScore").innerHTML = pScore;
document.getElementById("sauvageScore").innerHTML = sScore;
document.getElementById("freemanScore").innerHTML = fScore;
  
bScore = xml.responseXML.getElementsByTagName("BRADMAN")[x].childNodes[x].nodeValue;
pScore = xml.responseXML.getElementsByTagName("PERKINS")[x].childNodes[x].nodeValue;
sScore = xml.responseXML.getElementsByTagName("SAUVAGE")[x].childNodes[x].nodeValue;
fScore = xml.responseXML.getElementsByTagName("FREEMAN")[x].childNodes[x].nodeValue;

//year, month 0-11, date, hour, min
if(new Date(2019, 4, 24, 10, 25).getTime() < Date.now()) {
i = 1;
}
//year, month 0-11, date, hour, min
if(new Date(2019, 4, 24, 11, 35).getTime() < Date.now()) {
i = 2;
}
//year, month 0-11, date, hour, min
if(new Date(2019, 4, 24, 12, 25).getTime() < Date.now()) {
i = 3;
}
//year, month 0-11, date, hour, min
if(new Date(2019, 4, 24, 13, 15).getTime() < Date.now()) {
i = 4;
}
//year, month 0-11, date, hour, min
if(new Date(2019, 4, 24, 14, 5).getTime() < Date.now()) {
i = 5;
}

document.getElementById("cb").innerHTML = xml.responseXML.getElementsByTagName("CB")[i].childNodes[x].nodeValue;
document.getElementById("nb").innerHTML = xml.responseXML.getElementsByTagName("NB")[i].childNodes[x].nodeValue;
document.getElementById("cetl1").innerHTML = xml.responseXML.getElementsByTagName("CETL1")[i].childNodes[x].nodeValue;
document.getElementById("cetl2").innerHTML = xml.responseXML.getElementsByTagName("CETL2")[i].childNodes[x].nodeValue;
document.getElementById("cetl3").innerHTML = xml.responseXML.getElementsByTagName("CETL3")[i].childNodes[x].nodeValue;
  
document.getElementById("cefl1").innerHTML = xml.responseXML.getElementsByTagName("CEFL1")[i].childNodes[x].nodeValue;
document.getElementById("cefl2").innerHTML = xml.responseXML.getElementsByTagName("CEFL2")[i].childNodes[x].nodeValue;
document.getElementById("cefl3").innerHTML = xml.responseXML.getElementsByTagName("CEFL3")[i].childNodes[x].nodeValue;
document.getElementById("cefl4").innerHTML = xml.responseXML.getElementsByTagName("CEFL4")[i].childNodes[x].nodeValue;
document.getElementById("cefl5").innerHTML = xml.responseXML.getElementsByTagName("CEFL5")[i].childNodes[x].nodeValue;
document.getElementById("cefl6").innerHTML = xml.responseXML.getElementsByTagName("CEFL6")[i].childNodes[x].nodeValue;
document.getElementById("cefl7").innerHTML = xml.responseXML.getElementsByTagName("CEFL7")[i].childNodes[x].nodeValue;
  
document.getElementById("netl1").innerHTML = xml.responseXML.getElementsByTagName("NETL1")[i].childNodes[x].nodeValue;
document.getElementById("netl2").innerHTML = xml.responseXML.getElementsByTagName("NETL2")[i].childNodes[x].nodeValue;
document.getElementById("netl3").innerHTML = xml.responseXML.getElementsByTagName("NETL3")[i].childNodes[x].nodeValue;
document.getElementById("nefl1").innerHTML = xml.responseXML.getElementsByTagName("NEFL1")[i].childNodes[x].nodeValue;
document.getElementById("nefl2").innerHTML = xml.responseXML.getElementsByTagName("NEFL2")[i].childNodes[x].nodeValue;
document.getElementById("nefl3").innerHTML = xml.responseXML.getElementsByTagName("NEFL3")[i].childNodes[x].nodeValue;
document.getElementById("nefl4").innerHTML = xml.responseXML.getElementsByTagName("NEFL4")[i].childNodes[x].nodeValue;
document.getElementById("nefl5").innerHTML = xml.responseXML.getElementsByTagName("NEFL5")[i].childNodes[x].nodeValue;
document.getElementById("nefl6").innerHTML = xml.responseXML.getElementsByTagName("NEFL6")[i].childNodes[x].nodeValue;
document.getElementById("nefl7").innerHTML = xml.responseXML.getElementsByTagName("NEFL7")[i].childNodes[x].nodeValue;
  

}
setInterval( callXml, 30000);
