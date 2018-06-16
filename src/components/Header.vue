<template>
  <header id="header" class="header">
    <ul class="cover-slider">
      <li 
      v-for="(list, i) in lists"
      :style="{backgroundImage: `url('${list.image}')` }"
      >
        <div class="cont">
          <div class="cont-cell">
            <div class="h-pulse">
              <h1 class="h">나를 찾아 떠나는 여행 <span>{{i+1}} week</span></h1>
            </div>
            <p class="hash">
              <span v-for="(hash, i) in list.hash">{{hash}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </header>
</template>
<script>
  import 'slick-carousel'

  export default {

    data() {
      return {
        lists: this.$store.state.coverList
      }
    },
    mounted() {
      let $slider = $('.cover-slider');

      $slider
      .on({
        'init': function(){
          $slider.find('li').each(function(i, el){
            let $el = $(el);

            $el.attr('style').indexOf('background-image') != 0 ? $el.addClass('no-image') : $el.addClass('had-study');
          });

          $slider.find('h1.h').each(function(i, el){
            let $el = $(el),
            $parent = $el.parent(),
            $clone = $el.clone();

            $clone.addClass('clone').appendTo($parent);
          });
        }
      })
      .slick({
        autoplay: true,
        autoplaySpeed: 5000
      });
    }
  }
</script>