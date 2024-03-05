import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import { Tooltip } from 'react-tooltip'
// import CategoryFilter from '../../components/filtro_categoria';

type Categoria = 'Artístico' | 'Cultural' | 'Ocio y Tiempo Libre' | 'Educativo' | 'Diversidad';

type ConfiguracionColor = {
    color: string;
    textColor: string;
};

type ConfiguracionPorCategoria = {
    [key in Categoria]: ConfiguracionColor;
};


const calendario = () => {
    // https://fullcalendar.io/docs/react

    // Crear tooltip para mostrar ubicacion y descripcion.
    const [arrayFechas, updateArray] = useState<any>([]);

    const colorPorCategoria: ConfiguracionPorCategoria = {
        "Artístico": { color: 'white', textColor: 'red' },
        "Cultural": { color: 'green', textColor: 'black' },
        "Ocio y Tiempo Libre": { color: 'blue', textColor: 'white' },
        "Educativo": { color: 'red', textColor: 'black' },
        "Diversidad": { color: 'yellow', textColor: 'black' }
    };

    useEffect(() => {
        fetch("http://localhost:3000/calendario", { method: "GET" })
            .then(json => json.json())
            .then(data => {
                let t = data.map((evento: any) => {
                    if (evento.visible) {
                        const configuracionColor = colorPorCategoria[evento.categoria as Categoria];
                        const categoria = evento.categoria.trim()
                        console.log(categoria.trim())
                        return {
                            ...evento,
                            color: configuracionColor.color,
                            textColor: configuracionColor.textColor,
                            extendedProps: {
                                "data-tooltip-id": "tooltip-"+categoria,
                                "data-tooltip-content":"Hello to you too!"
                            }
                        };
                    }
                });

                updateArray(t);
            })
            .catch(error => console.log(error));



    }, []);

    if (arrayFechas.length === 0) {
        return (
            <>
                <Container className="d-flex mt-auto justify-content-center">
                    <Spinner animation="border" role="status"></Spinner>
                </Container>
            </>
        );
    }

    return (<main>
        <Container fluid='md' className='p-2 mt-2 mb-5'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale={"es"}
                firstDay={1}
                height={800}
                headerToolbar={{
                    right: 'prev,next today',
                    left: 'title',
                    center: ''
                }}
                initialEvents={arrayFechas}
                eventDidMount={(arg) => {
                    arg.event.setExtendedProp('data-tooltip-id', arg.event.extendedProps.categoria);
                    arg.event.setExtendedProp('data-tooltip-content', arg.event.extendedProps.categoria);
                    // data-tooltip-content="Hello to you too!"
                    console.log(arg.event.extendedProps)
                    console.log(arg.event.source)
                }}
            />
            <Tooltip id="tooltip-Artístico" >
                <p>Artístico</p>
            </Tooltip>
            <Tooltip id="tooltip-Cultural" >
                <p>Cultura</p>
            </Tooltip>
            <Tooltip id="tooltip-OcioyTiempoLibre" >
                <p>Ocio y Tiempo Libre</p>
            </Tooltip>
        </Container>
    </main>);
}

export default calendario;
