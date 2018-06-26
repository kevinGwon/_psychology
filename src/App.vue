<template>
  <div id="app" class="app">  
    <transition name="main">
      <router-view v-show="!isLoader"></router-view>
    </transition>      
    <Loader v-if="isLoader || isArchive"></Loader>
    <div class="loading">
      <div class="loading-cell">
        <span class="loading-letter">나</span>
        <span class="loading-letter">를</span>
        <span class="loading-letter">&nbsp;</span>
        <span class="loading-letter">찾</span>
        <span class="loading-letter">아</span>
        <span class="loading-letter">떠</span>
        <span class="loading-letter">나</span>
        <span class="loading-letter">는</span>
        <span class="loading-letter">&nbsp;</span>
        <span class="loading-letter">여</span>
        <span class="loading-letter">행</span>
        <span class="loading-letter">.</span>
      </div>
    </div>     
  </div>
</template>

<script>
import mojs from "mo-js"
import { mapState } from 'vuex'
import Loader from "@/components/modules/Loader"

export default {
  name: 'App',
  components: { Loader },
  computed: {
    ...mapState(['isLoader', 'isArchive'])
  },  
  mounted() {
    let $loading = document.querySelector('.loading'),
        tl = new TimelineMax();

    TweenMax.delayedCall(2, function(){
      tl
      .staggerTo($loading.querySelectorAll('.loading-letter'), 0.2, {
        autoAlpha: 0
      }, 0.05)
      .set($loading, {
        className: '+=is-blind'
      })
      .set($loading, {
        className: '+=is-hidden'
      });
    });

    let x, y = 0;

    const SWIRL_OPTS = {
      left: 0, top: 0,
      fill:           {'#1fa2ed':'#9aeff4'},
      duration:       'rand(600, 1000)',
      radius:         'rand(10, 20)',
      pathScale:      'rand(.5, 1)',
      swirlFrequency: 'rand(2,4)',
      swirlSize: 'rand(6,14)',
    }

    const swirl1 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS
    });
      
    const swirl2 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS,
      direction: -1
    });

    const swirl3 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS
    });
      
    const swirl4 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS
    });
    document.body.addEventListener('touchend', function (e) {
      x = e.changedTouches[0].pageX
      y = { [e.changedTouches[0].pageY]: e.changedTouches[0].pageY-150 };

      $('body').trigger('click')
    });
    document.body.addEventListener('click', function (e) {
      // x == undefined ? e.pageX : x
      // y == undefined ? { [e.pageY]: e.pageY-150 } : y

      swirl1
        .tune({ x, y })
        .generate()
        .replay();
      
      swirl2
        .tune({ x, y })
        .generate()
        .replay();
      
      swirl3
        .tune({ x, y })
        .generate()
        .replay();
      
      swirl4
        .tune({ x, y })
        .generate()
        .replay();
      
    }, false);
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>