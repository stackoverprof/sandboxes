import React, { useState } from 'react'
import Styled from '@emotion/styled'
    
const Hamburger = () => {
    const [action, setAction] = useState("")
    const [setAside, setSetAside] = useState("")
    const [opac, setOpac] = useState(0)
    const [delayer, setDelayer] = useState("0")
    const [delayer2, setDelayer2] = useState("0.6s")
    const [hideFirst, setHideFirst] = useState("-1")

    function doAction() {
        if (action == "" || action == "active back") {
            setSetAside("200px")
            setOpac(1)
            setAction("active")
            setDelayer("0.6s");
            setDelayer2("0");
            setHideFirst("100");
        } else {
            setSetAside("")
            setOpac(0)
            setAction("active back")
            setDelayer("0");
            setDelayer2("0.2s");
            setHideFirst("-1");
        }
        
    }

    return (
        <Wrapper onClick={() => doAction()}>
            <div className={`menu ${action}`}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <style>{`
                .supermain{
                    transform: translateX(${setAside});
                    transition: 1s;
                    transition-delay: ${delayer2};
                }
                .sidebardiv{
                    filter: opacity(${opac});
                    transition: 1s;
                    transition-delay: ${delayer};
                    z-index: ${hideFirst};
                }
            `}</style>

        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    z-index:101;
    transform: scale(0.5);
    width: 60px;
    height: 60px;
    position: fixed;
    top: 12px;
    left: 12px;
    .menu {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
        overflow: hidden;
        padding: 15px;
        cursor: pointer;
      }
      .menu.active:before {
        -webkit-animation: slideLeft 0.2s 0.05s ease-out forwards;
                animation: slideLeft 0.2s 0.05s ease-out forwards;
      }
      .menu.active:after {
        -webkit-animation: slideRight 0.2s 0.05s ease-out forwards;
                animation: slideRight 0.2s 0.05s ease-out forwards;
      }
      .menu.active .bar {
        -webkit-animation: rotate45 0.2s ease-out forwards;
                animation: rotate45 0.2s ease-out forwards;
      }
      .menu.active .bar:last-child {
        -webkit-animation: rotate135 0.2s 0.2s ease-out forwards;
                animation: rotate135 0.2s 0.2s ease-out forwards;
      }
      .menu.back:before {
        -webkit-transform: translateX(-120%);
                transform: translateX(-120%);
        -webkit-animation: slideBack 0.2s 0.05s ease-out forwards;
                animation: slideBack 0.2s 0.05s ease-out forwards;
      }
      .menu.back:after {
        -webkit-transform: translateX(120%);
                transform: translateX(120%);
        -webkit-animation: slideBack 0.2s 0.05s ease-out forwards;
                animation: slideBack 0.2s 0.05s ease-out forwards;
      }
      .menu.back .bar {
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        -webkit-animation: rotateBack 0.2s ease-out forwards;
                animation: rotateBack 0.2s ease-out forwards;
      }
      .menu.back .bar:last-child {
        -webkit-transform: rotate(-135deg);
                transform: rotate(-135deg);
        -webkit-animation: rotateBack 0.2s 0.2s ease-out forwards;
                animation: rotateBack 0.2s 0.2s ease-out forwards;
      }
      .menu:before {
        content: '';
        display: block;
        width: 75px;
        height: 10px;
        background: #000;
      }
      .menu:after {
        content: '';
        display: block;
        width: 75px;
        height: 10px;
        background: #000;
      }
      .menu .bar {
        display: block;
        width: 75px;
        height: 10px;
        background: #000;
        margin: 14px 0;
      }
      .menu .bar:last-child {
        opacity: 0;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        position: absolute;
        top: 25px;
      }
      @-webkit-keyframes rotate135 {
        form {
          opacity: 1;
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
        to {
          opacity: 1;
          -webkit-transform: rotate(-135deg);
                  transform: rotate(-135deg);
        }
      }
      @keyframes rotate135 {
        form {
          opacity: 1;
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
        to {
          opacity: 1;
          -webkit-transform: rotate(-135deg);
                  transform: rotate(-135deg);
        }
      }
      @-webkit-keyframes rotate45 {
        to {
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
      }
      @keyframes rotate45 {
        to {
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
      }
      @-webkit-keyframes rotateBack {
        to {
          -webkit-transform: rotate(0);
                  transform: rotate(0);
        }
      }
      @keyframes rotateBack {
        to {
          -webkit-transform: rotate(0);
                  transform: rotate(0);
        }
      }
      @-webkit-keyframes slideRight {
        to {
          -webkit-transform: translateX(122%);
                  transform: translateX(122%);
        }
      }
      @keyframes slideRight {
        to {
          -webkit-transform: translateX(122%);
                  transform: translateX(122%);
        }
      }
      @-webkit-keyframes slideLeft {
        to {
          -webkit-transform: translateX(-122%);
                  transform: translateX(-122%);
        }
      }
      @keyframes slideLeft {
        to {
          -webkit-transform: translateX(-122%);
                  transform: translateX(-122%);
        }
      }
      @-webkit-keyframes slideBack {
        to {
          -webkit-transform: translateX(0);
                  transform: translateX(0);
        }
      }
      @keyframes slideBack {
        to {
          -webkit-transform: translateX(0);
                  transform: translateX(0);
        }
      }
      
`
export default Hamburger