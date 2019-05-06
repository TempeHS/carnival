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
  var table="<tr><th>Artist</th><th>Title</th><th>Cover</th></tr>";
document.getElementById("bradmanScore").innerHTML = xmlDoc.getElementsByTagName("BRADMAN");
document.getElementById("perkinsScore").innerHTML = xmlDoc.getElementsByTagName("PERKINS");
document.getElementById("sauvageScore").innerHTML = xmlDoc.getElementsByTagName("SAUVAGE");
document.getElementById("freemanScore").innerHTML = xmlDoc.getElementsByTagName("FREEMAN");
}

setInterval( callXml, 1000);