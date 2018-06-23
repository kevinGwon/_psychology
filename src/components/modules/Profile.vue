<template>
  <div class="profile" ref="profile">
    <h1 class="profile-title">Members</h1>
    <ul class="profile-names">
      <li v-for="list in lists"><button type="button">{{list.name}}</button></li>
    </ul>
    <ul class="profile-image-list">
      <li v-for="(list, key, i) in lists">
        <router-link class="profile-image"
          :id="'#page'+i"
          :href="'#page'+i"
          to="/page"
           @click.native.prevent="changePage(list.en)"
          >
          <img :src="list.profile" alt="">
        </router-link>        
        <span v-html="list.motto"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import 'slick-carousel'

export default {
  data() {
    return {
      lists: this.$store.getters.psychologyLists
    }
  },
  computed: {
    ...mapState(['isLoader'])
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
    $imagesSlider.on({
      beforeChange: function(){
        $imagesSlider.find('.slick-slide').removeClass('is-scale');
      },
      afterChange: function(){
        $imagesSlider.find('.slick-current').addClass('is-scale');
      }
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,      
      centerMode: true,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000, 
      asNavFor: '.profile-names'
    });   
  },
  methods: {
    changePage(enName) {
      let name = enName.split(' ')[0].toLowerCase();
      
      this.$store.commit('changePage', name);
    }
  }
}
</script>