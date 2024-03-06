import { Carousel } from "react-bootstrap";
import './carousel.css';

function CarouselC(props: any) {
    const arr = props.imagenes;

  return(
    <Carousel slide={props.slide} className={props.clases} variant={props.variant}>
      {arr.map((elemento: any, index: number) => 
        (<Carousel.Item key={index} className={props.clases}>
          <img src={elemento.url} alt={elemento.alt} width={props.width} className={props.clases}></img>
        </Carousel.Item>)
      )}
    </Carousel>
  );
}

export default CarouselC;