;(function(){
	$.fn[ 'scollTop' ] = function(){
		var _toTop,
			_oScrollW,
			_oScrollH,
			_oScrollTop;
		
		
		var _scollTopFn = {
			init : function(el,ev){
				var ev = ev || window.event;
				
				_toTop = document.querySelector(el);
				
				_oScrollW = document.documentElement.clientWidth || document.body.clientWidth;
				_oScrollH = document.documentElement.clientHeight || document.body.clientHeight;
				
				
				_toTop.style.left = _oScrollW - _toTop.offsetWidth + 'px';
				_toTop.style.top = _oScrollH - ( _toTop.offsetHeight + 50 ) + 'px';
				 
				window.onscroll = function(){
					_oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					
					if(_oScrollTop > 1000){
						_toTop.style.opacity = '0.4';
					}else{
						_toTop.style.opacity = '0'
					}
					
					_toTop.style.top = _oScrollH - ( _toTop.offsetHeight + 50 ) + _oScrollTop + 'px';
				}; 
				
				_toTop.onclick = function(ev){
					var ev = ev || window.event;
					
					document.documentElement.scrollTop = document.body.scrollTop = 0;
				}
			}
			
		}
		return _scollTopFn;
	}
})();
