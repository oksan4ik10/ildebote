import { useRef, useEffect, useCallback } from "react";
import "./ClientsArea.css";
import Client from "../Client/Client";
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
    const container = useAppSelector((state) => state.containerCoordinateReducer).container;
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const handler = useCallback(() => {
        if (ref.current) {
            const data = ref.current.getBoundingClientRect();
            const yy1 = data.top - container.top;
            const yy2 = yy1 + 178;
            const gap = (data.width - 64 * 4) / 3;
            const arrCoordinate = [
                {
                    x1: 0,
                    x2: 64,
                    y1: yy1,
                    y2: yy2
                },
                {
                    x1: 64 + gap - gap + 5,
                    x2: 64 + gap + 64,
                    y1: yy1,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 2 - gap + 5,
                    x2: (64 + gap) * 2 + 64,
                    y1: yy1,
                    y2: yy2
                },
                {
                    x1: (64 + gap) * 3 - gap + 5,
                    x2: (64 + gap) * 3 + 64,
                    y1: yy1,
                    y2: yy2
                },
            ]
            dispatch(setCoordinateClients(arrCoordinate));

        }
    }, [])

    useEffect(() => {
        handler();
    }, [handler])

    useEffect(() => {
        if (clients.length === 0) return;
        if (clients.filter((item) => item).length === 0) {
            if ((task === 1) && screen && (screen > 13)) return;
            if ((task === 4) && (document.querySelector(".modal-dialog"))) return;
            funcWin();
            return;
        }

    }, [screen, clients, funcWin, task]);
    return (
        <>
            <div className="clients" style={(task === 1 && screen === 1) ? { "zIndex": "99" } : {}} ref={ref}>
                {task === 1 && <PopupClientTask1 screen={screen ? screen : -1} />}
                {(screen === 30 || screen === 31 || screen === 40 || screen === 41) && clients.map(() => <div className="client" key={Math.random()}></div>)}

                {(task === 1 || ((task === 2) && screen && (screen < 23)) || ((task === 3) && (screen === 32)) || ((task === 4) && screen && (screen > 41))) && clients.map((item, index) => {
                    if (!item) return <div className="client" key={Math.random()}></div>

                    return <Client key={item.id} index={index} task={task} {...item} />
                })}
            </div>
        </>
    )
}

export default ClientsArea;