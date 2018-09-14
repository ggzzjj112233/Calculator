var navtop = 120;
window.onload = function() {
	var bw = document.documentElement.clientWidth; //获取当前浏览器宽度
	var bodyw = document.getElementById("divbody").offsetWidth; //获取网页主体部分宽度
	var mw = document.getElementById("divmark").offsetWidth; //获取二维码宽度
	var dw = (bw - bodyw) / 2;
	if(dw < mw) {
		document.getElementById("divmark").style.right = 0;
	} else {
		document.getElementById("divmark").style.right = (dw - mw) + 'px';
	}
}

window.onresize = function() {
	var bw = document.documentElement.clientWidth; //获取当前浏览器宽度
	var bodyw = document.getElementById("divbody").offsetWidth; //获取网页主体部分宽度
	var mw = document.getElementById("divmark").offsetWidth; //获取二维码宽度
	var dw = (bw - bodyw) / 2;
	if(dw < mw) {
		document.getElementById("divmark").style.right = 0;
	} else {
		document.getElementById("divmark").style.right = (dw - mw) + 'px';
	}
}

var s1 = 1;
var toggleCompany = function(me) {
	me.src = s1 % 2 == 0 ? 'img/collapsed_no.gif' : 'img/collapsed_yes.gif';
	var company = document.getElementById('company');
	company.style.display = s1 % 2 == 0 ? 'block' : 'none';
	s1++;
}

var s2 = 1;
var toggleDiscuss = function(me) {
	me.src = s2 % 2 == 0 ? 'img/collapsed_no.gif' : 'img/collapsed_yes.gif';
	var discuss = document.getElementById('discuss');
	discuss.style.display = s2 % 2 == 0 ? 'block' : 'none';
	s2++;
}

var s3 = 1;
var toggleTec = function(me) {
	me.src = s3 % 2 == 0 ? 'img/collapsed_no.gif' : 'img/collapsed_yes.gif';
	var tec = document.getElementById('tec');
	tec.style.display = s3 % 2 == 0 ? 'block' : 'none';
	s3++;
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