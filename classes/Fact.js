export default class Fact {
    constructor() {
      this.getFact();
    }
  
    getFact() {

      // go to "https://cors-anywhere.herokuapp.com/corsdemo" and click "Request temporary access to the demo server"
      
      let url= `https://cors-anywhere.herokuapp.com/https://uselessfacts.jsph.pl//api/v2/facts/random?language=en`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("p:nth-of-type(4)").innerHTML = data.text;
        }).catch(error => {
            console.log(error);
        });
    }
  }
  
