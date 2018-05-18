
const sessionSto = () =>{
    let hotels = JSON.parse(sessionStorage.getItem('session'));
    console.log(hotels);
    // const container = document.getElementById("list");
    // let newItem = document.createElement('li');
    // newItem.textContent = 'nepe';

    // container.appendChild(newItem);
    let element  = document.createElement('li');
    element.textContent = 'Hola';
    let container = document.querySelector('.content');
    container.appendChild(element);
    console.log(element);
} 
const drawDataList = e => {
    let container = document.querySelector('.content'),
    allData = '',
    hotels = e.scrapped; 
    sessionStorage.setItem('session',JSON.stringify(hotels));
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
    idLogin = e.scrapped;
    for(let idLog of idLogin){
        console.log(idLogin[0].id);
    //  let link = idLogin[1].link;
    }
}
// // draw  in the app
  // init ajaxApi
  const searchHotel = (inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens,res) =>{
    let api = new XMLHttpRequest();
    api.open('POST','http://reserveahora.herokuapp.com/api/v1/scrap');
    api.setRequestHeader('Content-Type','application/json');
    sessionStorage.clear('session');
    api.onprogress = () =>{
        console.log('On load');
    }
    api.onload = () => {
        if (api.status === 200) {
            let response = JSON.parse(api.responseText);
            drawDataList(response);
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
$(function(){
    $( "#checkin-app" ).datepicker();
  });
  $(function(){
    $( "#checkout-app" ).datepicker();
  });

  $( document ).ready(function() {
    $("#checkin-app").datepicker({    
        defaultDate: "+0",              
        dateFormat: "mm-dd-yy",
        minDate: "+0",
        onSelect: function (dateText, inst) {
            var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
         d.setDate(d.getDate() + 1);
            $("#checkout-app").val($.datepicker.formatDate(inst.settings.dateFormat, d));
            showNew();
       },
      
        onClose: function (selectedDate) {
            $("#checkout-app").datepicker("option", "minDate", selectedDate);    
        }
      });
      $("#checkout-app").datepicker({    
        defaultDate: "+0",              
        dateFormat: "mm-dd-yy",
        minDate: "+0",
        onSelect: function (dateText, inst) {
            var d = $.datepicker.parseDate(inst.settings.dateFormat, dateText);
         d.setDate(d.getDate() + 1);
            $("#checkout-app").val($.datepicker.formatDate(inst.settings.dateFormat, d));
            showNew();
       },
      
        onClose: function (selectedDate) {
            $("#checkout-app").datepicker("option", "minDate", selectedDate);    
        }
      });
  });
  sessionSto();