'use client'
import React, { useState, useRef, useEffect } from 'react';
import './casset.css';


const Casset = () => {
    return (
        <div>

            {/* Cassette Animation */}
            <div className={`cassette  mt-6`}>
                <div className="screw"></div>
                <div className="screw"></div>
                <div className="screw"></div>
                <div className="screw"></div>

                <div className="cassette__line"></div>

                <div className="label">
                    <div className="title">volume 1</div>
                    <div className="side">A</div>
                    <div className="cutout">
                        <div className="reel">
                            <div className="reel__prongs"></div>
                        </div>

                        <div className="window">
                            <div className="window__reel"></div>
                            <div className="window__reel"></div>
                        </div>

                        <div className="reel">
                            <div className="reel__prongs"></div>
                        </div>
                    </div>

                    <div className="duration">90</div>

                    <div className="caption">
                        awesome mix of all your fav songs!
                    </div>
                </div>

                <div className="cassette__bottom">
                    <div className="opening"></div>
                    <div className="opening"></div>
                    <div className="opening"></div>
                    <div className="opening"></div>

                    <div className="screw"></div>

                    <div className="cassette__line"></div>
                </div>
            </div>
        </div>
    )
}

export default Casset
