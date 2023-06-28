function CHG(){
	var L = ["likely.rf.gd", "likely.42web.io", "likely.000.pe", "likely.free.nf"];
	var links = document.getElementsByTagName("a");
  	var randomIndex = Math.floor(Math.random() * L.length);
  	var randomLink = L[randomIndex];

  	for (var i = 0; i < links.length; i++) {
    	var href = links[i].getAttribute("href");
    	var newHref = href.replace("example1.com", randomLink);
    	links[i].setAttribute("href", newHref);
  	}
}