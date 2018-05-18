<template>
	<div class="div-content2">
		<div class="div-slider">
			<img src="../../../src/images/American-Express.png" alt="">
			<img src="../../../src/images/Ath.png" alt="">
			<img src="../../../src/images/Baloto.png" alt="">
			<img src="../../../src/images/Corulla.png" alt="">
			<img src="../../../src/images/Diner.png" alt="">
			<img src="../../../src/images/Master-Card.png" alt="">
			<img src="../../../src/images/PSE.png" alt="">
			<img src="../../../src/images/Tarjeta-Exito.png" alt="">
			<img src="../../../src/images/¨Paypal.png" alt="">
			<img src="../../../src/images/Exito.png" alt="">
			<img src="../../../src/images/Surtimax.png" alt="">
			<img src="../../../src/images/Visa.png" alt="">
		</div>
		<div  class="div-textTravel">
			<h2>Aquí comienza tu viaje</h2>
		</div>
		<div class="div-galleryHotels">
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header2">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header3">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>						
		</div>
				<div class="div-galleryHotels">
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>
			<div class="divCardApp">
				<div class="div-header">
					<div class="div-subhedertext">
						<i class="fas fa-map-marker-alt"></i>
						<h3>Hotel en bogota</h3>
					</div>
				</div>
				<div class="div-footer">
					<p>$1000</p>
				</div>
			</div>						
		</div>
	</div>
</template>

<script>
export default {
  name: 'containerApp',
  components: {
  }
}
</script>
<style scoped>
	/* .content2 */
	.div-content2{
		width: 100%;
		background: #fcfcfc;
		height:100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.div-slider{
		background: #fff;
		width: 80%;
		margin: 0 auto;
		margin-top:10vh;
		height: 9vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.div-slider img{
		width:7%;
		height:auto;
	}
	.div-galleryHotels{
		width: 80%;
		height: auto;
		padding-bottom: 5vh;
		/* background: red; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.divCardApp{
		width: 23%;
		background: #ecf0f1;
		height: 31vh;
		box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	}
	.div-textTravel{width: 80%;text-align: left;}
	.div-textTravel h2{color: #555;font-family: 'Baloo';font-size: 20px;}
	.div-header,.div-header2,.div-header3{
		width: 100%;
		height:26vh;
		background-image: url("../../../src/images/background.jpg");
		background-size: cover;
		background-position: center;
	}
	.div-header2{background-image: url("../../../src/images/background2.jpg");}
	.div-header3{background-image: url("../../../src/images/background2.jpg");}
	.div-footer{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 6vh;
		padding: 10px;
		font-family: 'Baloo';
	}
	.div-subhedertext{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 80%;
		padding: 10px;
	}
	.fa-map-marker-alt{
		margin-right: 1vh;
	}
</style>
