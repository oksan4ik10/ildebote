import { useState } from "react";
import "./ClientsArea.css";
import Client from "../Client/Client";
import { IClient } from "../Client/Client";
import ModalDiagnostics from "../Client/ModalDiagnostics";
interface IProps {
    clients: IClient[];
}


function ClientsArea(props: IProps) {
    let { clients } = props;
    const nullClient = {
        img: "",
        category: -1,
        check: false,
        funcWin: console.log

    }
    if (clients.length === 1) {
        clients = [nullClient, nullClient, nullClient, ...clients];
    }
    const [modal, setModal] = useState(false);
    const openModalDiagnostics = () => {
        setModal(true);
        setTimeout(() => setModal(false), 3000)
    }


    return (
        <>
            {modal && <ModalDiagnostics />}
            <div className="clients">
                {clients.map((item, index) => {
                    if (item.category === 4) return <Client key={index + "" + item.img} {...item} funcWin={openModalDiagnostics} />
                    return <Client key={index + "" + item.img} {...item} funcWin={console.log} />
                })}
            </div>
        </>
    )
}

export default ClientsArea;