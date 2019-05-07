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

document.getElementById("bradmanScore").innerHTML = xml.responseXML.getElementsByTagName("BRADMAN")[0].childNodes[0].nodeValue;
document.getElementById("perkinsScore").innerHTML = xml.responseXML.getElementsByTagName("PERKINS")[0].childNodes[0].nodeValue;
document.getElementById("sauvageScore").innerHTML = xml.responseXML.getElementsByTagName("SAUVAGE")[0].childNodes[0].nodeValue;
document.getElementById("freemanScore").innerHTML = xml.responseXML.getElementsByTagName("FREEMAN")[0].childNodes[0].nodeValue;
}

setInterval( callXml, 1000);
