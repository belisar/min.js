App = {};

App.hasClsClick = function(event) {
	var div = Min.getEl('licko');
	console.log(Min.hasCls(div, 'kometa'));
	console.log(div);
};

App.addClsClick = function(event) {
	var div = Min.getEl('licko');
	Min.addCls(div, 'kometa');
	console.log(div);
};

App.removeClsClick = function(event) {
	var div = Min.getEl('licko');
	Min.removeCls(div, 'kometa');
	console.log(div);
};

App.getElByClsClick = function(event) {
	console.log(Min.getElByCls('kuku'));
};

App.getElClick = function(event) {
	console.log(Min.getEl('licko'));
};


App.init = function() {
	Min.addListener(Min.getEl('hasCls'), 'click', App.hasClsClick);	
	Min.addListener(Min.getEl('addCls'), 'click', App.addClsClick);	
	Min.addListener(Min.getEl('removeCls'), 'click', App.removeClsClick);	
	Min.addListener(Min.getEl('getElByCls'), 'click', App.getElByClsClick);	
	Min.addListener(Min.getEl('getEl'), 'click', App.getElClick);	
};
