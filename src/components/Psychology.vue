<template>
  <main id="main" class="main" ref="main">
    <Header></Header>
    <div class="content">
      <Profile></Profile>
      <Archive></Archive>
    </div>
    <Comment></Comment>
    <Footer></Footer>
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
  </main>
</template>

<script>
import Header from '@/components/modules/Header'
import Footer from '@/components/modules/Footer'
import Profile from '@/components/modules/Profile'
import Archive from '@/components/modules/Archive'
import Comment from '@/components/modules/Comment'

import mojs from "mo-js"

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Profile,
    Archive,
    Comment
  },  
  mounted() {
    this.intro()
    this.touchMotion()
    this.scrollView()
  },
  methods: {
    intro() {
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
    },
    touchMotion() {
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
    },
    scrollView() {
      let top = 0,
          height = 0,
          scrollViewHeight = 0,
          $sv = null

      this.$refs.main.insertAdjacentHTML('beforeend', '<span class="scroll-view"></span>');
      $sv = this.$refs.main.querySelector('.scroll-view')
      $sv.setAttribute('style', 'width: '+scrollViewHeight+'%;')

      window.addEventListener('scroll', () => {
        if (window.pageYOffset < this.$refs.main.querySelector('.archive').offsetTop) {
          top = window.pageYOffset
        } else {
          top = window.pageYOffset + window.screen.height
        }
        height = this.$refs.main.clientHeight
        scrollViewHeight = (top/height)*100
        $sv.setAttribute('style', 'width: '+scrollViewHeight+'%;')
      }, false);
    }
  }
}
</script>