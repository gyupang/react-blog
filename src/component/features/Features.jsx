import React from 'react';
import './features.css';
import Card from './Card';
import data from '../../data/features-api';
const Features = () => {
    return (
        <>
            <section className='features top' id='features'>
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do!!</h1>

                    </div>

                </div>
                <div className="container grid">
                    {data.map((dt, feat) => {
                        return <Card key={feat} icon={dt.icon} title={dt.title} content={dt.content} />
                    })}


                </div>

            </section>

        </>
    );
};

export default Features;