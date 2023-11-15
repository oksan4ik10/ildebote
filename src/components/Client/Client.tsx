import "./Client.css";
import src0 from "../../assets/images/services/0.png";
import src1 from "../../assets/images/services/1.png"
import src2 from "../../assets/images/services/2.png"
import src3 from "../../assets/images/services/3.png"
import src4 from "../../assets/images/services/4.png"
import src5 from "../../assets/images/services/1-wall.png"
import src6 from "../../assets/images/services/2-wall.png"
import src7 from "../../assets/images/services/3-wall.png"
import { useAppSelector } from "../../store/store";
import { useState, useRef } from "react";

export interface IClient {
    img: string;
    category: number;
    check: boolean;

}

function Client(props: IClient) {
    const { img, category } = props;
    const arrImgCategories = [src0, src1, src2, src3, src4, src5, src6, src7];

    const coordinate = useAppSelector((state) => state.areaCoordinateReducer).arr;
    const topArea = useAppSelector((state) => state.areaCoordinateReducer).topArea;
    const container = useAppSelector((state) => state.containerCoordinateReducer).container;


    const refServices = useRef<HTMLDivElement>(null);



    if (category === -1) {
        return (
            <>
                <div className="client__wrap">

                </div>

            </>
        )
    }

    let targetDrag: HTMLElement | undefined;

    const startTouch = (e: React.TouchEvent<HTMLSpanElement>) => {
        targetDrag = e.changedTouches[0].target as HTMLElement;
        targetDrag = targetDrag.closest(".client") as HTMLElement;
        targetDrag.style.position = "absolute";
        const x = targetDrag.offsetLeft;
        let y = 0;
        if (refServices.current) {
            y = targetDrag.offsetTop + 8 + refServices.current.offsetHeight;
            refServices.current.classList.add("none");
        }
        targetDrag.style.left = x + "px";
        targetDrag.style.top = y + "px";


    }
    const dragMove = (e: React.TouchEvent<HTMLSpanElement>) => {
        const data = e.changedTouches[0];
        move(data.clientY, data.clientX);

    }
    const move = (clientY: number, clientX: number) => {
        if (targetDrag) {
            let y = clientY - container.top - (targetDrag.offsetHeight / 2);
            let x = clientX - container.left - (targetDrag.offsetWidth / 2);
            if (x < 0) x = 0;
            if (x > container.width - 64) x = container.width - 64;
            if (y < topArea) y = topArea;
            if (y > container.height - 80) y = container.height - 80;
            targetDrag.style.top = y + "px";
            targetDrag.style.left = x + "px";
        }
    }

    const dragEnd = () => {
        if (targetDrag) {
            targetDrag.style.position = "static";
            refServices.current?.classList.remove("none");

        }
    }




    return (
        <>
            <div className="client__wrap">
                <div className="client" onTouchStart={startTouch} onTouchMove={dragMove} onTouchEnd={dragEnd}>
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
                        <img src={img} alt="photo" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Client;