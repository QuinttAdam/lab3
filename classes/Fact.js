export default class Fact {
    constructor() {
      this.getFact();
    }
  
    getFact() {
      let url= `https://cors-anywhere.herokuapp.com/https://uselessfacts.jsph.pl//api/v2/facts/random?language=en`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("text").innerHTML = data.text;
        }).catch(error => {
            console.log(error);
        });
    }
  }
  
