<template>
	<div class="div-content-filters">
		<div class="div-headerfilters"></div>
		<div class="div-chips">
			<div class="div-column1chip">
					<a href="#">Hoteles en Bogotá</a>
					<a href="#">Hoteles en Medellin</a>
					<a href="#">Hoteles en Cali</a>
					<a href="#">Hoteles en San Andres</a>
					<a href="#">Hoteles en Cartagena</a>
					<a href="#">Hoteles en Santa marta</a>
				</div>
				<div class="div-column1chip">
					<a href="#">Hoteles en Bogotá</a>
					<a href="#">Hoteles en Medellin</a>
					<a href="#">Hoteles en Cali</a>
					<a href="#">Hoteles en San Andres</a>
					<a href="#">Hoteles en Cartagena</a>
					<a href="#">Hoteles en Santa marta</a>
				</div>
				<div class="div-column1chip">
					<a href="#">Hoteles en Bogotá con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Cali</a>
				</div>
				<div class="div-column1chip">
					<a href="#">Hoteles en Bogotá con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Cali</a>
				</div>
				<div class="div-column1chip">
					<a href="#">Hoteles en Bogotá con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Medellin con desayuno</a>
					<a href="#">Hoteles en Cali</a>
				</div>
		</div>
		<div class="div-footerfilters"></div>
	</div>
</template>
<script>
export default {
  name: 'carouselApp',
  components: {
  }
}
</script>
<style scoped>
.div-content-filters{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.div-headerfilters,.div-footerfilters{width: 100%;background:#001371;height: 27vh;display: flex;justify-content: center
	;align-items: center;}
	.div-footerfilters{height:auto;width: 100%;display: flex;justify-content: center;align-items: center;
	flex-direction: column;box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);}
	.div-chips{
		width:70%;
		background: #fff;
		position: absolute;
		height:45vh;
		display: flex;
		box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
		justify-content: center	;
		border-radius: 10px;
		flex-direction: column;
		margin-top: -2vh;
		align-items: center;
	}
	.div-headerChips{
		width:90%;
		padding-left: 5vh;
		height:15vh;
	}
	.div-column1chip{width: 90%;height: auto;margin-bottom: 5vh;}
	.div-column1chip a{width: auto;
		padding: 10px;
		background: #001371;
		color: white;
		border-radius: 20px;
		font-family: 'Baloo';
		font-size: 12px;
	}
	.div-column1chip a:nth-of-type(2n+1) {
  		background: #ecf0f1;
		  color: #555;
	}
	.div-footerfilters{
		background:#ecf0f1;
		width: 100%;
		height: 30vh;
	}
</style>