<template>
  <div id="app" class="app">
    <cover></cover>
    <profile></profile>
    <transition name="page" mode="out-in">
      <router-view v-if="routerState"></router-view>
    </transition>
    <archive></archive>
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
import Cover from '@/components/Cover'
import Profile from '@/components/Profile'
import Archive from '@/components/Archive'

export default {
  name: 'App',
  components: {
  	Cover,
  	Profile,
    Archive
  },
  data() {
    return {
      routerState: false
    }
  },
  created() {
    this.$eventBus.$on('routerToggle', this.routerToggle);

  },
  mounted() {
    let $loading = document.querySelector('.loading'),
        tl = new TimelineMax();

    TweenMax.delayedCall(1.5, function(){
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
  },
  methods: {
    routerToggle(state) {

      if(state == true) {
        this.routerState = state;
      }else {
        this.routerState = !state;
      }
    }
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>
