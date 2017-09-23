$(function() {

	//页面初始化
	getProducts(0);
	getCarousel();
	
	
	
	var mySwiper2 = new Swiper('.welfareGroup-container', {
		autoplay: 3000, //可选选项，自动滑动
		loop: true,
		autoplayDisableOnInteraction: false,
	})
	
	//获取轮播
	function getCarousel(){
		renderCarousel(window.ajax("index/getCarousel"))
	}
	function renderCarousel(data){
		$(data.model).each(function(){
			var s='<div class="swiper-slide"> <div class="swiperImg" data-id="'+this.id+'" style="background:url('+this.imgs+') no-repeat;background-size:100%"></div> </div>';
			$("#swiper1").append(s)
		})
		var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		autoplay: 1500, //可选选项，自动滑动
		loop: true,
		paginationType : 'fraction',
		autoplayDisableOnInteraction: false
	})	
	}
	//获取商品
	function getProducts(num) {
		var data={
			max:num
		};
		renderGoods(window.ajax("index/getGoods",data,"post"))
	}
	
	function renderGoods(data){
		$(data.model.data).each(function(i){
			var s='<div class="saleProduct" data-id='+this.id+'> <div style="height:100%"> <img class="" src="'+this.homeImg+'" alt=""> <div class="saleProductMesg"><p class="saleProductName"> <b>'+this.name+'</b> <span>'+this.viceName+'</span> </p> <p class="saleProductPrice"> 超市价格￥<b>'+this.oprice+'<i></i></b></p><p class="saleProductcPrice"> My价￥<b>'+this.price+'<i></i></b></p> </div> </div> </div>';
			$(".contentlist").append(s);
			
		})
		$(".saleProduct").on('click', function() {
			location.href = "html/good.html?id="+$(this).attr("data-id");
		})
	}
	
	$(".shopcart").on('click', function() {
		location.href = "html/shopcart.html"
	})
	$(".personal").on('click', function() {
		location.href = "html/personal.html"
	})

	
})