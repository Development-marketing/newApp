<template>
    <div>
        <div class="div-footerApp">
            <div class="divContentLogo">
                <img src="../../../src/images/reserve.png" alt="">
            </div>
            <div class="divContentItems">
                <div>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                </div>
                <div>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                </div>
                <div>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>
                    <a href="#">Hola</a>                    
                </div>
                <div>
                </div>                
            </div>
        </div>
        <div class="div-social">
            <div class="div-subSocial">
                <a href="#" class="social1b"><img src="../../../static/images/icon-facebook.png" alt=""/></a>
				<a href="#" class="social2b"><img src="../../../static/images/icon-twitter.png" alt=""/></a>
				<a href="#" class="social3b"><img src="../../../static/images/icon-gplus.png" alt=""/></a>
				<a href="#" class="social4b"><img src="../../../static/images/icon-youtube.png" alt=""/></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'footerApp',
  components: {
  }
}
</script>
<style scoped>
.div-footerApp{
    width: 100%;
    height: 35vh;
    padding-bottom: 5vh;
    display: flex;
}
.divContentLogo{
    width: 20%;
    height: 30vh;
}
.divContentLogo img{
    position: absolute;
    width: 400px;
    opacity: .70;
    height: auto;
    z-index: 1;
}
.divContentItems{width: 70%;display: flex;justify-content:space-between;align-items: center;}
.divContentItems div{width: 24%;;height: 30vh;display: flex;
justify-content:center;align-items: center;flex-direction: column;margin-top:10vh;border-radius:10px;
font-family: 'Open sans';}
.divContentItems a{color: #555;font-size: 17px;}
.div-social{
    width: 100%;
    height:15.3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcfcfc;
}
.divContentItems div:nth-child(4) {
	background-image: url("../../../src/images/background.jpg");
	background-size: cover;
	background-position: center;
}
.div-subSocial{
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
