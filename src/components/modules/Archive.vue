<template>
  <div class="archive" ref="archive">
    <h1 class="h">Our archive</h1>
    <ul class="archive-list" v-masonry transition-duration="0.25s" item-selector="li">
      <li v-masonry-tile v-for="(list, length) in lists" v-if="length < archiveLength">
        <span :style="{backgroundImage: `url('${list}')`}"></span>
      </li>
    </ul>
    <div class="func">
      <button type="button" class="btn btn-more" :class="{'is-loading':isArchive, 'is-nomore': archiveLength >= lists.length}" ref="more"><span class="a11y">사진 더보기</span></button>
    </div>
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
    let $archive = this.$refs.archive,
        $btn = this.$refs.more

    // window.addEventListener('scroll', () => {
    //   let top = window.pageYOffset + window.screen.height,
    //       achiveTop = $archive.offsetTop + $archive.clientHeight

    //   if(top > achiveTop && this.$refs.archive != undefined) {
    //     if(this.isArchive || this.lists.length < this.archiveLength) return
    //     this.$store.commit('addImage', true)
    //     setTimeout(()=>{
    //       this.$store.dispatch('loaderTrigger')
    //     }, 500)
    //   }
    // }, false);
    $btn.addEventListener('click', (e) => {
      e.stopPropagation()

      if(this.archiveLength >= this.lists.length) {
        return false;
      } else {
        this.$store.commit('addImage', true)
        setTimeout(()=>{
          this.$store.dispatch('loaderTrigger')
        }, 500)

      }

    })
  },
  computed: {
    ...mapState(['archiveLength','isArchive', 'isLoader'])
  },
  methods: {
    test(length) {
      console.log(length)
    }
  }
}
</script>