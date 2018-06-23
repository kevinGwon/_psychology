<template>
  <div class="archive" ref="archive">
    <h1 class="h">Our archive</h1>
    <ul class="archive-list" v-masonry transition-duration="0.3s" item-selector="li">
      <li v-masonry-tile v-for="(list, length) in lists" v-if="length < archiveLength">
        <span :style="{backgroundImage: `url('${list}')`}"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import imagesLoaded from "imagesloaded"
import { VueMasonryPlugin } from 'vue-masonry'

Vue.use(VueMasonryPlugin)

export default {
  data() {
    return {
      lists: this.$store.state.archiveList
    }
  },
  mounted() {
    let $archive = this.$refs.archive

    window.addEventListener('scroll', () => {
      let top = window.pageYOffset + window.screen.height,
          achiveTop = $archive.offsetTop + $archive.clientHeight

      if(top > achiveTop) {
        if(this.isArchive || this.lists.length < this.archiveLength) return
        this.$store.commit('addImage', true)
        this.$store.dispatch('loaderTrigger')
      }
    }, false);
  },
  computed: {
    ...mapState(['archiveLength','isArchive'])
  }
}
</script>