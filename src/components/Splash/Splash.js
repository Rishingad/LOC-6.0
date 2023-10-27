"use client"
import React from 'react'


const Key = ({ label, children }) => (
    <div className={`key ${label}`}>
        {children}
    </div>
);

const SvgIcon = ({ svgProps, pathProps, children }) => (
    <svg {...svgProps}>
        <path {...pathProps} />
        {children}
    </svg>
);
const Splash = () => {
    return (
        <section className="keyboard-splash-overlay">
            <div className="input" data-text="Try me!"></div>
            <div className="keyboard">
                <Key label="l label lt">
                    <span>esc</span>
                </Key>
                <Key label="func">
                    <SvgIcon
                        svgProps={{ width: '20px', height: '20px', viewBox: '0 0 20 20' }}
                        pathProps={{
                            d: 'M11.8,10c0,1-0.8,1.8-1.8,1.8S8.2,11,8.2,10S9,8.2,10,8.2S11.8,9,11.8,10z M10,13.8v0.7 M10,5.5v0.7 M13.8,10 h0.7 M5.5,10h0.7 M12.7,12.7l0.5,0.5 M6.8,6.8l0.5,0.5 M13.2,6.8l-0.5,0.5 M6.8,13.2l0.5-0.5',
                        }}
                    >
                        <span>f1</span>
                    </SvgIcon>
                </Key>
                <Key label="func">
                    <SvgIcon
                        svgProps={{ width: '20px', height: '20px', viewBox: '0 0 20 20' }}
                        pathProps={{
                            d: 'M12.4,10c0,1.3-1.1,2.4-2.4,2.4S7.6,11.3,7.6,10S8.7,7.6,10,7.6S12.4,8.7,12.4,10z M10,14.4V16 M10,4v1.6 M14.4,10H16 M4,10h1.6 M13.1,13.1l1.1,1.1 M5.7,5.7l1.1,1.1 M13.1,6.9l1.1-1.1 M5.7,14.3l1.1-1.1',
                        }}
                    >
                        <span>f2</span>
                    </SvgIcon>
                </Key>
                <Key label="func">
                    <SvgIcon
                        svgProps={{ width: '20px', height: '20px', viewBox: '0 0 20 20' }}
                        pathProps={{
                            d: 'M8.5,8.8H2c-0.3,0-0.5-0.2-0.5-0.5v-3c0-0.3,0.2-0.5,0.5-0.5h6.5C8.7,4.8,9,5.1,9,5.3v3C9,5.6,8.7,5.8,8.5,5.8z M11.4,14.7v-3c0-0.3-0.2-0.5-0.5-0.5H5.4c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5h5.4C11.1,15.2,11.4,14.9,11.4,14.7z M18.5,12.4V6.4c0-0.3-0.2-0.5-0.5-0.5h-3.5c-0.3,0-0.5,0.2-0.5,0.5v5.9c0-0.3,0.2-0.5,0.5-0.5H18C18.3,12.9,18.5,12.6,18.5,12.4z',
                        }}
                    >
                        <span>f3</span>
                    </SvgIcon>
                </Key>
                {/* Add more keys here */}
            </div>
        </section>
    )
}

export default Splash
