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
  
var graphTotal = bScore + pScore + sScore + fScore;
var bScoreMath = bScore / graphTotal * 150;
var pScoreMath = pScore / graphTotal * 150;
var sScoreMath = sScore / graphTotal * 150;
var fScoreMath = fScore / graphTotal * 150;
  
document.getElementById("bGraph").style.height = "'" + bScoreMath + "px'";
document.getElementById("pGraph").style.height = "'" + pScoreMath + "px'";
document.getElementById("sGraph").style.height = "'" + sScoreMath + "px'";
document.getElementById("fGraph").style.height = "'" + fScoreMath + "px'";

document.getElementById("bradmanScore").innerHTML = bScore;
document.getElementById("perkinsScore").innerHTML = pScore;
document.getElementById("sauvageScore").innerHTML = sScore;
document.getElementById("freemanScore").innerHTML = fScore;
  


}
setInterval( callXml, 1000);
