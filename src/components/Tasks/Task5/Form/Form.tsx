
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "./Form.css";
import Button from "../../../utils/Button/Button";
import srcCheck from "../../../../assets/images/check.svg"


function Form() {

    const { register, getValues, setValue } = useForm();

    const openPortal = () => {
        window.location.href = "http://vk.com";
    }
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkCheck, setCheckCheck] = useState(false);


    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const { check, email } = getValues();
        let correct = 0;

        const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (!check) {
            setCheckCheck(true);
            correct++;
        } else {
            setCheckCheck(false);
        }
        if (!emailReg.test(email) || (email.length === 0)) {
            setCheckEmail(true);
            setValue("email", "");
            correct++;
        } else {
            setCheckEmail(false);
        }
        if (correct !== 0) return;
        const formBody = "email" + "=" + getValues("email");



        const url = "https://script.google.com/macros/s/AKfycbxc8OAXdi-n6uRGPB6_q950s56ApsjsOUZ29hXip5FW4IGC7PmKvYgb74ZhIcaBjB2t1w/exec";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            mode: "no-cors",
            body: formBody
        });
        console.log(response);


        const result = await response.json();
        if (result.type === 'error') {
            console.log(`Ошибка( ${result.errors}`)
        }

        console.log(result);
    }




    return (
        <>
            <div className="modal form-modal">
                <p className="form-modal__text">
                    Присоединяйся к команде<br />ИЛЬ ДЕ БОТЭ, чтобы создавать<br />уникальную атмосферу красоты<br />и делать каждый день лучше!
                </p>
                <Button classBtn="form-modal__btn" textBtn="На карьерный портал" funcBtn={openPortal}></Button>
                <p className="form-modal__text">
                    Не забудь принять участие<br />в розыгрыше — оставляй свои<br />контакты, а мы случайным образом<br />выберем тех, кто получит частичку<br />красоты от ИЛЬ ДЕ БОТЭ!
                </p>
                <form className="form-modal__send" onSubmit={submitForm}>
                    <input type="email" id="email" className={"send__email " + (checkEmail ? "error" : "")} placeholder="example@mail.ru" {...register("email")} />
                    <div className="form-modal__check">
                        <input type="checkbox" id="check-form" className="send__check" {...register("check")} />
                        <label htmlFor="check-form" className={"send__check-fake " + (checkCheck ? "error" : "")}>
                            <img src={srcCheck} alt="check" />
                        </label>
                        <label htmlFor="check-form" className="send__label">
                            <p className="send__text">
                                Я согласен(а) на <a href="https://fut.ru/media/2022/11/personal_data_policy.pdf">обработку персональных данных</a><br />и получение информационных сообщений
                            </p>
                        </label>
                    </div>

                    <button className="form-send__btn">Участвовать</button>
                </form>
            </div>


        </>
    )
}

export default Form;