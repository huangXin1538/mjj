$(function(){
	var province;
	var city;
	var area2;
	// ---------------------函数调用开始---------------------
	var a = new MultiPicker({
		input: 'multiPickerInput', // 点击触发插件的input框的id
		
		container: 'targetContainer', // 插件插入的容器id
		jsonData: $city,
		success: function(arr) {
			province = arr[0].value
			city = arr[1].value
			area2 = arr[2].value
			$('#multiPickerInput').html(arr[0].value + ' ' + arr[1].value + ' ' + arr[2].value + ' ')
		}
	});
	$(".tags span").on("click",function(){
		$(".tags span").removeClass("select");
		$(this).addClass("select");
	})
})
