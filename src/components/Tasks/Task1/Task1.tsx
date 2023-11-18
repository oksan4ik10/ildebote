import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import { setWidth } from "../../../store/reducers/pointsReducer";
import Area from "../../Area/Area";
import ClientsArea from "../../ClientsArea/ClientsArea";

import src1 from "../../../assets/images/clients/1-1.png";
import { IClient } from "../../Client/Client";
import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { setArrClients } from "../../../store/reducers/arrClientsReducer";
import { useEffect } from "react";

function Task1(props: IPropsTask) {
    // const { nextLevel } = props;
    const dispatch = useAppDispatch();

    const test = () => {
        dispatch(setWidth(2)); //добавление очков
    }
    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait", "wait", "wait"]));
        dispatch(setArrClients(arrClients));

    })




    const arrClients: IClient[] = [
        {
            category: 6,
            img: src1,
            check: "wait",
        },
        {
            category: 4,
            img: src1,
            check: "wait",
        },
        {
            category: 4,
            img: src1,
            check: "wait",
        },
        {
            category: 4,
            img: src1,
            check: "wait",
        },
        {
            category: 3,
            img: src1,
            check: "wait",
        },
    ]


    return (
        <>
            <Experience></Experience>
            <Area task={1}></Area>
            <ClientsArea clients={arrClients}></ClientsArea>
        </>
    )
}

export default Task1;