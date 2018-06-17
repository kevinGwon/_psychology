<template>
  <div class="archive">
    <h1 class="h">Our archive</h1>
    <ul class="archive-list" v-masonry transition-duration="0.3s" item-selector="li">
      <li v-masonry-tile v-for="list in lists">
        <span :style="{backgroundImage: `url('${list}')`}"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  data() {
    return {
      lists: this.$store.state.archiveList
    }
  }
}
</script>