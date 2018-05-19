<template>
  <div class="profile-spa">
    <div class="profile-spa-btn--prev">
      <router-link to="/" @click.native="routerToggle">돌아가기</router-link>
    </div>
    <div class="profile-spa-cover">
      <div class="profile-spa-cover--image" style="background-image:url(/psychology/image/members/seunggon/cover.jpg)"></div>
      <h1 class="h">Seunggon Gwon</h1>
    </div>
    <div class="profile-image profile-image--small">
      <img src="/psychology/image/members/seunggon/profile.jpg" alt="">
    </div>
    <section class="profile-spa-section">
      <h2 class="h">1 Week - 개인성향 검사</h2>
      <img src="/psychology/image/members/seunggon/week-1.jpg" alt="">
      <h2 class="h">2 Week - 자신의 인생 그래프</h2>
      <img src="/psychology/image/members/seunggon/week-1.jpg" alt="">
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
    	 routerToggle() {
        this.$eventBus.$emit('routerToggle', false)
       }
    }
  }
</script>