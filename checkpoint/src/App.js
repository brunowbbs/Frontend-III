import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Social from "./components/Social";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Header />
      <Projects />
      <Social />
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK8Cj7HPEpyW-E9nO2PPWlf8-L9s9ulf2HRtpegwC1KhuCjGk4LSnRUxo1hz0hBiJ1h4&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK8Cj7HPEpyW-E9nO2PPWlf8-L9s9ulf2HRtpegwC1KhuCjGk4LSnRUxo1hz0hBiJ1h4&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default App;
