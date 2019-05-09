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
  
var bScore = Number(xml.responseXML.getElementsByTagName("BRADMAN")[0].childNodes[0].nodeValue);
var pScore = Number(xml.responseXML.getElementsByTagName("PERKINS")[0].childNodes[0].nodeValue);
var sScore = Number(xml.responseXML.getElementsByTagName("SAUVAGE")[0].childNodes[0].nodeValue);
var fScore = Number(xml.responseXML.getElementsByTagName("FREEMAN")[0].childNodes[0].nodeValue);
  
document.getElementById("rh").innerHTML = xml.responseXML.getElementsByTagName("RH")[0].childNodes[0].nodeValue;
document.getElementById("r1").innerHTML = xml.responseXML.getElementsByTagName("R1")[0].childNodes[0].nodeValue;
document.getElementById("r2").innerHTML = xml.responseXML.getElementsByTagName("R2")[0].childNodes[0].nodeValue;
document.getElementById("r3").innerHTML = xml.responseXML.getElementsByTagName("R3")[0].childNodes[0].nodeValue;
  
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
  
bScore = xml.responseXML.getElementsByTagName("BRADMAN")[0].childNodes[0].nodeValue;
pScore = xml.responseXML.getElementsByTagName("PERKINS")[0].childNodes[0].nodeValue;
sScore = xml.responseXML.getElementsByTagName("SAUVAGE")[0].childNodes[0].nodeValue;
fScore = xml.responseXML.getElementsByTagName("FREEMAN")[0].childNodes[0].nodeValue;

var i = 0;

document.getElementById("cb").innerHTML = xml.responseXML.getElementsByTagName("CB")[i].childNodes[i].nodeValue;
document.getElementById("nb").innerHTML = xml.responseXML.getElementsByTagName("NB")[i].childNodes[i].nodeValue;
document.getElementById("cetl1").innerHTML = xml.responseXML.getElementsByTagName("CETL1")[i].childNodes[i].nodeValue;
document.getElementById("cetl2").innerHTML = xml.responseXML.getElementsByTagName("CETL2")[i].childNodes[i].nodeValue;
document.getElementById("cetl3").innerHTML = xml.responseXML.getElementsByTagName("CETL3")[i].childNodes[i].nodeValue;
  
document.getElementById("cefl1").innerHTML = xml.responseXML.getElementsByTagName("CEFL1")[i].childNodes[i].nodeValue;
document.getElementById("cefl2").innerHTML = xml.responseXML.getElementsByTagName("CEFL2")[i].childNodes[i].nodeValue;
document.getElementById("cefl3").innerHTML = xml.responseXML.getElementsByTagName("CEFL3")[i].childNodes[i].nodeValue;
document.getElementById("cefl4").innerHTML = xml.responseXML.getElementsByTagName("CEFL4")[i].childNodes[i].nodeValue;
document.getElementById("cefl5").innerHTML = xml.responseXML.getElementsByTagName("CEFL5")[i].childNodes[i].nodeValue;
document.getElementById("cefl6").innerHTML = xml.responseXML.getElementsByTagName("CEFL6")[i].childNodes[i].nodeValue;
document.getElementById("cefl7").innerHTML = xml.responseXML.getElementsByTagName("CEFL7")[i].childNodes[i].nodeValue;
  
document.getElementById("netl1").innerHTML = xml.responseXML.getElementsByTagName("NETL1")[i].childNodes[i].nodeValue;
document.getElementById("netl2").innerHTML = xml.responseXML.getElementsByTagName("NETL2")[i].childNodes[i].nodeValue;
document.getElementById("netl3").innerHTML = xml.responseXML.getElementsByTagName("NETL3")[i].childNodes[i].nodeValue;
document.getElementById("nefl1").innerHTML = xml.responseXML.getElementsByTagName("NEFL1")[i].childNodes[i].nodeValue;
document.getElementById("nefl2").innerHTML = xml.responseXML.getElementsByTagName("NEFL2")[i].childNodes[i].nodeValue;
document.getElementById("nefl3").innerHTML = xml.responseXML.getElementsByTagName("NEFL3")[i].childNodes[i].nodeValue;
document.getElementById("nefl4").innerHTML = xml.responseXML.getElementsByTagName("NEFL4")[i].childNodes[i].nodeValue;
document.getElementById("nefl5").innerHTML = xml.responseXML.getElementsByTagName("NEFL5")[i].childNodes[i].nodeValue;
document.getElementById("nefl6").innerHTML = xml.responseXML.getElementsByTagName("NEFL6")[i].childNodes[i].nodeValue;
document.getElementById("nefl7").innerHTML = xml.responseXML.getElementsByTagName("NEFL7")[i].childNodes[i].nodeValue;
  

}
setInterval( callXml, 1000);
