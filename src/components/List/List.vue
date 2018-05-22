<template>
    <div>
        <header-app></header-app>
		<div class="content">
		</div>
		<!-- <ul id="list">
			<li>Hola</li>
		</ul> -->
    	<div class="container breadcrub">
	    <div>
			<a class="homebtn left" href="#"></a>
			<div class="left">
				<ul class="bcrumbs">
					<li>/</li>
					<li><a href="#">Hotels</a></li>
					<li>/</li>
					<li><a href="#">U.S.A.</a></li>
					<li>/</li>					
					<li><a href="#" class="active">New York</a></li>					
				</ul>				
			</div>
			<a class="backbtn right" href="#"></a>
		</div>
		<div class="clearfix"></div>
		<div class="brlines"></div>
	    </div>	
        
                	<!-- CONTENT -->
	<div class="container">
		<div class="container pagecontainer offset-0">	

			<!-- FILTERS -->
			<div class="col-md-3 filters offset-0">
				<!-- END OF BOOK FILTERS -->	
				<div>
                <form action="" class="form-app" method="POST">
                    <h3 class="h3-info">Buscar</h3>
                    <p class="p-info">Desde casas acogedoras hasta modernos apartamentos</p>
                    <div class="div-father-input-from">
                        <input type="text" id="city-app" class="form-control" placeholder="¿Adónde vas?">
                    </div>
                    <div class="div-father-dates">
                        <input type="date" id="checkin-app" class="input-date" placeholder="Check In">
                        <input type="date" id="checkout-app" class="input-date" placeholder="Check Out" >
                    </div>
                    <div class="div-father-dates">
                        <input type="number" id="rooms-app" class="input-adults" placeholder="Habitaciones" >
                        <input type="number" id="adults-app" class="input-adults" placeholder="Adultos"  >
                        <input type="number" id="childrens-app"  class="input-childrens" placeholder="Niños">
                    </div>
                    <button type="button" id="sendData"  class="button-send" onclick="getEventList()">Enviar</button>
			    </form>
                </div>
				<div class="line2"></div>
				
				<div class="padding20title"><h3 class="opensans dark">Filtros:</h3></div>
				<div class="line2"></div>
				

				<!-- Star ratings -->	
				<button type="button" class="collapsebtn" data-toggle="collapse" data-target="#collapse1">
				  Tú presupuesto <span class="collapsearrow"></span>
				</button>

				<div id="collapse1" class="collapse in">
					<div class="hpadding20">
						<div class="checkbox">
                            <div class="div-priceApp">
                                <label>
                                    <input type="text" placeholder="$"><img src="images/filter-rating-5.png" class="imgpos1" alt=""/> Desde
                                </label>
                                <label>
                                    <input type="text" placeholder="$"><img src="images/filter-rating-5.png" class="imgpos1" alt=""/>Hasta
                                </label>
                            </div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
				<!-- End of Star ratings -->	
				
				<div class="line2"></div>
				
				<!-- Price range -->					
				<button type="button" class="collapsebtn" data-toggle="collapse" data-target="#collapse2">
				  Price range <span class="collapsearrow"></span>
				</button>
					
				<div id="collapse2" class="collapse in">
					<div class="padding20">
						<div class="layout-slider wh100percent">
						<span class="cstyle09"><input id="Slider1" type="slider" name="price" value="400;700" /></span>
						</div>
					</div>
				</div>
				<!-- End of Price range -->	
				
				<div class="line2"></div>
				
				<!-- Acomodations -->		
				<button type="button" class="collapsebtn" data-toggle="collapse" data-target="#collapse3">
				  Filtros por estrellaS<span class="collapsearrow"></span>
				</button>				
				
				<div id="collapse3" class="collapse in">
					<div class="hpadding20">
						<div class="radio">
						  <label>
							<input type="radio" name="optionsRadios2" id="Acomodation1" value="option1" checked>
							1
						  </label>
						</div>
						<div class="radio">
						  <label>
							<input type="radio" name="optionsRadios2" id="Acomodation2" value="option2">
							2
						  </label>
						</div>
						<div class="radio">
						  <label>
							<input type="radio" name="optionsRadios2" id="Acomodation3" value="option3">
							3
						  </label>
						</div>
						<div class="radio">
						  <label>
							<input type="radio" name="optionsRadios2" id="Acomodation4" value="option4">
							4
						  </label>
						</div>
						<div class="radio">
						  <label>
							<input type="radio" name="optionsRadios2" id="Acomodation5" value="option5">
							5
						  </label>
						</div>
					</div>	
					<div class="clearfix"></div>					
				</div>
				<!-- End of Acomodations -->
				
				<div class="line2"></div>
				
				<!-- Hotel Preferences -->
				<button type="button" class="collapsebtn last" data-toggle="collapse" data-target="#collapse4">
				  Comidas <span class="collapsearrow"></span>
				</button>	
				<div id="collapse4" class="collapse in">
					<div class="hpadding20">
						<div class="checkbox">
							<label>
							  <input type="checkbox">Desayuno
							</label>
						</div>
						<div class="checkbox">
							<label>
							  <input type="checkbox">Almuerzo
							</label>
						</div>
						<div class="checkbox">
							<label>
							  <input type="checkbox">Cena
							</label>
						</div>
                        <div class="checkbox">
							<label>
							  <input type="checkbox">Todas las comidas
							</label>
						</div>
					</div>
					<div class="clearfix"></div>						
				</div>	
				<!-- End of Hotel Preferences -->
								<div class="line2"></div>
				
				<!-- Hotel Preferences -->
				<button type="button" class="collapsebtn last" data-toggle="collapse" data-target="#collapse4">
				    Tipo de alojamiento<span class="collapsearrow"></span>
				</button>	
				<div id="collapse4" class="collapse in">
					<div class="hpadding20">
						<div class="checkbox">
							<label>
							  <input type="checkbox">Hotel
							</label>
						</div>
						<div class="checkbox">
							<label>
							  <input type="checkbox">Hostal
							</label>
						</div>
						<div class="checkbox">
							<label>
							  <input type="checkbox">Apartamento
							</label>
						</div>
						<div class="checkbox">
							<label>
							  <input type="checkbox">Apartahotel
							</label>
						</div>

					</div>
					<div class="clearfix"></div>						
				</div>	
				<!-- End of Hotel Preferences -->
				<div class="line2"></div>
				<div class="clearfix"></div>
				<br/>
				<br/>
				<br/>
				
				
			</div>
			<!-- END OF FILTERS -->
			
			<!-- LIST CONTENT-->
			<div class="rightcontent col-md-9 offset-0">
			
				<div class="hpadding20">
					<!-- Top filters -->
					<div class="topsortby">
						<div class="col-md-4 offset-0">
								


						</div>			
						<div class="col-md-4">
							<div class="w50percent">
								<div class="wh90percent">
									<select class="form-control mySelectBoxClass ">
									  <option selected>Name</option>
									  <option>A to Z</option>
									  <option>Z to A</option>
									</select>
								</div>
							</div>
							<div class="w50percentlast">
								<div class="wh90percent">
									<select class="form-control mySelectBoxClass ">
									  <option selected>Price</option>
									  <option>Ascending</option>
									  <option>Descending</option>
									</select>
								</div>
							</div>					
						</div>
						<div class="col-md-4 offset-0">
							<button class="popularbtn left">Most Popular</button>
							<div class="right">
								<button class="gridbtn" onClick="window.open('list2.html','_self');">&nbsp;</button>
								<button class="listbtn active">&nbsp;</button>
								<button class="grid2btn" onClick="window.open('list3.html','_self');">&nbsp;</button>
							</div>
						</div>
					</div>
					<!-- End of topfilters-->
				</div>
				<!-- End of padding -->
				
				<br/><br/>
				<div class="clearfix"></div>
				

				<div class="itemscontainer offset-1">
			
	
					<div class="offset-2">
						<div class="col-md-4 offset-0">
							<div class="listitem2">
								<a href="images/items/item7.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="../../../src/images/background.jpg" alt=""/></a>
								<div class="liover"></div>
							</div>
						</div>
						<div class="col-md-8 offset-0">
							<div class="itemlabel3">
								<div class="labelright">
									<img src="images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
									<img src="images/user-rating-5.png" width="60" alt=""/><br/>
									<span class="size11 grey">18 Reviews</span><br/><br/>
									<span class="green size18"><b>$36.00</b></span><br/>
									<span class="size11 grey">avg/night</span><br/><br/><br/>
									<form action="details.html">
									 <button class="bookbtn mt1" type="submit">Ver habitaciones</button>	
									</form>			
								</div>
								<div class="labelleft2">			
									<router-link :to="'/detailsApp'">Mabely Grand Hotel</router-link>
									<p class="grey">
                                    <h3>Medellín</h3>
                                    <p>Direccion</p>
                                    <p>Calificacion</p>
									<ul class="hotelpreferences">
										<li class="icohp-internet"></li>
										<li class="icohp-air"></li>
										<li class="icohp-pool"></li>
										<li class="icohp-childcare"></li>
										<li class="icohp-fitness"></li>
										<li class="icohp-breakfast"></li>
										<li class="icohp-parking"></li>
										<li class="icohp-pets"></li>
										<li class="icohp-spa"></li>
									</ul>
									
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
					<div class="offset-2"><hr class="featurette-divider3"></div>
					
					<div class="offset-2">
						<div class="col-md-4 offset-0">
							<div class="listitem2">
								<a href="images/items/item11.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="../../../src/images/background2.jpg" alt=""/></a>
								<div class="liover"></div>
								<a class="fav-icon" href="#"></a>
								<a class="book-icon" href="details.html"></a>
							</div>
						</div>
						<div class="col-md-8 offset-0">
							<div class="itemlabel3">
								<div class="labelright">
									<img src="images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
									<img src="images/user-rating-5.png" width="60" alt=""/><br/>
									<span class="size11 grey">18 Reviews</span><br/><br/>
									<span class="green size18"><b>$39.00</b></span><br/>
									<span class="size11 grey">avg/night</span><br/><br/><br/>
									<form action="details.html">
									 <button class="bookbtn mt1" type="submit">Book</button>	
									</form>			
								</div>
								<div class="labelleft2">			
									<b>Mabely Grand Hotel</b><br/><br/><br/>
									<p class="grey">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
									Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>
									<ul class="hotelpreferences">
										<li class="icohp-hairdryer"></li>
										<li class="icohp-garden"></li>
										<li class="icohp-grill"></li>
										<li class="icohp-kitchen"></li>
										<li class="icohp-bar"></li>
										<li class="icohp-living"></li>
										<li class="icohp-tv"></li>
									</ul>
									
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
					<div class="offset-2"><hr class="featurette-divider3"></div>
					
					<div class="offset-2">
						<div class="col-md-4 offset-0">
							<div class="listitem2">
								<a href="images/items/item1.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item1.jpg" alt=""/></a>
								<div class="liover"></div>
								<a class="fav-icon" href="#"></a>
								<a class="book-icon" href="details.html"></a>
							</div>
						</div>
						<div class="col-md-8 offset-0">
							<div class="itemlabel3">
								<div class="labelright">
									<img src="images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
									<img src="images/user-rating-5.png" width="60" alt=""/><br/>
									<span class="size11 grey">18 Reviews</span><br/><br/>
									<span class="green size18"><b>$45.00</b></span><br/>
									<span class="size11 grey">avg/night</span><br/><br/><br/>
									<form action="details.html">
									 <button class="bookbtn mt1" type="submit">Book</button>	
									</form>			
								</div>
								<div class="labelleft2">			
									<b>Mabely Grand Hotel</b><br/><br/><br/>
									<p class="grey">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
									Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>
									<ul class="hotelpreferences">
										<li class="icohp-fridge"></li>
										<li class="icohp-microwave"></li>
										<li class="icohp-washing"></li>
										<li class="icohp-roomservice"></li>
										<li class="icohp-safe"></li>
										<li class="icohp-playground"></li>
										<li class="icohp-conferenceroom"></li>
									</ul>
									
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
					<div class="offset-2"><hr class="featurette-divider3"></div>
					
					<div class="offset-2">
						<div class="col-md-4 offset-0">
							<div class="listitem2">
								<a href="images/items/item5.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item5.jpg" alt=""/></a>
								<div class="liover"></div>
								<a class="fav-icon" href="#"></a>
								<a class="book-icon" href="details.html"></a>
							</div>
						</div>
						<div class="col-md-8 offset-0">
							<div class="itemlabel3">
								<div class="labelright">
									<img src="images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
									<img src="images/user-rating-5.png" width="60" alt=""/><br/>
									<span class="size11 grey">18 Reviews</span><br/><br/>
									<span class="green size18"><b>$49.00</b></span><br/>
									<span class="size11 grey">avg/night</span><br/><br/><br/>
									<form action="details.html">
									 <button class="bookbtn mt1" type="submit">Book</button>	
									</form>			
								</div>
								<div class="labelleft2">			
									<b>Mabely Grand Hotel</b><br/><br/><br/>
									<p class="grey">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
									Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>
									<ul class="hotelpreferences">
										<li class="icohp-internet"></li>
										<li class="icohp-air"></li>
										<li class="icohp-pool"></li>
										<li class="icohp-childcare"></li>
										<li class="icohp-fitness"></li>
										<li class="icohp-breakfast"></li>
										<li class="icohp-parking"></li>
										<li class="icohp-pets"></li>
										<li class="icohp-spa"></li>
									</ul>
									
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
					<div class="offset-2"><hr class="featurette-divider3"></div>
					
					<div class="offset-2">
						<div class="col-md-4 offset-0">
							<div class="listitem2">
								<a href="images/items/item2.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item2.jpg" alt=""/></a>
								<div class="liover"></div>
								<a class="fav-icon" href="#"></a>
								<a class="book-icon" href="details.html"></a>
							</div>
						</div>
						<div class="col-md-8 offset-0">
							<div class="itemlabel3">
								<div class="labelright">
									<img src="images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
									<img src="images/user-rating-5.png" width="60" alt=""/><br/>
									<span class="size11 grey">18 Reviews</span><br/><br/>
									<span class="green size18"><b>$49.00</b></span><br/>
									<span class="size11 grey">avg/night</span><br/><br/><br/>
									<form action="details.html">
									 <button class="bookbtn mt1" type="submit">Book</button>	
									</form>									
								</div>
								<div class="labelleft2">			
									<b>Mabely Grand Hotel</b><br/><br/><br/>
									<p class="grey">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
									Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br/>
									<ul class="hotelpreferences">
										<li class="icohp-fridge"></li>
										<li class="icohp-microwave"></li>
										<li class="icohp-washing"></li>
										<li class="icohp-roomservice"></li>
										<li class="icohp-safe"></li>
										<li class="icohp-playground"></li>
										<li class="icohp-conferenceroom"></li>
									</ul>
									
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
					<div class="offset-2"><hr class="featurette-divider3"></div>
					

				</div>	
				<!-- End of offset1-->		

				<div class="hpadding20">
				
					<ul class="pagination right paddingbtm20">
					  <li class="disabled"><a href="#">&laquo;</a></li>
					  <li><a href="#">1</a></li>
					  <li><a href="#">2</a></li>
					  <li><a href="#">3</a></li>
					  <li><a href="#">4</a></li>
					  <li><a href="#">5</a></li>
					  <li><a href="#">&raquo;</a></li>
					</ul>

				</div>

			</div>
			<!-- END OF LIST CONTENT-->
			
		

		</div>
		<!-- END OF container-->
	</div>
	<!-- END OF CONTENT -->
    <footerApp></footerApp>
    </div>
