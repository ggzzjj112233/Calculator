$(document).ready(function() {
	var c = true;
	$('#all').click(function() {
		if(c == true) {
			$('#ul1').find('input').prop('checked', c);
			c = false;
			$('#all').val("全不选");
		} else if(c == false) {
			$('#ul1').find('input').prop('checked', c);
			c = true;
			$('#all').val("全选");
		}
	})

	$('#move').click(function() {

	})
})

function move() {
	var ul1 = document.getElementById("ul1");
	var cbks = document.getElementById("ul1").getElementsByTagName("input");
	var ul2 = document.getElementById("ul2");
	var html = "";

	if($('#ul1').find('input').checked == true) {
		$('#ul2').append($('#ul1').find('input'))
	}
	/*if(cbks[i].type == "checkbox" && cbks[i].checked) {
		html += '<li>';
		var li = cbks[i].parentNode;
		html += li.innerHTML;
		html += '</li>';
	}*/

	for(var j = cbks.length - 1; j >= 0; j--) {

		if(cbks[j].type == "checkbox" && cbks[j].checked) {
			var li = cbks[j].parentNode;
			ul1.removeChild(li);
		}

	}

	ul2.innerHTML += html;
}

function back() {
	var ul1 = document.getElementById("ul1");
	var ul2 = document.getElementById("ul2");
	var cbks = document.getElementById("ul2").getElementsByTagName("input");
	var html = "";
	for(var i = 0; i < cbks.length; i++) {
		if(cbks[i].type == "checkbox" && cbks[i].checked) {
			html += '<li>';
			var li = cbks[i].parentNode;
			html += li.innerHTML;
			html += '</li>';
		}
	}
	for(var j = cbks.length - 1; j >= 0; j--) {

		if(cbks[j].type == "checkbox" && cbks[j].checked) {
			var li = cbks[j].parentNode;
			ul2.removeChild(li);
		}

	}

	ul1.innerHTML += html;
}

function reSet() {
	var ul1 = document.getElementById("ul1");
	var ul2 = document.getElementById("ul2");
	var cbks1 = document.getElementById("ul1").getElementsByTagName("input");
	var cbks = document.getElementById("ul2").getElementsByTagName("input");
	for(var i = cbks1.length - 1; i >= 0; i--) {
		if(cbks1[i].type == "checkbox") {
			var li = cbks1[i].parentNode;
			ul1.removeChild(li);
		}
	}
	for(var j = cbks.length - 1; j >= 0; j--) {
		if(cbks[j].type == "checkbox") {
			var li = cbks[j].parentNode;
			ul2.removeChild(li);
		}
	}
	var html = "";
	html += '<li><input type="checkbox" name="" id="" value="" />1、王老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />2、李老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />3、高老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />4、赵老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />5、黄老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />6、江老师</li>';
	html += '<li><input type="checkbox" name="" id="" value="" />7、曹老师</li>';
	ul1.innerHTML += html;
}