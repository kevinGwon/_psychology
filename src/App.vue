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
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>