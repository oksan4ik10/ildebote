import { useRef, useCallback, useEffect, memo } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import "./Client.css";

import src3 from "../../assets/images/services/3.png"
import src4 from "../../assets/images/services/4.png"
import src5 from "../../assets/images/services/1-wall.png"
import src6 from "../../assets/images/services/2-wall.png"
import src7 from "../../assets/images/services/3-wall.png"
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setCheckArea, createCheckArea } from "../../store/reducers/checkAreaReducer";

import { TCheck } from "../../store/reducers/checkAreaReducer";
import { IDeleteClient } from "../../store/reducers/arrClientsReducer";
import { deleteClient, setTimeClass } from "../../store/reducers/arrClientsReducer";


import animation from "../utils/animation";

export type TTimeClass = "errorTime" | "dangerTime" | "waitTime";

import ModalDiagnostics from "./ModalDiagnostics";

export interface IClient {
    id: string;
    img: string;
    category: number;
    check: TCheck;
    timeClass: TTimeClass;
    classIcon?: string;

}
interface IPropsClient extends IClient {
    index: number;
    task: number;
}

type TEvent = "click" | "touch";

export const Client = memo(function (props: IPropsClient) {
    const { img, category, index, check, id, timeClass, task, classIcon } = props;
    const arrImgCategories = ["уход", "парфюмерия", "макияж", src3, src4, src5, src6, src7];
    const coordinate = useAppSelector((state) => state.areaCoordinateReducer).arr;
    const topArea = useAppSelector((state) => state.areaCoordinateReducer).topArea;
    const container = useAppSelector((state) => state.containerCoordinateReducer).container;
    const timerAll = useAppSelector((state) => state.timerReducer).timerAll;
    const dispatch = useAppDispatch();


    const refServices = useRef<HTMLDivElement>(null);
    const startClick = useRef(false);
    const win = useRef(false);
    const stopGame = useRef(false);


    let targetDrag: HTMLElement | undefined;

    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        targetDrag = e.target as HTMLElement;
        startClick.current = true;
        start("click");
    }

    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        targetDrag = e.changedTouches[0].target as HTMLElement;
        start("touch");


    }
    const start = (device: TEvent) => {
        if (category > 4) return;
        paused.current = true;
        disablePageScroll();
        if (targetDrag) {
            targetDrag = targetDrag.closest(".client") as HTMLElement;
            targetDrag.style.position = "absolute";
            const x = targetDrag.offsetLeft;
            let y = 0;
            if (refServices.current) {
                refServices.current.classList.add("none");
                y = container.height - 83 - 16;
                if ((device === "click") && (container.width > 399)) y -= 10;
            }
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }
    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!startClick.current) return;
        move(e.pageY, e.pageX, "click");
    }
    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX, "touch");

    }

    const move = (clientY: number, clientX: number, device: TEvent) => {
        if (category > 4) return;

        if (targetDrag) {
            let y = clientY - container.top - (targetDrag.offsetHeight / 2);
            let x = clientX - container.left - (targetDrag.offsetWidth / 2);
            if (x < 0) x = 0;
            if (x > container.width - 64) x = container.width - 64;
            if ((device === "click") && (container.width > 399)) y -= 10;
            if (y < topArea) y = topArea;
            if (y > container.height - 83) y = container.height - 83;
            targetDrag.style.top = y + "px";
            targetDrag.style.left = x + "px";
            let check: TCheck = "wait";
            let checkWin = false;


            coordinate.forEach((item, index) => {
                if ((x > item.x1) && (x < item.x2) && (y > item.y1) && (y < item.y2)) {
                    if (category === index) {
                        checkWin = true;
                        win.current = true;
                        check = "success";
                    } else {
                        win.current = false;
                        check = "error";
                    }

                } else {
                    check = "wait";
                }
                if ((index === coordinate.length - 1) && (!checkWin)) {
                    win.current = false;
                }
                dispatch(setCheckArea({ category: index, check: check }))

            })

        }
    }
    const mouseEnd = () => {
        if (category > 4) return;
        startClick.current = false;
        end();

    }
    const mouseOut = () => {
        if (category > 4) return;
        if (!startClick.current) return;
        startClick.current = false;
        end();
    }
    const dragEnd = () => {
        enablePageScroll();
        end();
    }


    const end = () => {
        if (category > 4) return;

        if (targetDrag) {
            paused.current = false;
            targetDrag.style.position = "relative";
            targetDrag.style.top = "auto";
            targetDrag.style.left = "auto"
            refServices.current?.classList.remove("none");
            const arrArea: TCheck[] = coordinate.map(() => "wait");

            //если пользователь разместил в нужную область
            if (win.current) {
                if (category === 3) {
                    stopGame.current = true;
                    paused.current = true;
                    targetDrag.style.opacity = "0";
                    dispatch(createCheckArea(arrArea));
                    animation();
                    setTimeout(() => {
                        const dataDelete: IDeleteClient = {
                            area: "clients",
                            index: index,
                            timer: false
                        }
                        dispatch(deleteClient(dataDelete))

                    }, 4500);
                    return
                }

                if (category === 4) {
                    targetDrag.style.opacity = "0";
                    dispatch(setCheckArea({ category: 4, check: "wait" }));
                    if (modal.current) modal.current.style.opacity = "1";
                    setTimeout(() => {
                        const dataDelete: IDeleteClient = {
                            area: "clients",
                            index: index,
                            timer: false
                        }
                        dispatch(deleteClient(dataDelete))

                    }, 1000)
                    return;
                }
                const dataDelete: IDeleteClient = {
                    area: "clients",
                    index: index,
                    timer: false
                }
                dispatch(deleteClient(dataDelete))
            }
            dispatch(createCheckArea(arrArea));
        }
    }

    const paused = useRef(false);
    const over = useRef(false);
    const time = useRef(15);
    const changeTimeClass = useCallback(() => {
        if (!timerAll) return;
        if (paused.current || over.current) return;
        time.current--;
        if (time.current === 10) dispatch(setTimeClass({ index: index, timeClass: "dangerTime" }));
        if (time.current === 5) dispatch(setTimeClass({ index: index, timeClass: "errorTime" }))
        if (time.current === 1) {
            over.current = true;
            dispatch(deleteClient({
                area: "clients",
                index: index,
                timer: true
            }))
            return false;
        }
        return true;
    }, [dispatch, index, over, paused, timerAll])



    useEffect(() => {
        if (task === 1) return;
        const timerID = setInterval(() => changeTimeClass(), 1000);
        return () => clearInterval(timerID);

    }, [changeTimeClass, task, time])


    const modal = useRef<HTMLDivElement>(null);
    return (
        <>
            {category === 4 && <ModalDiagnostics refClient={modal} />}
            {stopGame.current && <div className="stopGame-client"></div>}

            {(id || check || timeClass || timerAll) &&
                <div className="client__wrap">
                    <div className={"client " + (check === "error" ? "error" : check === "success" ? "success" : "") + (timeClass === "errorTime" ? " errorTime" : timeClass === "dangerTime" ? " dangerTime" : "")}
                    >
                        <div className="client__drag" onMouseDown={mouseStart}
                            onMouseMove={mouseMove}
                            onMouseOut={mouseOut}
                            onMouseUp={mouseEnd}
                            onTouchStart={startTouch}
                            onTouchMove={dragMove}
                            onTouchEnd={dragEnd}></div>
                        <div className={"client__services " + "cat" + category} ref={refServices}>
                            {(category > 2) && <img src={arrImgCategories[category]} alt={category + ""} />}
                            {(category <= 2) && <span>{arrImgCategories[category]}</span>}
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                <path
                                    d="M1.52495 9.07417C0.69805 9.87628 0.718014 11.2093 1.56856 11.9863L9.59224 19.3162C10.8759 20.4888 12.9412 19.5782 12.9412 17.8396L12.9412 2.72646C12.9412 0.959279 10.8171 0.0604663 9.54863 1.2909L1.52495 9.07417Z"
                                    fill="#fff" />
                            </svg>
                        </div>
                        <div className="client__drag-info">

                            <div className="client__lives">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={"client__photo " + (classIcon ? classIcon : "")} dangerouslySetInnerHTML={{ __html: img }}>
                            </div>
                        </div>


                    </div>
                </div >
            }
        </>
    )
})

export default Client;