var col = 0;

var DataTable = function(json) {
	this.json = json;
	this.tr = json.data.length;
	this.hash = json.data[0];
	this.getCaption = function() {
		var html = '';
		if(json.caption != null && json.caption != '') {
			html = '<caption>' + json.caption + '</caption>';
		}
		return html;
	}
	this.getThead = function() {
		var html = '<thead>';
		var i = 0;
		for(var k in this.hash) {
			if(i == 0) {
				html += "<th><label><input type='checkbox'  onchange='checkAll(this)' name='all' />" + k + "</label></th>";
			} else {
				html += '<th>' + k + '</th>';
			}
			i++;
			col++;
		}
		html += '<th><input type="button" value="添加" class="btn" onclick="addTr()" /></th>';
		html += '</thead>';
		return html;
	}
	this.getTfoot = function() {
		var html = '<tfoot>';
		var i = 0;
		for(var k in this.hash) {
			if(i == 0) {
				html += "<th><label><input type='checkbox' onchange='checkAll(this)' name='all' />" + k + "</label></th>";
			} else {
				html += '<th>' + k + '</th>';
			}
			i++;
		}
		html += '<th><input type="button" value="批量删除" class="btn" onclick="delTrs()" /></th>';
		html += '</tfoot>';
		return html;
	}
	this.getTbody = function() {
		var html = '<tbody>';
		for(var i = 0; i < this.tr; i++) {
			html += '<tr>';
			var c = 0;
			for(var k in this.json.data[i]) {
				if(c == 0) {
					html += '<td><lable><input type="checkbox" onchange="selectOne(this)" />' + this.json.data[i][k] + '</lable></td>';
				} else if(k == 'description') {
					html += '<td ondblClick="changeValue(this)">' + this.json.data[i][k] + '</td>';
				} else {
					html += '<td>' + this.json.data[i][k] + '</td>';
				}
				c++;
			}
			html += '<td><input type="button" value="删除" class="btn" onclick="delTr(this)" /></td>';
			html += '</tr>';
		}
		html += '</tbody>';
		return html;
	}
	this.getTable = function() {
		var html = '<table id="table1">';
		html += this.getCaption();
		html += this.getThead();
		html += this.getTfoot();
		html += this.getTbody();
		html += '</table>';
		return html;
	}
}

var checkAll = function(me) {
	var f = me.checked;
	$('table input[type="checkbox"]').prop("checked",f);
}

var selectOne = function(me) {
	var f = me.checked;
	$('table>tbody input[type="checkbox"]').each(function(i) {
		if(!$(this).prop("checked")){
			f=false;
			return;
		}
	})
	$('input[name="all"]').prop('checked',f);
}

var delTr = function(me) {
	$(me).parent().parent().remove();
}

var delTrs = function() {
	$('tbody input[type="checkbox"]:checked').parentsUntil('tbody').remove();
}

var addTr = function() {
	var html = '<tr>';
	for(var i = 0; i < col; i++) {
		html += '<td></td>';
	}
	html += '<td><input type="button" value="删除" class="btn" onclick="delTr(this)" />';
	html += '</tr>';
	$('tbody').append(html);
}

var changeValue = function(me) {
	me=$(me);
	me.removeAttr('ondblClick');
	var val=me.text();
	me.html("<input type='text' value='"+val+"' class='text'><input type='button' value='修改' class='btn' onclick='setVal(this)'/>")
}

var setVal = function(me) {
	var val = $(me).prev().val();
	$(me).parent().attr('ondblClick',"changeValue(this)");
	$(me).parent().text(val);	
}

$(document).ready(function(){
	var datatable = new DataTable(json);
	$('#div1').html(datatable.getTable())
})

