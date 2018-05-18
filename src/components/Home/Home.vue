<template>
  <div id="home">
    <header-app></header-app>
    <bannerApp></bannerApp>
    <containerApp></containerApp>
    <readApp></readApp>
    <carouselApp></carouselApp>
    <footerApp></footerApp>
  </div>
</template>
<script>
import headerApp from '../Header/Header'
import bannerApp from '../Banner/Banner'
import footerApp from '../Footer/Footer'
import containerApp from '../Container/Container'
import readApp from '../Read/Read'
import carouselApp from '../Carousel/Carousel'
import listApp from '../List/List'
import detailsApp from '../Details/Details'

export default {
  name: 'Home',
  data () {
    return {
      thebg: false
    }
  },
  components: {
    headerApp,
    bannerApp,
    containerApp,
    readApp,
    carouselApp,
    footerApp,
    listApp,
    detailsApp
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*scroll*/
	/* .content2 */
	.div-content2{
		width: 100%;
		background: #fcfcfc;
		height:100vh;
	}
</style>
