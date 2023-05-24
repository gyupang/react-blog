import React from 'react';
import './resume.css';
import Card from './Card';
import data from '../../data/features-api3';

const Resume = () => {
    return (
        <>
            <section className='resume' id='resume'>
                <div className="container top">
                    <div className="heading text-center">
                        <h4>I'm a new bie. but my resume...</h4>
                        <h1>My Resume</h1>

                    </div>
                    <div className="content-section mtop d-flex">

                        <ul className="container">
                            {data.map((dt, res) => {
                                return <Card key={res} category={dt.category} year={dt.year} title={dt.title} desc={dt.desc} rage={dt.rage} />
                            })}

                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;