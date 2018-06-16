<template>
  <div class="profile-spa">
    <div class="profile-spa-btn--prev">
      <router-link to="/">돌아가기</router-link>
    </div>
    <div class="profile-spa-cover">
      <div class="profile-spa-cover--image" :style="{backgroundImage: `url('${cover}')`}"></div>
      <h1 class="h">{{en}}</h1>
    </div>
    <div class="profile-image profile-image--small">
      <img :src="`${profile}`" alt="">
    </div>
    <section class="profile-spa-section">
      <template v-for="(week, k) in weeks">
        <h2 v-if="k+1 == 1" class="h">1 Week - 개인성향 검사</h2>
        <h2 v-else-if="k+1 == 2" class="h">2 Week - 자신의 인생 그래프</h2>
        <h2 v-else-if="k+1 == 3" class="h">3 Week - 자신의 인생 그래프</h2>
        <h2 v-else-if="k+1 == 4" class="h">4 Week - 자신의 인생 그래프</h2>
        <img v-for="v in week.image" :src="v" alt="">
      </template>
    </section>
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
    }
  }
</script>