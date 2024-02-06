import { Carousel } from "react-bootstrap";
import './carousel.css';

function CarouselC(props: any) {
    const arr = props.imagenes;

  return(
    <Carousel>
      {arr.map((elemento: any, index: number) => 
        (<Carousel.Item key={index}>
          <img src={elemento.url} alt={elemento.alt}></img>
        </Carousel.Item>)
      )}
    </Carousel>
  );
}

export default CarouselC;