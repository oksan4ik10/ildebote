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
        dispatch(createCheckArea(["wait", "wait", "wait", "wait", "wait"])); //площадки, которые работают в данном таске
        dispatch(setArrClients(arrClients));

    })




    const arrClients: IClient[] = [
        {
            id: "1",
            category: 6,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "2",
            category: 3,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "3",
            category: 2,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "4",
            category: 1,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "5",
            category: 2,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
    ]


    return (
        <>
            <Experience></Experience>
            <Area task={1}></Area>
            <ClientsArea></ClientsArea>
        </>
    )
}

export default Task1;