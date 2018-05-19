<template>
  <div class="profile">
    <h1 class="profile-title">Members</h1>
    <ul class="profile-names">
      <li><button type="button">김미림</button></li>
      <li><button type="button">이다은</button></li>
      <li><button type="button">김영준</button></li>
      <li><button type="button">임지원</button></li>
      <li><button type="button">김상윤</button></li>
      <li><button type="button">이민지</button></li>
      <li><button type="button">권승곤</button></li>
    </ul>
    <ul class="profile-image-list">
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/mirim/profile.jpg" alt="">
        </router-link>        
        <span></span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/daeun/profile.jpg" alt="">
        </router-link>        
        <span></span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/youngjun/profile.jpg" alt="">
        </router-link>        
        <span></span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/jiwon/profile.jpg" alt="">
        </router-link>        
        <span></span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/sangyoun/profile.jpg" alt="">
        </router-link>        
        <span></span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/minji/profile.jpg" alt="">
        </router-link>        
        <span>Amor vincit omnia</span>
      </li>
      <li>
        <router-link to="/Seunggon" @click.native="routerToggle" class="profile-image">
          <img src="/psychology/image/members/seunggon/profile.jpg" alt="">
        </router-link>        
        <span>한사람의 올바른 신념은<br> 수많은 사람의 행동을 변화시킨다.</span>
      </li>
    </ul>
  </div>
</template>

<script>
import 'slick-carousel'

export default {

  data() {
    return {}
  },
  mounted() {
    let $namesSlider = $('.profile-names'),
    $imagesSlider = $('.profile-image-list');

    $namesSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,			
      centerMode: true,
      arrows: false,
      asNavFor: '.profile-image-list',
      focusOnSelect: true
    });
    $imagesSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,			
      centerMode: true,
      arrows: false,
      adaptiveHeight: true,
      asNavFor: '.profile-names'
    });		
  },
  methods: {
    routerToggle() {
      this.$eventBus.$emit('routerToggle', true)
    }
  }
}
</script>