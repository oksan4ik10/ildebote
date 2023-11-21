import { useState, useRef, useEffect, useCallback } from "react";
import "./ClientsArea.css";
import Client from "../Client/Client";
import ModalDiagnostics from "../Client/ModalDiagnostics";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCoordinateClients } from "../../store/reducers/clientsCoordinateReducer";

import PopupClientTask1 from "../Tasks/Task1/PopupClientTask1";



interface IProps {
    task: number;
    screen?: number;
    funcWin: () => void;
}

function ClientsArea(props: IProps) {
    const { task, screen, funcWin } = props;

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
            const yy2 = data.top + 178;
            const gap = (data.width - 64 * 4) / 3;
            const arrCoordinate = [
                {
                    x1: 0,
                    x2: 64,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: 64 + gap - gap + 5,
                    x2: 64 + gap + 64,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 2 - gap + 5,
                    x2: (64 + gap) * 2 + 64,
                    y1: data.top,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 3 - gap + 5,
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

        if (clients.length === 0) return;
        if (clients.filter((item) => item).length === 0) {
            console.log("ЗАПУСТИТЬ ФУНКЦИЮ смены таска или окна");

        }

    }, [clients])


    return (
        <>
            {modal && <ModalDiagnostics />}
            <div className="clients" style={(task === 1 && screen === 1) ? { "zIndex": "99" } : {}} ref={ref}>
                {task === 1 && <PopupClientTask1 screen={screen ? screen : -1} />}
                {clients.map((item, index) => {
                    if (!item) return <div className="client" key={Math.random()}></div>
                    if (item.category === 4) return <Client key={item.id} index={index} task={task}  {...item} funcWin={openModalDiagnostics} />
                    return <Client key={item.id} index={index} task={task} {...item} funcWin={funcWin} />
                })}
            </div>
        </>
    )
}

export default ClientsArea;