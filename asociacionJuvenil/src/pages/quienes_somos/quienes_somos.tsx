/*import { Container, Row } from 'react-bootstrap'
import {QUIENES_SOMOS} from '../../data/strings'*/
import './quienes_somos.css'
//import Carousel from '../../components/carousel/carousel_sin_texto'
import CardsQuiensSomos from '../../components/quienes_somos_textos'

const Quienes_somos = () => {
    const QUIENES_SOMOS = [
        {
          _id: '65cc846091e582dcd42154a1',
          TEXTO_INICIAL: `La Asociación Juvenil por el Ocio Alternativo Tres Cantos (AJ3C) es una entidad sin ánimo de lucro que lleva desde 2007 actuando en <i>#TresCantos</i> y colaborando con el <i>#Ayuntamiento</i>. Nuestro objetivo es ofrecer un ocio alternativo, sano y asequible a los jóvenes del municipio, además de apoyarles en sus proyectos.<br>Somos una familia en crecimiento. Contamos con casi 2.000 
      socios oficiales y 60 voluntarios activos permanentemente. Los socios no pagan cuotas mensuales ni reciben remuneración por su trabajo. Al principio, la asociación se nutría de subvenciones públicas pero 
      por suerte, desde hace unos años, se autogestiona gracias a los ingresos de los servicios ofrecidos a 
      personas y entidades privadas y públicas.`,
          MISION: {
            TITULO: 'Misión',
            TEXTO: `El <i>#Feminismo</i> no solo es un movimiento, sino un imperativo moral y social. En la 
      Asociación Juvenil por el Ocio Alternativo Tres Cantos, creemos en la <i>#IgualdadDeGénero</i> y estamos comprometidos con los principios del feminismo. Luchamos por un mundo en el que todas las personas, sin importar su género, tengan las mismas oportunidades, derechos y voz. Además, defendemos la importancia de la educación y la concienciación. Trabajamos para sensibilizar a nuestras comunidades y aportar información sobre los desafíos que enfrentan las personas de <i>#GéneroDiverso</i>.<br>Promovemos la <i>#Igualdad</i> y la <i>#Diversidad</i> en todos los aspectos de nuestra labor, desde nuestras políticas de inclusión en el lugar de trabajo hasta nuestra colaboración con organizaciones <i>#LGTBIQ+</i> y eventos de la comunidad. Por esta razón, contamos con un Club que se encarga de defender estos ideales: Diversos`
          },
          VISION: {
            TITULO: 'Visión',
            TEXTO: `Confiamos en ganar apoyo y reconocimiento que nos facilite nuestra lucha con el objetivo de mejorar la sociedad y las relaciones que se establecen dentro de la misma. Promovemos el respeto, 
      la inclusión, el ocio saludable y el cuidado por el medioambiente. Queremos que formes parte de la Asociación Juvenil por el Ocio Alternativo Tres Cantos para trabajar juntos por este cambio. ¡Por una sociedad unida!`
          },
          VALORES: {
            TITULO: 'Valores',
            TEXTO: 'Los principios de transparencia y buen gobierno rigen la actividad de nuestra organización, sometida a la <i>Ley 19/2013, de 9 de diciembre</i> de transparencia, acceso a la información pública y buen gobierno. Además, cada año presentamos nuestras cuentas en el Registro Mercantil y en una asamblea general de asociaciones de carácter abierto. Los fondos públicos que la entidad ha percibido y percibe, a través de convenios y subvenciones, son destinados en su integridad a nuestros proyectos.'    
        },
          RECURSOS: {
            TITULO: 'Recursos',
            TEXTO: 'Estos son algunos recursos que utilizamos de las formaciones que hemos recibido como Asociación. Siempre agradecidos a los técnicos y formadoras que nos han dado luz sobre estos temas. <ul><li><b>CRUZ ROJA JUVENTUD</b></li><li><b>OMS</b></li><li><b>INJUVE</b></li></ul>'
          },
          COLABORACIONES: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object], [Object]
          ]
        }
      ];

    /*return (
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
                <section className='mb-3'>
                    <h2 className='mb-3'>{QUIENES_SOMOS.COLABORACIONES_TITULO}</h2>
                    <Carousel imagenes={QUIENES_SOMOS.COLABORACIONES}></Carousel>
                </section>
            </Row>
        </Container>
        
      </main>
    )*/
    return (
        <main>
            <CardsQuiensSomos cards={QUIENES_SOMOS[0]}/>
        </main>
    )
  }
  
  export default Quienes_somos