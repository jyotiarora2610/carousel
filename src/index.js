import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Carousel</h1>
`;

class Carousel {
  constructor() {
    this.carousel = document.getElementById("carousel");
  }
}

const cr = new Carousel();
