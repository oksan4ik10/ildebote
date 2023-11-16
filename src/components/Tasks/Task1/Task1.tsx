import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import { setWidth } from "../../../store/reducers/pointsReducer";
import Area from "../../Area/Area";
import ClientsArea from "../../ClientsArea/ClientsArea";

import src1 from "../../../assets/images/clients/1-1.png";
import { IClient } from "../../Client/Client";
import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { useEffect } from "react";

function Task1(props: IPropsTask) {
    // const { nextLevel } = props;
    const dispatch = useAppDispatch();

    const test = () => {
        dispatch(setWidth(2)); //добавление очков
    }
    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait", "wait", "wait"]))
    })




    const arrClients: IClient[] = [
        {
            category: 4,
            img: src1,
            check: false
        }
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