"user strict"
document.addEventListener("DOMContentLoaded", function(){

	var $ = function(selector){
		var item = document.querySelectorAll(selector);
		if (item.length > 1){
			return item;
		}else{
			return item[0];
		}
	}

})
