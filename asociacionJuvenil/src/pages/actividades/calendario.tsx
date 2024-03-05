import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import 'react-tooltip/dist/react-tooltip.css'
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
                        return {
                            ...evento,
                            color: configuracionColor.color,
                            textColor: configuracionColor.textColor,
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
            />
        </Container>
    </main>);
}

export default calendario;
