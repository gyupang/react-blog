import React from 'react';
import './hero.css';
import HeroImg from '../../img/main2.png';
import { Typewriter } from 'react-simple-typewriter'
import { SiWindows,SiVisualstudiocode,SiNaver,SiGoogle,SiJavascript,SiMicrosoftaccess } from "react-icons/si";
const hero = () => {
    return (
        <>
            <section className="hero" id='hero'>
                <div className="container f-flex top">
                    <div className="left top">
                        <h3>Welcome to my world</h3>
                        <h1>
                        Hi. it's <span>spring</span>
                        </h1>
                        <h2>

                            <span>
                                <Typewriter
                                     words={['Flowers', 'Blossom', 'Growth', 'Renewal']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut a voluptatem cumque, quidem tempora corrupti nulla nesciunt temporibus earum soluta atque recusandae cupiditate quaerat id magni exercitationem. Atque, suscipit velit?
                        </p>
                        <div className="hero-btn d-flex">
                            <div className="col">
                                <h4>View My SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow"><SiNaver className='icon'/></button>
                                    <button className="btn-shadow"><SiVisualstudiocode className='icon'/></button>
                                    <button className="btn-shadow"><SiWindows className='icon'/></button>
                                </div>

                            </div>
                            <div className="col">
                                <h4>BEST MY SKILL</h4>
                                <div className="button">
                                    <button className="btn-shadow"><SiGoogle className='icon'/></button>
                                    <button className="btn-shadow"><SiJavascript className='icon'/></button>
                                    <button className="btn-shadow"><SiMicrosoftaccess className='icon'/></button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="right">
                        <div className="right-img">
                            <img src={HeroImg} alt="me" />
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};

export default hero;