<template>
  <div id="app" class="app" ref="app">  
    <transition name="main">
      <router-view v-show="!isLoader"></router-view>
    </transition>      
    <Intro></Intro>
    <Loader v-if="isLoader || isArchive"></Loader>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from "@/components/modules/Loader"
import Intro from '@/components/modules/Intro'

export default {
  name: 'App',
  components: { Loader, Intro },
  computed: {
    ...mapState(['isLoader', 'isArchive'])
  },  
  mounted() {
    this.$nextTick(()=>{
      TweenMax.set(document.querySelector('body'), {
        className: '+=is-intro'
      })

      this.intro()      
      this.scrollView()
    })
  },
  methods: {
    intro() {
      let $intro = document.querySelector('.intro'),
          $introSvg = $('.intro-svg'),
          $path = $introSvg.find('path'),
          pathLength = $path.get(0).getTotalLength(),
          tl = new TimelineMax()


      TweenMax.set($path, {
          strokeDasharray: pathLength
      })
      drawingSign();
      
      function drawingSign() {
          tl
          .fromTo($path, 1.5, {
            strokeDashoffset: pathLength
          }, {
            strokeDashoffset: pathLength * 2,
            onComplete: () => {
              TweenMax.set($introSvg, {
                className: '+=is-fill',
                onComplete: () => {
                  TweenMax.to($introSvg, 0.5, {
                    delay: 1,
                    autoAlpha: 0
                  })
                }
              })
            }
          })
          .set($intro, {
            delay: 1.5,
            className: '+=is-blind'
          })
          .set($intro, {
            delay: 1,
            className: '+=is-hidden'
          })
          .set(document.querySelector('body'), {
            className: '-=is-intro'
          })          
      }
    },    
    scrollView() {
      let top = 0,
      height = 0,
      scrollViewHeight = 0,
      $sv = null

      this.$refs.app.insertAdjacentHTML('beforeend', '<span class="scroll-view"></span>');
      $sv = this.$refs.app.querySelector('.scroll-view')
      $sv.setAttribute('style', 'width: '+scrollViewHeight+'%;')

      window.addEventListener('scroll', () => {
        top = window.pageYOffset
        height = this.$refs.app.clientHeight - window.screen.height
        scrollViewHeight = (top/height)*100
        $sv.setAttribute('style', 'width: '+scrollViewHeight+'%;')
      }, false);
    }
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>