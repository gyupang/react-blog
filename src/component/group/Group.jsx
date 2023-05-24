import React, { useEffect, useState } from 'react';
import './group.css';
import Slide from './Slide';
import Groupdata from '../../data/features-api4';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const Group = () => {
    const [data, setData] = useState(Groupdata);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, data]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => clearInterval(slider)
    }, [index]);


    return (
        <>
            <section className='group top' id='group'>
                <div className="container">
                    <div className="heading text-center">
                        <h4>Our study group</h4>
                        <h1>What I Do!!</h1>
                    </div>

                    <div className="slide">
                        {Groupdata.map((dt, valueIndex) => (
                            <Slide key={dt.id} {...dt} valueIndex={valueIndex} index={index} />
                        ))}




                        <div className="slide-button">
                            <button className="btn-shadow prev-btn" onClick={() => setIndex(index - 1)}>
                                <RiArrowLeftSLine />
                            </button>
                            <button className="btn-shadow next-btn" onClick={() => setIndex(index + 1)}>
                                <RiArrowRightSLine />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Group;