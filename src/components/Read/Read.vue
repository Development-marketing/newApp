<template>
	<div class="div-contentNewsLetter">
		<h1>Ofertas exclusivas en tu email</h1>
		<div class="div-formContent">
			<form action="">
				<input type="text" placeholder="Tu correo">
				<button>Quiero recibirlas</button>
			</form>
		</div>
	</div>
</template>
<script>
export default {
    name: 'readApp',
    components: {
  }
}
</script>
<style scoped>
	/* newsLetterContent */
	.div-contentNewsLetter{
		background: #001371;
		width: 100%;
		color: white;
		font-family: 'Baloo';
		height: 20vh;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.div-contentNewsLetter h1{color: white;font-family: 'Baloo';}
	.div-formContent{width: 100%;margin-top: 2vh;}
	.div-formContent input{
		background: white;
		height: 6vh;
		width:20%;
		padding-left:1vh; 
	}
	.div-formContent button{
		background: #ff0000;
		border: none;
		width: 15%;
		height: 6vh;
		color: white;
	}
</style>
