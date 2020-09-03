import React, { useState } from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
import FloatMenu from '../components/FloatMenu'
import OutsideClickHandler from 'react-outside-click-handler'
    
const Navbar = () => {
    const [activated, setactivated] = useState(1)

    const [sun, setSun] = useState("day")
    const [mover, setMover] = useState("translateY(0)")
    const [boxShadow, setBoxShadow] = useState("0px 0px 16px rgba(0, 0, 0, 0.25)")
    const [backg, setBackg] = useState("white")
    const [allp, setAllp] = useState("black")
    const [openmenu, setopenmenu] = useState(true)
    const [openmenu2, setopenmenu2] = useState(true)
    const [animaWidth, setanimaWidth] = useState("10px");

    function switcher() {
        if (sun == "day") {
            setSun("night")
            setMover("translateY(-42px)")
            setBoxShadow("0px 0px 8px rgba(255, 255, 255, 0.25)")
            setBackg("#111111")
            setAllp('white')
        } else {
            setSun("day")
            setMover("translateY(0)")
            setBoxShadow("0px 0px 8px rgba(0, 0, 0, 0.25)")
            setBackg("white")
            setAllp('black')
        }
    }

    function opener(status) {
        if (status) {
            setanimaWidth("10px");
            setTimeout(() => {
                setopenmenu2(status);
                setTimeout(() => {
                    setopenmenu(status);
                }, 200);
            }, 100);
        } else {
            setopenmenu(status);
            setTimeout(() => {
                setopenmenu2(status);
                setanimaWidth("244px");
            }, 200);
            
        }
    }

    return (
        <Wrapper sun={sun} mover={mover} boxShadow={boxShadow} backg={backg} allp={allp} openmenu={openmenu}  openmenu2={openmenu2}>
            <div className="leftnav">
                <Link href="/"><a className={(activated == 1) ? "active" : ""}>Home</a></Link>
                <Link href="/explore"><a className={(activated == 2) ? "active" : ""}>Explore</a></Link>
                <Link href="/about"><a className={(activated == 3) ? "active" : ""}>About</a></Link>
                <Link href="/donate"><a className={(activated == 4) ? "active" : ""}>Donate</a></Link>              
            </div>
            <div className={`rightnav  ${sun}`}>
                <div className="button" id="button" onClick={() => switcher()}>
                    <div className="mover" id="mover">
                        <svg className="icon sun" xmlns="/sun.svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E1722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <svg className="icon moon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </div>
                </div>
                <button className="btn-menu" onClick={() => openmenu ? opener(false) : opener(true)}>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </button>
                <div className="profile"></div>
            </div>
            <div className="floatmenu">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        if(openmenu == false) opener(true);
                    }}
                    >
                    <div className="floatmenuinside">
                        <img src="/img/menu/pointup.svg" alt=""/>
                        <FloatMenu animaWidth={animaWidth}/>
                    </div>
                </OutsideClickHandler>
            </div>

            <style>{`
                .index-asbody{
                    transition: 0.5s;
                    background-color: ${sun == "day" ? "#D7E2EF" : "#0F1B29"};
                }
            `}</style>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({sun, mover, boxShadow, backg, allp, openmenu, openmenu2}) => `
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    position: fixed;
    
    .btn-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 4px;
        transform: scale(0.85);
    }
    .dot{        
        transition: 1s;
        width: 6px;
        height: 6px;
        left: 1260px;
        top: 57px;

        background: ${sun == "day" ? "#09274B" : "white"};
        border-radius: 5px;
        margin: 2px;
    }

    .floatmenu{
        display: ${openmenu ? "none" : "unset"};
        filter: opacity(${openmenu2 ? 0 : 1});
        position: fixed;
        top: 0;
        right: 0;
        transition: 0.2s;
        padding: 24px 8px 0 8px;
                
        margin: 14px;
        margin-top: 60px;
        display: flex;
    }
    .floatmenuinside{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            z-index:11;
        }
    }

    .btn-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border: none;
        background-color: rgba(0,0,0,0);
        &:focus{
            outline: none;
        }
        &:active{
            background-color: ${sun == "day" ? "#D7E2EF" : "#1E2C3E"};
            border-radius: 8px;

            .dot{
                background-color: #4E729E;
            }
        }
    }

    .leftnav {
        margin-bottom: 30px;
        margin-left: 36px;
        width: 320px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 25px;
        
        transition: 0.25s;
        color:${sun == "day" ? "#09274B" : "#E0E0E0"};
        
            &:hover{
                font-weight: 700;
            }
        }
        .active{
            font-weight: 800;
        }
    }

    .rightnav{
        transition: 1s;
        width: 174px;
        height: 64px;

        background: #F3F6F9;
        box-shadow: ${boxShadow};
        border-radius: 8px;
        margin-right: 22px;
        padding: 16px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        .profile{
            width: 40px;
            height: 40px;
            border-radius: 50%;

            background: #D7E2EF;
            box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .button{
        transition:0.75s;
        width:34px;
        height:64px;
        border-radius:10px;
        display:flex;
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
        height: 106px;
        padding-top:17px;
        padding-bottom:17px;
        transition:0.75s;
        transform: ${mover}
    }
    .day{
        background-color: #F3F6F9;
    }
    .night{
        background-color: #0E1722;
    }
`)
    
export default Navbar