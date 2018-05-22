

const sessionSto = () =>{
    let hotels = JSON.parse(sessionStorage.getItem('session'));
    console.log(hotels);
    let element  = document.createElement('div');
    element.textContent = 'Hola';
    let container = document.querySelector('.content');
    if(container){
        container.appendChild(element);
        console.log(element);
        for(let hotel of hotels){
            allData = ` 
                <a href="#">${hotel.name}</a>
                <h1>$.${hotel.price}</h1>
                <a href="http://www.booking.com.${hotel.link}">link</a>
                <img src="${hotel.image}"></img>
            `;
            if(container){
                container.insertAdjacentHTML('beforeEnd', allData);
            }
        }
    }
} 

const drawDataList = e => {
    let container = document.querySelector('.content'),
    allData = '',
    hotels = e.scrapped; 
    sessionStorage.setItem('session',JSON.stringify(hotels));
    idLogin = e.scrapped;
    for(let idLog of idLogin){
        console.log(idLogin[0].id);
    //  let link = idLogin[1].link;
    }
    for(let hotel of hotels){
        allData = ` 
            <a href="#">${hotel.name}</a>
            <h1>$.${hotel.price}</h1>
            <a href="https://www.booking.com.${hotel.link}">link</a>
            <img src="${hotel.image}"></img>
        `;
        if(container){
            container.insertAdjacentHTML('beforeEnd', allData);
        }
    }
}
// // draw  in the app
  // init ajaxApi
  const searchHotel = (inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens,res) =>{
    let api = new XMLHttpRequest();
    api.open('POST','https://35fc66a5.ngrok.io/api/v1/scrap');
    api.setRequestHeader('Content-Type','application/json');
    sessionStorage.clear('session');
    api.onprogress = () =>{
        console.log('On load');
    }
    api.onload = () => {
        if (api.status === 200) {
            let response = JSON.parse(api.responseText);
            drawDataList(response);
            sessionSto();
            //   let res = idLogin[0].id;
            console.log(response);
        }
    }
    api.send(JSON.stringify({
    //   "endpoint":"","destiny":{"idcity":"-592318","type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":1,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":""
    "endpoint":{"id":1,"name":"Search","endpoint":"searchresults.es.html?","site_id":"1"},"destiny":{"idcity":"-592318","type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":2,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":"","site":{"id":1,"name":"Booking","domain":"booking.com"}
    }))
  }
  // get data
  const getDataList = () =>{
      let inputCity= document.getElementById('city-app').value,
      inputCheckin= document.getElementById('checkin-app').value,
      inputCheckout= document.getElementById('checkout-app').value,
      inputRooms= document.getElementById('rooms-app').value,
      inputAdults= document.getElementById('adults-app').value,
      inputChildrens= document.getElementById('childrens-app').value;
      return{inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens};
  }
  const getEventList = () =>{ 
        $('#sendData').click(function(e){
            e.preventDefault();
            setTimeout(function(){
                window.location.href = "/listApp"    
                console.log("listo");
            },10000);
        });
      document.getElementById("sendData").addEventListener("click",() =>{
          console.log(getDataList());
          let objectList = getDataList();
          searchHotel(objectList.inputCity,objectList.inputCheckin,objectList.inputCheckout,objectList.inputRooms,objectList.inputAdults,objectList.inputChildrens)
      });
  }
  if(document.getElementById("sendData")){
      getEventList();
  }
// //   searchHotel(); 

sessionSto();