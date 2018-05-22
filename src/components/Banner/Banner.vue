<template>
<div>
	<div class="container-appBga">
		<div class="div-calendar">
			<form action="" class="form-app" method="POST">
				<h3 class="h3-info">Encuentra ofertas para todas las temporadas</h3>
				<p class="p-info">Desde casas acogedoras hasta modernos apartamentos</p>
				<div class="div-father-input-from">
					<input type="search" id="city-app" class="form-control" placeholder="¿Adónde vas?" v-model="queryString"
					v-on:keyup="getResults()" >
					<div class="panel-footer" v-if="citys.lenght">
						<ul class="list-group">
							<li class="list-group-item" v-for="city in citys" v-bind:key="city.city">{{ city.city}}</li>
						</ul>
					</div>
				</div>
				<div class="div-father-dates">
					<input type="date" id="checkin-app" class="input-date calendar Datepicker" placeholder="Check In">
					<input type="date" id="checkout-app" class="input-date calendar Datepicker" placeholder="Check Out" >
				</div>
				<div class="div-father-dates">
					<input type="number" id="rooms-app" class="input-adults" placeholder="Habitaciones" >
					<input type="number" id="adults-app" class="input-adults" placeholder="Adultos"  >
					<input type="number" id="childrens-app"  class="input-childrens" placeholder="Niños">
				</div>
				<a v-bind:href="link" id="sendData"  class="button-send" onclick="getEventList()">Enviar</a>
				<div><img src="../../../src/images/call.png" alt="" class="call-center"></div>
			</form>
			<div class="div-sessionImage">
				<div class="div-content-slider">
					<iframe width="280" height="280" src="https://www.youtube.com/embed/7hG1GkrJGqw?list=PLoR8Vv9f-WDJ2zpIpEUdCCuXY8uDraWrr" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
				<div class="div-contenedorSession">
					<img src="../../../src/images/Reserve-Ahora.png" alt="">
				</div>
			</div>
		</div>
	</div>

</div>
	
</template>
<script>
import listApp from '../List/List'
export default {
  name: 'bannerApp',
  components: {
	listApp
  },
  data(){
	  return{
		  queryString: '',
		  citys: [],
		  link:'/listApp'
	  }
  },
  methods:{
	  getResults(){
		  this.citys = [] ;
			if(this.queryString.length > 2){
				axios.get('https://23b30db7.ngrok.io/api/v1/cities',{params: {queryString: this.queryString}}).then(response =>{
			  		response.data.forEach((city)=>{
				  	this.citys.push(city);
				  });
				});
			}
	  }
  }
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.h3-info{font-family: 'Baloo';}
.p-info{font-family: 'Open sans';}
.container-appBga{
	width:100%;
	display: flex;
	/* background-image:url('../../../src/images/background.jpg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed; */
	background-color:#e6ecf0;
	height:50vh !important;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.div-calendar{
	background:#001371;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	display: flex;
	padding:2vh;
	justify-content: center;
	align-items: center;
	margin-top:10vh;
	position: absolute;
	width:60%;
	height: 40vh;
	color: white;
}
	.wrap{
		background:#ecf0f1;
	}
	.input-from{
		background:#ecf0f1;
		border:none;
		/* border:3px solid silver; */
		color: white;
		width:100%;
		font-family: 'Baloo';
		outline: none;
		padding: 10px;
		height: 5vh;
		color: #555;
		transition: .2s all ease;
	}
	.input-from:active,.input-from:focus{
		background:#ecf0f1;
		width:100%;
		padding-left: 3vh;
		transition: .2s all ease-in-out;
	}
	.form-app{
		display: flex;
		width:85%;
		justify-content: space-around;
		flex-direction: column;	
	}
	.div-father-dates{
		display: flex;
		justify-content: space-between;
		width:100%;
		margin-top: 2vh;
		margin-bottom: 2vh;
		align-items: center;
	}
	.div-father-input-from{
		width:100%;
	}
	.input-date,.input-childrens,.input-adults{
		background:#ecf0f1;
		width: 100%; 
		height: 5vh;
		border: none;
		font-family: 'Baloo';
		outline: none;
		color: #555;
		padding:0px 2vh;
		border-right:10px solid #001371;
	}
	.button-send{
		background: #ff0000;
		width: 25%;
		height: 5vh;
		border: none;
		font-family: 'Baloo';
		font-size:17px;
		color: white;
	}
	.div-sessionImage{width: 50%;}
	.div-sessionImage img{
		margin-top: -25.5vh;
		position: absolute;
		width:418px;
		height: auto;
	}
	.call-center{
		position: absolute;
		margin-top: -52.3vh;
		z-index: 1000;
		margin-left: 20vh;
	}
	.div-content-slider iframe{
		position: absolute;
		z-index: 1;
		margin:-18vh 8.8vh;
		border-radius: 50%;
	}
</style>
