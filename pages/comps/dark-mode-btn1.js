import React from 'react'
import DarkModeBtn from '../../components/comps/DarkModeBtn1'

const index = () => {
    return (
        <div>
            <div className="aside">
                <DarkModeBtn />
                <p style={{fontFamily: "'Arial', sans-serif", color: "white"}}><strong>#BlackLivesMatter</strong></p>
            </div>
        
            <style>{`
                html{
                    height:100%;
                }
                body{
                    transition:0.25s;
                    height:100%;
                    width:100%;
                    padding-left:5%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .aside{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}
            </style>
        
        </div>
    );
}

export default index