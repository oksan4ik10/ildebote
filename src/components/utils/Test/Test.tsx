import { useState, useRef } from "react"
import "./Test.css"
import Modal from '../Modal/Modal';
import { arrQuestions } from "./TestQuestions";
import { useAppDispatch } from "../../../store/store";
import { setNameUser } from "../../../store/reducers/nameUserReducer";

interface IProps {
    task: number;
    funcWin: () => void;
    funcError?: () => void;
}

function Test(props: IProps) {
    const { task, funcWin, funcError } = props;
    const { img, question, answers, win } = arrQuestions[task - 1];

    const [checkAnswer, setCheckAnswer] = useState(false);
    const [textError, setTextError] = useState("Этот ответ не подходит. Попробуй ещё раз");
    const inputNameRef = useRef<HTMLInputElement>(null);

    const startTask1 = useRef(true);
    const dispatch = useAppDispatch();

    const clickFormTest = (e: React.FormEvent<HTMLFormElement>) => {
        const target = e.target as HTMLInputElement;
        if (!target.matches(".answer__input")) {
            return

        }

        const id = target.id;
        if (id === win) {
            setCheckAnswer(false);
            target.checked = false;
            if (task === 1) {
                const value = inputNameRef.current?.value;
                if (!value) {
                    setCheckAnswer(true);
                    setTextError("Введите имя, пожалуйста.");
                } else {
                    dispatch(setNameUser(value))
                    funcWin();
                }
            }

        } else {
            setCheckAnswer(true);
            setTextError("Этот ответ не подходит. Попробуй ещё раз");

        }
        if ((task === 1) && startTask1.current) {
            if (funcError) funcError();
            startTask1.current = false;
        }

    }

    return (
        <>
            {checkAnswer && <div className="modal-client modal-top modal-error ">
                <Modal padding="16px 22px" size="12px" text={textError} title="" />
            </div>}
            <div className="test">
                <div className="test__question question">
                    <div className="question__img">
                        <img src={img} alt="client" />
                    </div>
                    <div className="question__text" dangerouslySetInnerHTML={{ __html: question }}>
                    </div>
                </div>
                <form className="answers" onChange={clickFormTest}>
                    {
                        answers.map((item, index) => {
                            if (index === 0 && task === 1)
                                return <div key={index}>
                                    <input id="answer1" type="radio" className="answer__input" name="answer1" />
                                    <div className="answer">
                                        <label htmlFor="answer1">
                                            <p>{"Добрый день. Я консультант по красоте, меня зовут"}  <input placeholder="ввести имя" id="answer1" type="text" className="nameTask1" ref={inputNameRef} /></p>

                                            <p>
                                                {"Подскажите, пожалуйста, как я могу к вам обращаться? Я с удовольствием проведу вас в отдел ухода."}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            return <div key={index}>
                                <input id={"answer" + (index + 1)} type="radio" className="answer__input" name={"answer" + (index + 1)} />
                                <div className="answer">
                                    <label htmlFor={"answer" + (index + 1)}>
                                        <p> {item}</p>
                                    </label>
                                </div>
                            </div>
                        })
                    }


                </form>


            </div>
        </>
    )
}



export default Test;