<template>
  <main id="main" class="main">
    <Header></Header>
    <div class="content">
      <Profile></Profile>
      <Archive></Archive>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from '@/components/modules/Header'
import Footer from '@/components/modules/Footer'
import Profile from '@/components/modules/Profile'
import Archive from '@/components/modules/Archive'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Profile,
    Archive
  }
}
</script>