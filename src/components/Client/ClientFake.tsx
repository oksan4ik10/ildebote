import { memo } from "react";
import "./Client.css";
import src0 from "../../assets/images/services/0.png";
import src1 from "../../assets/images/services/1.png"
import src2 from "../../assets/images/services/2.png"
import src3 from "../../assets/images/services/3.png"
import src4 from "../../assets/images/services/4.png"
import src5 from "../../assets/images/services/1-wall.png"
import src6 from "../../assets/images/services/2-wall.png"
import src7 from "../../assets/images/services/3-wall.png"


import { IClient } from "./Client";

export const ClientFake = memo(function (props: IClient) {
    const { img, category } = props;
    const arrImgCategories = [src0, src1, src2, src3, src4, src5, src6, src7];
    return (
        <>
            <div className="client__wrap">
                <div className={"client "}>
                    <div className="client__services" >
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
        </>
    )
})

export default ClientFake;