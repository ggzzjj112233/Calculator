window.onscroll = function() {
	var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrolltop >= 120) {
		document.getElementById("nav1").style.position = 'fixed';
		document.getElementById("nav1").style.top = 0;		
	} else {
		document.getElementById("nav1").style.position = 'static';
	}
	var table1=document.getElementById("table1");
	var td=table1.getElementsByTagName("td")[0];
	var h1=table1.getElementsByTagName("tbody")[0].height;
	var h2=table1.getElementsByTagName("tr")[2].height;
	var h3=h1-h2;
	if(scrolltop >= 323 && scrolltop<1305) {
		document.getElementById("touxiang").style.position = 'fixed';
		document.getElementById("touxiang").style.top = 35+'px';	
	}else if(scrolltop >= 1305 && scrolltop<1553){
		document.getElementById("touxiang").style.position = 'fixed';
		document.getElementById("touxiang").style.top = 1335-scrolltop+'px';
	}
	else {
		document.getElementById("touxiang").style.position = 'static';
	}
}

var showDoc = function(me) {
	var doc = document.getElementById("doc");
	doc.style.display = 'block';
}

var hideDoc = function(me) {
	var doc = document.getElementById("doc");
	doc.style.display = 'none';
}

var showDoc1 = function(me) {
	var doc1 = document.getElementById("doc1");
	doc1.style.display = 'block';
}

var hideDoc1 = function(me) {
	var doc1 = document.getElementById("doc1");
	doc1.style.display = 'none';
}

var showDoc2 = function(me) {
	var doc2 = document.getElementById("doc2");
	doc2.style.display = 'block';
}

var hideDoc2 = function(me) {
	var doc2 = document.getElementById("doc2");
	doc2.style.display = 'none';
}

var showList = function(me) {
	var doc = document.getElementById("kjmenu");
	kjmenu.style.display = 'block';
}

var hideList = function(me) {
	var doc = document.getElementById("kjmenu");
	kjmenu.style.display = 'none';
}