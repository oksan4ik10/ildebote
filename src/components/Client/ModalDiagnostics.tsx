import { useEffect, useState, RefObject } from "react";
import Modal from "../utils/Modal/Modal";
import { useAppSelector } from "../../store/store";


interface IProps {
    refClient: RefObject<HTMLDivElement>;
}
function ModalDiagnostics(props: IProps) {
    const { refClient } = props;

    const coord = useAppSelector((state) => state.areaCoordinateReducer).arr[4];
    const [styleModal, setStyleModal] = useState({
        top: 0,
        right: 0,
        opacity: 0
    })
    const [text, setText] = useState("");

    // const ref = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const textArr = [
            "кожа сухого типа, рекомендована программа ухода А",
            "чувствительная кожа, рекомендована программа ухода Ч",
            "кожа комбинированного типа, рекомендована программа ухода К",
            "кожа в состоянии обезвоженности, рекомендована программа ухода О",
            "коже требуется комплексный уход, рекомендована программа У",
            "коже требуется специальный уход, рекомендована программа С",
            "кожа нормального типа, рекомендована программа ухода Н"

        ]
        const rand = Math.floor(Math.random() * textArr.length);
        setText(textArr[rand]);
        if (refClient.current) {
            const data = refClient.current.getBoundingClientRect();

            if (coord) {
                const y = coord.y1 + (coord.y2 - coord.y1) - 41.5 - data.height / 2 + 20;
                setStyleModal({
                    top: y,
                    right: 10,
                    opacity: 0
                })
            }


        }
    }, [coord, refClient])

    return (
        <>
            <div className="modal__room" ref={refClient} style={styleModal}>
                <Modal padding="12px 6px" size="12px" text={text} title="По результатам диагностики:" />
            </div>
        </>
    )
}

export default ModalDiagnostics;