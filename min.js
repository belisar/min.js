window.Min = function() {
	
};

Min.prototype = {
	
	/**
	 * Vraci element s timto id
	 * 
	 * @param id {string}
	 * @return {Dom}
	 */
	getEl: function(id) {
		return document.getElementById(id);
	},
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
		el.classList.add(cls);
	},
	/**
	 * Odstranuje tridu
	 * @param el {Dom}
	 * @param cls {Strig} - class name
	 */
	removeCls: function(el, cls) {
		el.classList.remove(cls);
	},
	/**
	 * Testuje zda ma tridu
	 * @param el {Dom}
	 * @param cls {Strig} - class name
	 * @return {Boolean}
	 */
	hasCls: function(el, cls) {
		
		return el.classList.contains(cls);
	},
	/**
	 * Odstranuje tridu
	 * @param el {Dom}
	 * @param event {Strig}
	 * @param callback {Function}
	 * @param opt {Boolean}
	 */	
	addListener: function(el, event, callback, opt) {
		el.addEventListener(event, callback, opt);
	}	
};



Min = new Min ();