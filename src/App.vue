<template>
  <div id="app" class="app">  
    <transition name="main">
      <router-view v-show="!isLoader"></router-view>
    </transition>      
    <Loader v-if="isLoader || isArchive"></Loader>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from "@/components/modules/Loader"

export default {
  name: 'App',
  components: { Loader },
  computed: {
    ...mapState(['isLoader', 'isArchive'])
  },  
  mounted() {

  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>