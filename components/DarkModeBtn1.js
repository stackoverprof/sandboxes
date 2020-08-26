import React, {useState} from 'react'

const DarkModeBtn1 = () => {
    const [sun, setSun] = useState("day")
    const [mover, setMover] = useState("translateY(0)")
    const [boxShadow, setBoxShadow] = useState("0px 0px 16px rgba(0, 0, 0, 0.25)")
    const [backg, setBackg] = useState("white")
    const [allp, setAllp] = useState("black")
    
    function switcher(){
        if (sun == "day") {
            setSun("night")
            setMover("translateY(-42px)")
            setBoxShadow("0px 0px 16px rgba(255, 255, 255, 0.25)")
            setBackg("#111111")
            setAllp('white')
        } else {
            setSun("day")
            setMover("translateY(0)")
            setBoxShadow("0px 0px 16px rgba(0, 0, 0, 0.25)")
            setBackg("white")
            setAllp('black')
        }
    }

    return (
        <div>
            <div className={`button ${sun}`} id="button" onClick={() => switcher()}>
                <div className="mover" id="mover">
                    <svg className="icon sun" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <svg className="icon moon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>
            </div>
            
            <style>{`
                body{
                    transition: 0.25s;
                    background-color: ${backg};
                    color:${allp};
                }
                .button{
                    transition:0.75s;
                    width:50px;
                    height:50px;
                    background: #FFFFFF;
                    box-shadow: ${boxShadow};
                    border-radius:10px;
                    display:flex;
                    margin:10px;
                    justify-content: center;
                    align-items: start;
                    overflow: hidden;
                }
                .mover{
                    position:relative;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    flex-direction:column;
                    height: 92px;
                    padding-top:10px;
                    padding-bottom:10px;
                    transition:0.75s;
                    transform: ${mover}
                }
                .day{
                    background-color: white;
                }
                .night{
                    background-color: #0E0E0E;
                }
            `}    
            </style>
            
        </div>
    );
}

export default DarkModeBtn1;
