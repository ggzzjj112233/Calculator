var nums = document.getElementsByClassName("num");
var point = document.getElementById("point")
var options = document.getElementsByClassName("aperation");
var result = document.getElementById("result");
var clear = document.getElementById("clear");
var show = document.getElementById("show");
var numValue = ""; //存储数字
var optionC = ""; //存储操作符
var numTemp = ""; //存储暂存值
var pointnum = 0; //小数点次数
var equalnum = 0; //等于号次数
var num = 0; //点击数字的次数

for(var i = 0; i < nums.length; i++) {
	equalnum = 0;
	nums[i].onclick = function() {
		if(num == 0 || numValue == "0") {
			numValue = "";
		}
		num++;
		numValue += this.innerHTML;
		show.value = numValue;
	}
}

point.onclick = function() {
	if(pointnum == 0) {
		numValue += this.innerHTML;
		show.value = numValue;;
		pointnum++;
	} else {
		numValue = numValue;
	}
}

for(var i = 0; i < options.length - 1; i++) {
	equalnum = 0;
	options[i].onclick = function() {
		numTemp = show.value;
		optionC = this.innerHTML;
		numValue = "";
		pointnum = 0;
		num = 0
	}

}

result.onclick = function() {
	pointnum = 0;
	num = 0;
	if(equalnum == 0) {
		show.value = eval(numTemp + optionC + numValue);
		equalnum++;
	} else {
		show.value = eval(show.value + optionC + numValue);
	}
}

clear.onclick = function() {
	show.value = "0";
	numValue = "";
	optionC = "";
	numTemp = "";
	pointnum = 0;
	equalnum = 0;
	num = 0;
}

