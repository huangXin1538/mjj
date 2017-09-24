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
	function getCarousel() {
		renderCarousel(window.ajax("index/getCarousel"))
	}

	function renderCarousel(data) {
		$(data.model).each(function() {
			var s = '<div class="swiper-slide"> <div class="swiperImg" data-id="' + this.aid + '" style="background:url(' + this.imgs + ') no-repeat;background-size:100%"></div> </div>';
			$("#swiper1").append(s)
		})
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			autoplay: 1500, //可选选项，自动滑动
			loop: true,
			paginationType: 'fraction',
			autoplayDisableOnInteraction: false
		})
		$('.swiper-container').find(".swiper-slide").on("click",function(){
			var id=$(this).attr("data-id")
			location.href="html/active.html?id="+id;
		})
	}
	//获取商品
	function getProducts(num) {
		var data = {
			max: num
		};
		renderGoods(window.ajax("index/getGoods", data, "post"))
	}

	function renderGoods(data) {
		if(data.model.data.length==0){
			isloading=true;
			return false;
		};
		$(data.model.data).each(function(i) {
			var s = '<div class="saleProduct" data-id=' + this.id + '><div class="homecart"></div>	 <div class="selectNum"><span class="reduce"></span><span class="nowNum">1</span><span class="add"></span>	</div>	 <div class="productInner" style="height:100%"><img class="" src="' + this.homeImg + '" alt=""> <div class="saleProductMesg"><p class="saleProductName"> <b>' + this.name + '</b> <span>' + this.viceName + '</span> </p> <p class="saleProductPrice"> 超市价格￥<b>' + this.oprice + '<i></i></b></p><p class="saleProductcPrice"> My价&nbsp;￥<b>' + this.price + '<i></i></b></p> </div> </div> </div>';
			$(".contentlist").append(s);

		})
		$(".productInner").on('click', function() {
			location.href = "html/good.html?id=" + $(this).attr("data-id");
		})
		
		//加入购物车
		$(".homecart").on("click",function(e){
			$(this).hide();
			$(this).closest(".saleProduct").find(".selectNum").css({"visibility":"visible"})
		})
		$(".add").on("click",function(){
			var nowNum=$(this).closest(".saleProduct").find(".nowNum").html();
			nowNum++;
			$(this).closest(".saleProduct").find(".nowNum").html(nowNum)
		})
		$(".reduce").on("click",function(){
			var nowNum=$(this).closest(".saleProduct").find(".nowNum").html();
			if(nowNum==1){
				$(this).closest(".saleProduct").find(".selectNum").css({"visibility":"hidden"})
				$(this).closest(".saleProduct").find(".homecart").show();
			}else{
				nowNum--;
				$(this).closest(".saleProduct").find(".nowNum").html(nowNum)
			}
		})
	};

	//	滚动加载
	var isloading=false;
	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();　　
		var scrollHeight = $('.content').height();　　
		var windowHeight = $(this).height();
		if(scrollTop + windowHeight >= scrollHeight) {
			var hasNum=$(".saleProduct").length;
			if(isloading == false) {
				isloading = true;
				getProducts(hasNum);
			}
		};
	});

	$(".shopcart").on('click', function() {
		location.href = "html/shopcart.html"
	})
	$(".personal").on('click', function() {
		location.href = "html/personal.html"
	})

})