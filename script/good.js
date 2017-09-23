
$(function() {
	var id = window.getUrlParam("id");
	console.log(id)
	getGoodsDetail(id)

	function getGoodsDetail(id) {
		var data = {
			id: id
		};
		renderGoods(window.ajax("goods/getBasicInfo", data, "post"))
	}

	function renderGoods(data) {
		var detail = data.model;
		$(".goodSecName").html(detail.name);
		$(".title-product").html(detail.summary);

		//规格
		var theParam = JSON.parse(detail.param)
		$(theParam).each(function() {
			var s = '<li class="mui-table-view-cell"> <a class="mui-navigate-right"> ' + this.k + '：' + this.v + ' </a> </li>';
			$(".mui-table-view").append(s)
		})
		//轮播图
		var a_bannerImg = detail.imgs.split(",");
		$(a_bannerImg).each(function() {
			var s = '<div class="swiper-slide"><img src="' + this + '"/></div>';
			$(".swiper-wrapper").append(s)
		})

		//详情图
		var a_descImg = detail.desc.split(",");
		$(a_descImg).each(function() {
			var s = '<img src="' + this + '">';
			$(".goodimg").prepend(s)
		})
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			autoplay: 3000, //可选选项，自动滑动
			loop: true,
			autoplayDisableOnInteraction: false
		})
		console.log(a_bannerImg)
		console.log(data)
	}
	
	$(".tocart").on("click",function(){
		location.href="shopcart.html"
	})

})



