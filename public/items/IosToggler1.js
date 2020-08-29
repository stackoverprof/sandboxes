import React, { useState } from 'react'

const IosToggler1 = ({name, defaulted}) => {
    if (typeof defaulted == 'undefined') defaulted = false;
    
    const [isActive, setisActive] = useState(defaulted ? "active" : "");
    const [isOn, setisOn] = useState(defaulted ? "on" : "");
    const [isChecked, setisChecked] = useState(defaulted ? true : false);

    function switcher() {
        if (isActive == "") {
            setisActive("active")
            setisOn("on")
            setisChecked(true)
        } else {
            setisActive("")
            setisOn("")
            setisChecked(false)
        }
    }

    return (
        <div>
            <div className="btncontainer">
                <div className={`button ${isActive}`} onClick={() => switcher()} id="btn">
                    <input checked={isChecked} className="hidecheckbox" type="checkbox" id="chk" name={name}></input>
                    <div className={`slider ${isOn}`} id="sld"></div>
                </div>
            </div>


            <style>{`
                
                .pen{
                    margin: auto auto;
                    width: 150px;
                    height: 150px;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    flex-direction:column;

                    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
                }
                .hidecheckbox{
                    position: absolute;
                    left:100px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .btncontainer{
                    overflow:hidden;
                    width: 68px;
                    height: 40px;
                    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.25);
                    border-radius: 53.5px;
                    display: flex;
                    align-items: center;
                    margin:6px;
                    transition:0.3s;
                    background: linear-gradient(180deg, #7AFE97 0%, #50FFEE 100%);
                }
                .button{
                    overflow:hidden;
                    width: 72px;
                    height: 42px;
                    background-color: white;
                    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.25);
                    border-radius: 53.5px;
                    display: flex;
                    align-items: center;
                    padding-left: 5px;
                    padding-right: 5px;
                    transition:0.3s;
                }
                .slider{
                    z-index:2;
                    width: 32px;
                    height: 32px;
                    left: 97px;
                    top: 68px;

                    background: #FFFFFF;
                    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
                    border-radius: 53.5px;
                    transition:0.3s;
                }
                .active{
                    background-color:rgba(0,0,0,0);
                }
                .on{
                    transform : translateX(26px);
                }

            `}
            </style>

        </div>
    );
}

export default IosToggler1