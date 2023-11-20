import { useEffect } from "react";
import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import Area from "../../Area/Area";
import ClientsArea from "../../ClientsArea/ClientsArea";

import src1 from "../../../assets/images/clients/1-1.png";
import { IClient } from "../../Client/Client";
import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { setArrClients } from "../../../store/reducers/arrClientsReducer";

import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
function Task1(props: IPropsTask) {
    // const { nextLevel } = props;
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait"])); //площадки, которые работают в данном таске
        dispatch(setArrClients(arrClients));

    })




    const arrClients: IClient[] = [
        {
            id: "1",
            category: 1,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
    ]


    return (
        <>
            <ScreenBlur>

            </ScreenBlur>
            <Experience></Experience>
            <Area task={1}></Area>
            <ClientsArea task={1}></ClientsArea>
        </>
    )
}

export default Task1;