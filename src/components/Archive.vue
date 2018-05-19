<template>
  <div class="archive">
    <h1 class="h">Our archive</h1>
    <ul class="archive-list" v-masonry transition-duration="0.3s" item-selector="li">
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-01.png);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-02.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-03.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-04.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-05.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-06.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-07.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-08.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-09.jpg);"></span>
      </li>
      <li v-masonry-tile>
        <span style="background-image: url(/psychology/image/archive/archive-10.jpg);"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)
</script>