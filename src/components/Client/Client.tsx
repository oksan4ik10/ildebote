import { useRef, useCallback, useEffect, memo } from "react";
import "./Client.css";
import src0 from "../../assets/images/services/0.png";
import src1 from "../../assets/images/services/1.png"
import src2 from "../../assets/images/services/2.png"
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
export interface IClient {
    id: string;
    img: string;
    category: number;
    check: TCheck;
    funcWin?: () => void;
    timeClass: TTimeClass;

}
interface IPropsClient extends IClient {
    index: number;
    task: number;
}

export const Client = memo(function (props: IPropsClient) {
    const { img, category, funcWin, index, check, id, timeClass, task } = props;
    const arrImgCategories = [src0, src1, src2, src3, src4, src5, src6, src7];
    const coordinate = useAppSelector((state) => state.areaCoordinateReducer).arr;
    const topArea = useAppSelector((state) => state.areaCoordinateReducer).topArea;
    const container = useAppSelector((state) => state.containerCoordinateReducer).container;
    const dispatch = useAppDispatch();

    const refServices = useRef<HTMLDivElement>(null);
    const startClick = useRef(false);
    const win = useRef(false);
    const stopGame = useRef(false);


    let targetDrag: HTMLElement | undefined;
    const topAreaClients = useAppSelector((state) => state.clientsCoordinateReducer).coordintateClients[0].y1;
    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        targetDrag = e.target as HTMLElement;
        startClick.current = true;
        start();
    }

    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        targetDrag = e.changedTouches[0].target as HTMLElement;
        start();


    }
    const start = () => {
        if (category > 4) return;
        if (targetDrag) {
            timerActive.current = (false)

            targetDrag = targetDrag.closest(".client") as HTMLElement;
            targetDrag.style.position = "absolute";
            const x = targetDrag.offsetLeft;
            let y = 0;
            if (refServices.current) {
                y = topAreaClients + (178 - targetDrag.offsetHeight) + refServices.current.offsetHeight - 8;
                refServices.current.classList.add("none");
            }
            targetDrag.style.left = x + "px";
            targetDrag.style.top = y + "px";
        }
    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!startClick.current) return;
        move(e.pageY, e.pageX);
    }
    const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX);

    }

    const move = (clientY: number, clientX: number) => {
        if (category > 4) return;

        if (targetDrag) {
            timerActive.current = (false)
            let y = clientY - container.top - (targetDrag.offsetHeight / 2);
            let x = clientX - container.left - (targetDrag.offsetWidth / 2);
            if (x < 0) x = 0;
            if (x > container.width - 64) x = container.width - 64;
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
    const dragEnd = () => end();



    const end = () => {
        if (category > 4) return;
        if (targetDrag) {
            targetDrag.style.position = "static";
            targetDrag.style.top = "auto";
            targetDrag.style.left = "auto"
            refServices.current?.classList.remove("none");
            const arrArea: TCheck[] = coordinate.map(() => "wait");

            //если пользователь разместил в нужную область
            if (win.current) {
                if (category === 3) {
                    animation();

                }
                if (funcWin) funcWin();
                // if (category === 4) {
                //     if (funcWin) funcWin();
                // }
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

    const timerActive = useRef(true);

    const changeTimeClass = useCallback((time: number) => {
        if (!timerActive.current) return;

        if (time === 7) dispatch(setTimeClass({ index: index, timeClass: "dangerTime" }));
        if (time === 4) dispatch(setTimeClass({ index: index, timeClass: "errorTime" }))
        if (time === 1) {
            timerActive.current = false;
            dispatch(deleteClient({
                area: "clients",
                index: index,
                timer: true
            }))
        }
    }, [dispatch, index])



    useEffect(() => {
        if (task === 1) return;
        let count = 10;
        const idInterval = setInterval(() => {
            if ((count < 0) || !timerActive.current) clearInterval(idInterval);
            else {
                changeTimeClass(count);
            }
            count--;
        }, 1000)

    }, [changeTimeClass])



    return (
        <>
            {stopGame.current && <div className="stopGame"></div>}
            {(id || check || timeClass) &&
                <div className="client__wrap">
                    <div className={"client " + (check === "error" ? "error" : check === "success" ? "success" : "") + (timeClass === "errorTime" ? " errorTime" : timeClass === "dangerTime" ? " dangerTime" : "")}
                        onMouseDown={mouseStart}
                        onMouseMove={mouseMove}
                        onMouseLeave={mouseOut}
                        onMouseUp={mouseEnd}
                        onTouchStart={startTouch}
                        onTouchMove={dragMove}
                        onTouchEnd={dragEnd}>
                        <div className="client__services" ref={refServices}>
                            <img src={arrImgCategories[category]} alt={category + ""} />
                        </div>
                        <div className="client__lives">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="client__photo">
                            <img src={img} alt="photo" draggable="false" />
                        </div>

                    </div>
                </div >
            }
        </>
    )
})

export default Client;