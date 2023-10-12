export default class Weather {
    constructor() {
      this.getLocation();
    }
  
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.showPosition.bind(this), 
        this.showError.bind(this)   
        );
    }
  
    showPosition(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      console.log(lat, lng);
      this.getWeather(lat, lng);
    }
  
    getWeather(lat, lng) {
      let url= `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=12d97956d95243be85758969f0a7fb99`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("p:nth-of-type(2)").innerHTML = document.querySelector("p:nth-of-type(2)").innerHTML+ " " + data.data[0].temp + " °C";
        }).catch(error => {
            console.log(error);
        });
    }
  
    showError(error) {
      console.log(error);
    }
  }
  