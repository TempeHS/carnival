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
  var i;
  var xmlDoc = xml.responseXML;
document.getElementById("bradmanScore").innerHTML = xmlDoc.getElementsByTagName("BRADMAN")[0];
document.getElementById("perkinsScore").innerHTML = xmlDoc.getElementsByTagName("PERKINS")[0];
document.getElementById("sauvageScore").innerHTML = xmlDoc.getElementsByTagName("SAUVAGE")[0];
document.getElementById("freemanScore").innerHTML = xmlDoc.getElementsByTagName("FREEMAN")[0];
}

setInterval( callXml, 1000);