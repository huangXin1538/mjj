$(function() {
	//	三种选中
	//单品选中
	$(".item_checked").on("click",function(){
		$(this).find(".check_g").toggleClass("checkicon")
		if(!$(this).find(".check_g").hasClass("checkicon")){
			$(this).closest(".group").find(".check_all").removeClass("checkicon")
		}
		var l=$(this).closest(".group").find(".check_g").length;
		var l2=$(this).closest(".group").find(".checkicon").length;
		if(l==l2){
			$(this).closest(".group").find(".check_all").addClass("checkAllIcon");
			if($(".check_all").length==$(".checkAllIcon").length){
				$(".allcheck").addClass("allcheckicon");
			}
		}else{
			$(this).closest(".group").find(".check_all").removeClass("checkAllIcon");
			$(".allcheck").removeClass("allcheckicon");
		}
	})
	//组选中
	$(".check_all").on("click",function(){
		if(!$(this).hasClass("checkAllIcon")){
			$(this).closest(".group").find(".check_g").addClass("checkicon")
		}else{
			$(this).closest(".group").find(".check_g").removeClass("checkicon")
		}
		$(this).toggleClass("checkAllIcon");
		
		
		if($(".check_all").length==$(".checkAllIcon").length){
			$(".allcheck").addClass("allcheckicon");
		}else{
			$(".allcheck").removeClass("allcheckicon");
		}
	})
	//全选选中
	$(".allcheck").on("click",function(){
		if($(this).hasClass("allcheckicon")){
			$(".check_g").removeClass("checkicon");
			$(".check_all").removeClass("checkicon");
		}else{
			$(".check_g").addClass("checkicon");
			$(".check_all").addClass("checkicon");
		}
		
		$(this).toggleClass("allcheckicon");
	})
	
	//删除
	$(".mui-btn-red").on("click",function(){
		var l=$(this).closest(".group").find(".item").length;
		if(l<=1){
			$(this).closest(".group").remove();
		}
		$(this).closest(".item").remove();
	})
	
	//选择优惠方式
	$(".stylecheck").on("click",function(){
		$(".stylecheck").removeClass("stylecheckicon");
		$(this).addClass("stylecheckicon");
	})
	
})