window.Min = function() {
//	this._domIdCache = {};
	this._domClassCache = {};
};

Min.prototype = {
	
	/**
	 * Vraci element s timto id
	 * 
	 * @param id {string}
	 * @return {Dom}
	 */
	getEl: function(id) {
		var el = document.getElementById(id);
		if(!el && console) {
			console.error('Element [' + id + '] nebyl nalezen');
		}
		return el;
	},
	
//	getEl: function(id) {
//		if(!this._domIdCache[id]) {
//			this._domIdCache.id = document.getElementById(id);	
//		}
//		
//		return this._domIdCache.id;
//	},
	/**
	 * Vraci elementy s touto tridou
	 * 
	 * @param cls {string}
	 * @param startEl {dom}
	 * @return {Array} - pole s elemnty
	 */
	getElByCls: function(cls, startEl) {
		return startEl ? startEl.getElementsByClassName(cls) : document.getElementsByClassName(cls);
	},
	
	/**
	 * Pridava tridu
	 * @param el {Dom}
	 * @param cls {Strig}  - class name
	 */
	addCls: function(el, cls) {
		if(el.classList && el.classList.add) {
			el.classList.add(cls);
			return;
		}
		
		if (this.hasClass(el, cls)) { 
			el.className += " "+cls;
		}
		
		return;
	},
	/**
	 * Odstranuje tridu
	 * @param el {Dom}
	 * @param cls {Strig} - class name
	 */
	removeCls: function(el, cls) {
		if(el.classList && el.classList.remove) {
			el.classList.remove(cls);
			return;
		}
		
		var
			i,
			names = el.className.split(" "),
			newClassArr = [];
			
		for (i=0; i<names.length; i++) {
			if (names[i].toLowerCase() != cls.toLowerCase()) { newClassArr.push(names[i]); }
		}
		el.className = newClassArr.join(" ");
		return;
	},
	/**
	 * Testuje zda ma tridu
	 * @param el {Dom}
	 * @param cls {Strig} - class name
	 * @return {Boolean}
	 */
	hasCls: function(el, cls) {

		if(el.classList && el.classList.contains) {
			return el.classList.contains(cls);
		}
	
		var arr = el.className.split(" ");
		for (var i = 0; i < arr.length; i++) { 
			if (arr[i].toLowerCase() == cls.toLowerCase()) { 
				return true; 
			} 
		}
		return false;

	},
	/**
	 * Odstranuje tridu
	 * @param el {Dom}
	 * @param event {Strig}
	 * @param callback {Function}
	 * @param opt {Boolean}
	 */	
	addListener: function(el, event, callback, opt) {
		if(el.addEventListener) {
			el.addEventListener(event, callback, opt);
		}
	}	
};

Min = new Min ();