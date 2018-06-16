<template>
  <div id="app" class="app">
    <!-- 
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
     -->
    <Header></Header>
    <div class="content">
      <Profile></Profile>
      <Archive></Archive>
    </div>
    <Footer></Footer>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Profile from '@/components/Profile'
import Archive from '@/components/Archive'

export default {
  name: 'App',
  components: {
  	Header,
    Footer,
  	Profile,
    Archive
  },
  data() {
    return {}
  },
  created() {
  },
  // mounted() {
  //   let $loading = document.querySelector('.loading'),
  //       tl = new TimelineMax();

  //   TweenMax.delayedCall(2, function(){
  //     tl
  //     .staggerTo($loading.querySelectorAll('.loading-letter'), 0.2, {
  //       autoAlpha: 0
  //     }, 0.05)
  //     .set($loading, {
  //       className: '+=is-blind'
  //     })
  //     .set($loading, {
  //       className: '+=is-hidden'
  //     });
  //   });
  // },
  methods: {
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>
