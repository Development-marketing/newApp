<template>
    <div id="header">
        <!-- Top wrapper -->
		<div class="header-app">
            <div class="father-logo">
                <router-link to="/"><img src="../../../src/images/logo.png" alt=""></router-link>
            </div>
            <div class="div-father-items">
                <div class="dropdown">
                    <button class="dropbtn">COP</button>
                    <div class="dropdown-content">
                        <a href="#">€ euro</a>
                        <a href="#">mxn</a>
                        <a href="#">£ libra</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="#"><div class="div-countryImg"></div></a>
                    </button>
                    <div class="dropdown-content">
                        <a href="#"><div class="div-countryImgUsa"></div></a>
                        <a href="#"><div class="div-countryAle"></div></a>
                        <a href="#"><div class="div-countryImgPor"></div></a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <a href="#"><a href="#" class="a-user"><i class="fas fa-user"></i></a></a>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Ingresar</a>
                        <a href="#">Regitrar</a>
                    </div>
                </div>
                <h4 class="h4-login">Tu cuenta</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'headerApp',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-app{
    background: white;
    border-bottom:2px solid #cee2f2;
    height:7vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
	justify-content: space-around;
	align-items: center;
    transition: .5s all ease-in-out;
}
.div-father-items{
    width:23%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:7vh;
}
.father-logo img{
    width:250px;
    height:auto;
    font-family: 'Baloo';
}
/* Dropdown Button */
.dropbtn {
    background-color:transparent;
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: 0.5s all;
    transform-origin: 50% 0%;
    overflow: hidden;
    color: #777;
    font-family: 'Baloo';
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 60px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    z-index: 1;
    font-family: 'Open Sans';
    text-align: center;
    font-weight: bold;
}
/* Links inside the dropdown */
.dropdown-content a {
    color: #555;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-weight: bold;
}
.a-user{
    background: #4caf50;
    color: white;
    width:35px;
    padding: 10px;
    height:auto;
    position: absolute;
    margin-top: -2vh;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {color: #555;}
.h4-login{
    margin-left:1vh;
    color: #777;
    font-family: 'Baloo';
}
.div-countryImg,.div-countryImgUsa,.div-countryAle,.div-countryImgPor{
    background: red;
    width:22px;
    height:22px;
    border-radius: 50%;
    background-image: url("../../../src/images/co.png");
    background-size: cover;
}
.div-countryImgUsa{background-image: url("../../../src/images/usa.png");}
.div-countryAle{background-image: url("../../../src/images/ale.png");}
.div-countryImgPor{background-image: url("../../../src/images/po.png");}
</style>
