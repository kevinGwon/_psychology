<template>
  <main id="main" class="main">
    <Header></Header>
    <div class="content">
      <Profile></Profile>
      <Archive></Archive>
    </div>
    <Footer></Footer>
    <Loader></Loader>
  </main>
</template>

<script>
import Header from '@/components/modules/Header'
import Footer from '@/components/modules/Footer'
import Profile from '@/components/modules/Profile'
import Archive from '@/components/modules/Archive'
import Loader from '@/components/modules/Loader'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Profile,
    Archive,
    Loader
  }
}
</script>