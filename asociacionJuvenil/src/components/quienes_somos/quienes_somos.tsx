import { Container, Row } from 'react-bootstrap'
import {QUIENES_SOMOS} from './../../data/strings'
import './quienes_somos.css'
import Carousel from '../carousel'

const Quienes_somos = () => {

    return (
      <main>
        <Container fluid='sm'>
            <Row>
                <h1 className='text-center mt-4 mb-4'>Sobre nosotros</h1>
            </Row>
            <Row>
                <section>
                    <p className='justify-content-end' dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.TEXTO_INICIAL}}></p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2 dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.MISION_TITULO}}></h2>
                    <p dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.MISION_TEXTO}}></p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2 dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.VISION_TITULO}}></h2>
                    <p dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.VISION_TEXTO}}></p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2 dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.VALORES_TITULO}}></h2>
                    <p dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.VALORES_TEXTO}}></p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2 dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.RECURSOS_TITULO}}></h2>
                    <p dangerouslySetInnerHTML={{__html: QUIENES_SOMOS.RECURSOS_TEXTO}}></p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2>{QUIENES_SOMOS.COLABORACIONES_TITULO}</h2>
                    /*<Carousel imagenes={QUIENES_SOMOS.COLABORACIONES}></Carousel>
                    {QUIENES_SOMOS.COLABORACIONES.map((colaborador) => 
                        <img src={colaborador.url} alt={colaborador.alt}></img>)}*/
                </section>
            </Row>
        </Container>
        
      </main>
    )
  }
  
  export default Quienes_somos