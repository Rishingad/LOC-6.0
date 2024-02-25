import './Domain.css'
const Domain = () => {
    return (
        <>
            <div className="domain-wrapper" id='#domains'>
                <div className="domain-heading">Domains</div>

                <div className="domain-content">
                    {/* <div className="domain-card">
                        <div className="content">
                            <div className="domain-front">
                                <img src="../../../public/entering_area_51.png" alt="" />
                            </div>
                            <div className="domain-back">
                                <img src="../../../public/Domains/web.png" alt="" />
                                <p>Web Dev</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/web.png" alt="" />
                                <p>Web Dev</p></div>
                        </div>
                    </div>
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/app.png" alt="" />
                                <p>App Dev</p></div>
                        </div>
                    </div>
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/aiml.png" alt="" />
                                <p>AI/ML</p></div>
                        </div>
                    </div>
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/blockchain.png" alt="" />
                                <p>Blockchain</p></div>
                        </div>
                    </div>
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/iot.png" alt="" />
                                <p>IoT</p></div>
                        </div>
                    </div>
                    <div className="domain-container">
                        <div className="domain-card">
                            <div className="domain-front"> <img src="../../../public/entering_area_51.png" alt="" /></div>
                            <div className="domain-back"> <img src="../../../public/Domains/openinnovation.png" alt="" />
                                <p>Open Innovation</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Domain