</template>
<script>
import headerApp from '../Header/Header'
import footerApp from '../Footer/Footer'
export default {
    name: 'ListApp',
    components: {
    headerApp,
    footerApp
  }
}
</script>
<style scoped>
	.wrap{
		background:#ecf0f1;
	}
	.input-from{
		background:#ecf0f1;
		border:none;
		/* border:3px solid silver; */
		color: white;
		width:90%;
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
        background: #001371;
		width:100%;
        color: white;
		justify-content: space-around;
		flex-direction: column;	
	}
    .form-app h3,.form-app p{
        margin-left:2vh;
        font-family: 'Baloo';
    }
    .form-app p{font-family: 'Roboto';}
	.div-father-dates{
		display: flex;
        flex-direction: column;
		justify-content: space-between;
		width:100%;
		margin-top: 2vh;
		margin-bottom: 2vh;
		align-items: center;
	}
	.div-father-input-from{
		width:90%;
        margin: 0 auto;
	}
	.input-date,.input-childrens,.input-adults{
		background:#fff;
        margin: 1vh 0px 0px 0px;
		width:90%; 
		height: 5vh;
		border: none;
		font-family: 'Baloo';
		outline: none;
		color: #555;
		padding:0px 2vh;
	}
	.button-send{
		background: #ff0000;
		width: 100%;
		height: 5vh;
		border: none;
		font-family: 'Baloo';
		font-size:17px;
		color: white;
	}
    .div-priceApp{
        display: flex;
        justify-content:space-around;
        align-items: center;
        width: 100%;
    }
    .div-priceApp input{
        width:100%;
        height: 4vh;
        margin-left: -3vh;
        background: white;
        border: none;
    }
</style>


