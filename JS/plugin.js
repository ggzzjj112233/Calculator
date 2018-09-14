var navtop = 120;
var s1 = 1;

function toggleClient() {
	var collapsed = document.getElementById("collapsed")
	collapsed.src = s1 % 2 == 0 ? 'img/collapsed_no.gif' : 'img/collapsed_yes.gif';
	var client = document.getElementById("client");
	client.style.display = s1 % 2 == 0 ? 'block' : 'none';
	var client = document.getElementById("divBG");
	divBG.style.height = s1 % 2 == 0 ? 195 + 'px' : 60 + 'px';
	s1++;
}

function display1() {
	document.getElementById("yulan1").style.display = "block";
}

function disappear1() {
	document.getElementById("yulan1").style.display = "none";
}

function display2() {
	document.getElementById("yulan2").style.display = "block";
}

function disappear2() {
	document.getElementById("yulan2").style.display = "none";
}

function display3() {
	document.getElementById("yulan3").style.display = "block";
}

function disappear3() {
	document.getElementById("yulan3").style.display = "none";
}

function display4() {
	document.getElementById("yulan4").style.display = "block";
}

function disappear4() {
	document.getElementById("yulan4").style.display = "none";
}

function display5() {
	document.getElementById("yulan5").style.display = "block";
}

function disappear5() {
	document.getElementById("yulan5").style.display = "none";
}

function display6() {
	document.getElementById("yulan6").style.display = "block";
}

function disappear6() {
	document.getElementById("yulan6").style.display = "none";
}

function display7() {
	document.getElementById("yulan7").style.display = "block";
}

function disappear7() {
	document.getElementById("yulan7").style.display = "none";
}

function display8() {
	document.getElementById("yulan8").style.display = "block";
}

function disappear8() {
	document.getElementById("yulan8").style.display = "none";
}

function display9() {
	document.getElementById("yulan9").style.display = "block";
}

function disappear9() {
	document.getElementById("yulan9").style.display = "none";
}

function display10() {
	document.getElementById("yulan10").style.display = "block";
}

function disappear10() {
	document.getElementById("yulan10").style.display = "none";
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

window.onscroll = function() {
	var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrolltop >= navtop) {
		document.getElementById("nav1").style.position = 'fixed';
		document.getElementById("nav1").style.top = 0;		
	} else {
		document.getElementById("nav1").style.position = 'static';
	}
}

var showList = function(me) {
	var doc = document.getElementById("kjmenu");
	kjmenu.style.display = 'block';
}

var hideList = function(me) {
	var doc = document.getElementById("kjmenu");
	kjmenu.style.display = 'none';
}