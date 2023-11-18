import { useState, useRef, useEffect, useCallback } from "react";
import "./ClientsArea.css";
import Client from "../Client/Client";
import { IClient } from "../Client/Client";
import ModalDiagnostics from "../Client/ModalDiagnostics";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCoordinateClients } from "../../store/reducers/clientsCoordinateReducer";



interface IProps {
    clients: IClient[];
}


function ClientsArea(props: IProps) {
    //let { clients } = props;

    const clients = useAppSelector((store) => store.arrClientsReducer).arrClients.slice(0, 4);
    const [modal, setModal] = useState(false);
    const openModalDiagnostics = () => {
        setModal(true);
        setTimeout(() => setModal(false), 1000)
    }

    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const handler = useCallback(() => {
        if (ref.current) {
            const data = ref.current.getBoundingClientRect();
            const yy2 = data.top + 168;
            const gap = (data.width - 64 * 4) / 3;
            const arrCoordinate = [
                {
                    x1: 0,
                    x2: 64 + 15,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: 64 + gap - 15,
                    x2: 64 + gap + 64 + 15,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 2 - 15,
                    x2: (64 + gap) * 2 + 64 + 15,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 3 - 15,
                    x2: (64 + gap) * 3 + 64,
                    y1: data.top,
                    y2: yy2
                },
            ]
            dispatch(setCoordinateClients(arrCoordinate));

        }
    }, [dispatch])

    useEffect(() => {
        handler();
    }, [handler])

    useEffect(() => {
        if (clients.filter((item) => item).length === 0) {
            console.log("ЗАПУСТИТЬ ФУНКЦИЮ смены таска или окна");

        }


    })


    return (
        <>
            {modal && <ModalDiagnostics />}
            <div className="clients" ref={ref}>
                {clients.map((item, index) => {
                    if (!item) return <div className="client" key={Math.random()}></div>
                    if (item.category === 4) return <Client key={Math.random()} index={index} {...item} funcWin={openModalDiagnostics} />
                    return <Client key={Math.random()} index={index}{...item} />
                })}
            </div>
        </>
    )
}

export default ClientsArea;