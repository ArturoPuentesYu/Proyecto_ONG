import Carousel from 'react-bootstrap/Carousel';

/*<Carousel>
        {props.imagenes.map((elemento: any)=><Carousel.Item><img src={elemento.url} alt={elemento.alt}></img></Carousel.Item>)}
    </Carousel>*/
function CarouselC(props: any) {
    const arr: Array<> = props.imagenes;
  return (
    {arr}
  );
}

export default CarouselC;