function iniciarMap(){
    var coord = {lat:19.9889596 ,lng: -102.7170203};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}