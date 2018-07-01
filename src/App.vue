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
          tl = new TimelineMax(),
          delay = 0.1

      $path.each((i, el)=>{
        let $el = $(el),
            pathLength = $el.get(0).getTotalLength()

        TweenMax.set(el, {
            strokeDasharray: pathLength
        })

        TweenMax
        .fromTo(el, 0.15, {
          strokeDashoffset: pathLength
        }, {
          delay: delay += 0.12,
          className: '+='+i,
          strokeDashoffset: pathLength * 2,
          onComplete: () => {
            TweenMax.set($el, {
              className: '+=is-fill',
            })
            if(i == $path.length-1) {
              tl
              .to($introSvg, 0.5, {
                delay: 0.5,
                autoAlpha: 0
              })
              .set($intro, {
                delay: 0.3,
                className: '+=is-blind'
              })
              .set($intro, {
                delay: 0.3,
                className: '+=is-hidden'
              })
              .set(document.querySelector('body'), {
                delay: 0.3,
                className: '-=is-intro',
                onComplete: () => {
                  $intro.remove()
                }
              })              
            }
            }
        })
      })        
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