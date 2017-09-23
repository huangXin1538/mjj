$(function() {
	var baseUrl="http://47.94.15.150:8080/ef/";
	window.ajax=function(url, data, type) {

		// 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
		var result;
		$.ajax({
			type:type||"get",
			url:baseUrl+url,
			data:data||{},
			dataType:"json",
			async:false,
			success:function(res){
				console.log(res)
				result=res;
			},
			error:function(err){
				return err;
			}
		});
		return result;
	};
	
	
	//获取url中的参数
    window.getUrlParam=function(name){
       	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

})