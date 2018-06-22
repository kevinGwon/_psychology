<template>
  <div class="profile-spa" ref="spa" v-show="!isLoader">
    <div class="profile-spa-cover">
      <div class="profile-spa-cover--image" :style="{backgroundImage: `url('${getInfo.page.cover}')`}"></div>
      <h1 class="h">{{getInfo.en}}</h1>
      <div class="profile-image-box">
        <div class="profile-image profile-image--small">
          <router-link to="/">
            <img :src="`${getInfo.page.profile}`" alt="">
          </router-link>
        </div>
        <span class="profile-image-text">{{getInfo.en}}</span>
      </div>
    </div>
    <section class="profile-spa-section">
      <template v-for="(week, k) in getInfo.page.week">
        <h2 v-if="k+1 == 1" class="h">1 Week - 개인성향 검사</h2>
        <h2 v-else-if="k+1 == 2" class="h">2 Week - 자신의 인생 그래프</h2>
        <h2 v-else-if="k+1 == 3" class="h">3 Week - 클레이카드</h2>
        <h2 v-else-if="k+1 == 4" class="h">4 Week - 미술 &amp; 음악</h2>
        <img v-for="v in week.image" :src="v" alt="">
      </template>
    </section>
    <ul class="profile-spa-list profile-spa-list__active">
      <li
        v-for="(item, key, i) in psychologyLists"
        v-if="member != key"
      >
        <router-link to="/page" @click.native="changePage(key)"><img :src="`${item.profile}`" alt=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['psychologyLists', 'member', 'isLoader']),
    ...mapGetters(['getInfo'])
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
    this.loaderTrigger();
  },
  methods: {
    loaderTrigger() {
      let $spa = this.$refs.spa;

      this.$store.dispatch("loadedTarget", $spa);
    },
    changePage(enName) {
      let name = enName.split(' ')[0].toLowerCase();

      this.$store.commit('changePage', name);
      this.loaderTrigger();
    }
  }
}
</script>
