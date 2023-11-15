import "./ClientsArea.css";
import Client from "../Client/Client";
import { IClient } from "../Client/Client";

interface IProps {
    clients: IClient[];
}


function ClientsArea(props: IProps) {
    let { clients } = props;
    const nullClient = {
        img: "",
        category: -1,
        check: false,

    }
    if (clients.length === 1) {
        clients = [nullClient, nullClient, nullClient, ...clients];
    }


    return (
        <>
            <div className="clients">
                {clients.map((item, index) => <Client key={index + "" + item.img} {...item}></Client>)}
            </div>
        </>
    )
}

export default ClientsArea;