import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
//import { useDispatch } from 'react-redux';
const Contact = () => {
    const form = useRef();
    //const dispatch = useDispatch();
    const myid = {
        SERVICE_ID: "4567gmail",
        TEMPLATE_ID: "template_87340eu",
        USER_ID: "m0rPl_we2Wq9eFc6S"
    }
    const closeEmail = () => {
       // dispatch({ type: "CLOSE_EMAIL" })
    }
    const sendEmail = () => {
        emailjs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
            .then((rs) => {
                console.log(rs.text);
                alert("전송되었습니다");
                closeEmail();
            },
                (error) => {
                    console.log("전송에 실패했습니다.");
                });
    };


    return (
        <div>
            <section className="contact" id='contact'>
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>
                </div>
                <div className="content d-flex">
                    <div className="left">
                        <div className="box btn-shadow">
                            <div className="img">
                                <img src="./images/together.png" alt="together" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit qui earum, ad voluptatum dolor blanditiis eaque at tenetur quos cum a tempore. Eligendi, tempora enim consequatur sunt libero nihil unde?</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box btn-shadow">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="f-flex">
                                    <div className="col-50">

                                        <label>보내시는 분 성함</label>
                                        <input type="text" name="user_name" placeholder='성함' />
                                    </div>
                                    <div className="col-50">
                                        <label>보내시는 분 이메일</label>
                                        <input type="email" name="user_email" placeholder='이메일' />
                                    </div>
                                </div>
                                <div>
                                    <textarea name="message" cols="30" rows="10" placeholder='내용'></textarea>

                                </div>

                                <div className="text-center">
                                    <input type="submit" value="이메일 전송" />
                                </div>

                            </form>
                        </div>


                    </div>
                </div>


            </section>

        </div>
    );
};

export default Contact;