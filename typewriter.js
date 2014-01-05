var typeWriter = function(){
	var position = 0 ;
	var items_list = new Array();
	var items_count = 0 ;
	var delay_time = 0 ;
	var typewriting_time = 0;
	var current_title = 0;
	var element = null;
	var me = null;
	
	this.init = function(options){
		me = options.obj;
		element = options.element;
		items_list = options.list;
		items_count = options.list.length;
		typewriting_time = options.time;
		delay_time = options.delay;
		
		if(typeof items_list == 'undefined' || typeof element == 'undefined'){
			return;	
		} else {
			_showlist(items_list);
		}
	}
	
	this._typewriteRTL = function(title, link){	
		
		$(element).attr('href', link);
		
		
		$(element).html(title.substr(0,position) + " _ ");
		position++ ;
		if (position <= title.length){
			me.typewriter_timer = setTimeout(function(){me._typewriteRTL(title,link)}, typewriting_time);
		}
		else{
			clearTimeout(me.typewriter_timer);
			current_title++ ;
			position = 0 ;
			_showlist(items_list);
		}
			
	}
	
	var _showlist = function(list){
		if (current_title >= items_count)
			current_title = 0 ;
			
		var item   = list[current_title].split(',');
		var title  = item[0];
		var link   = item[1];
		setTimeout(function(){me._typewriteRTL(title,link)}, delay_time);
	}

}