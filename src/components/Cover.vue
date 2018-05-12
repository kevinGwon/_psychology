<template>
	<ul class="cover-slider">
		<li style="background-image: url('/psychology/image/cover/cover-01.jpg');">
			<div class="cont">
				<div class="cont-cell">
					<div class="h-pulse">
						<h1 class="h">나를 찾아 떠나는 여행 <span>1 week</span></h1>
					</div>
					<p class="hash">
						<span>첫 번째 모임</span>
						<span>나를 알게되다</span>
						<span>성향검사</span>
					</p>
				</div>
			</div>
		</li>
		<li>
			<div class="cont">
				<div class="cont-cell">
					<div class="h-pulse">
						<h1 class="h">나를 찾아 떠나는 여행 <span>2 week</span></h1>
					</div>
					<p class="hash">
						<span>두 번째 모임</span>
					</p>
				</div>
			</div>
		</li>
		<li>
			<div class="cont">
				<div class="cont-cell">
					<div class="h-pulse">
						<h1 class="h">나를 찾아 떠나는 여행 <span>3 week</span></h1>
					</div>
					<p class="hash">
						<span>세 번째 모임</span>
					</p>
				</div>
			</div>
		</li>
		<li>
			<div class="cont">
				<div class="cont-cell">
					<div class="h-pulse">
						<h1 class="h">나를 찾아 떠나는 여행 <span>4 week</span></h1>
					</div>
					<p class="hash">
						<span>네 번째 모임</span>
					</p>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
import 'slick-carousel'

export default {

	data() {
		return {}
	},
	mounted() {
		let $slider = $('.cover-slider');

		$slider
		.on({
			'init': function(){
				$slider.find('li').each(function(i, el){
					let $el = $(el);

					$el.attr('style').indexOf('background-image') != 0 ? $el.addClass('no-image') : '';
				});

				$slider.find('h1.h').each(function(i, el){
					let $el = $(el),
						$parent = $el.parent(),
						$clone = $el.clone();

					$clone.addClass('clone').appendTo($parent);
				});
			}
		})
		.slick();
	}
}
</script>