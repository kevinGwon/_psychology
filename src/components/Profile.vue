<template>
  <div class="profile">
<!--   	<ul class="profile-names">
  		<li><button type="button">권승곤</button></li>
  		<li><button type="button">강상윤</button></li>
  		<li><button type="button">이민지</button></li>
  		<li><button type="button">권승곤</button></li>
  		<li><button type="button">강상윤</button></li>
  		<li><button type="button">이민지</button></li>
  	</ul>
  	<ul class="profile-images">
  		<li>권승곤</li>
  		<li>강상윤</li>
  		<li>이민지</li>
  		<li>권승곤</li>
  		<li>강상윤</li>
  		<li>이민지</li>
  	</ul> -->
  </div>
</template>

<script>
import 'slick-carousel'

export default {

	data() {
		return {}
	},
	mounted() {
		let $namesSlider = $('.profile-names'),
			$imagesSlider = $('.profile-images');

		$namesSlider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,			
			centerMode: true,
			arrows: false,
			asNavFor: '.profile-images',
			focusOnSelect: true
		});
		$imagesSlider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,			
			centerMode: true,
			arrows: false,
			asNavFor: '.profile-names'
		});		
	}
}
</script>