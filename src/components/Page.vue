<template>
  <div class="profile-spa" ref="spa">
    <div class="profile-spa-cover">
      <div class="profile-spa-cover--image" :style="{backgroundImage: `url('${cover}')`}"></div>
      <h1 class="h">{{en}}</h1>
      <div class="profile-image-box">
        <div class="profile-image profile-image--small">
          <img :src="`${profile}`" alt="">
        </div>
        <span class="profile-image-text">{{en}}</span>
      </div>
    </div>
    <section class="profile-spa-section">
      <template v-for="(week, k) in weeks">
        <h2 v-if="k+1 == 1" class="h">1 Week - 개인성향 검사</h2>
        <h2 v-else-if="k+1 == 2" class="h">2 Week - 자신의 인생 그래프</h2>
        <h2 v-else-if="k+1 == 3" class="h">3 Week - 클레이카드</h2>
        <h2 v-else-if="k+1 == 4" class="h">4 Week - 미술 &amp; 음악</h2>
        <img v-for="v in week.image" :src="v" alt="">
      </template>
    </section>
    <div class="profile-spa-btn--prev">
      <router-link to="/">돌아가기</router-link>
    </div>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        getInfo: this.$store.getters.getInfo,
        getPage: this.$store.getters.getInfo.page,
        getPageWeek: this.$store.getters.getInfo.page.week
      }
    },
    computed: {
      en() {
        return this.getInfo.en
      },
      cover() {
        return this.getPage.cover
      },
      profile() {
        return this.getPage.profile
      },
      weeks() {
        return this.getPageWeek;
      }
    },
    mounted() {
      let $spa = this.$refs.spa,
          $profile = $spa.querySelector('.profile-image-box');

    TweenMax.delayedCall(0.7, function(){
      window.scrollTo(0, 0);
      window.addEventListener('scroll', function(){
        if ($profile.offsetTop < window.pageYOffset) {
          $profile.classList.add( 'is-fixed' );
        } else {
          $profile.classList.remove( 'is-fixed' );
        }
      }, false);
    });      
    }
  }
</script>