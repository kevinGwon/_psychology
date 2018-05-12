<template>
  <div id="app" class="app">
    <cover></cover>
    <profile></profile>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Profile from '@/components/Profile'

export default {
  name: 'App',
  components: {
  	Cover,
  	Profile
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>
