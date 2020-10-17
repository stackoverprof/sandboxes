import React,{ useState } from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const FloatMenu = ({animaWidth, resizeinput, fadeinput}) => {

    return (
        <Wrapper animaWidth={animaWidth} resizeinput={resizeinput} fadeinput={fadeinput}>
            <h4>MENU</h4>
            <div className="search">
                <form className="search-inner">
                    <input type="text" placeholder="Search"/>
                    <button type="submit"></button>
                </form>
            </div>
            <div className="iconic">
                <Link href=""><a>
                    <div className="img-div">
                        <img src="/img/menu/github.svg" alt=""/> 
                    </div>
                    <p>GitHub</p>   
                </a></Link>
                <Link href=""><a>
                    <div className="img-div">
                        <img src="/img/menu/contact.svg" alt=""/> 
                    </div>
                    <p>Contact</p>  
                </a></Link>
                <Link href=""><a>
                    <div className="img-div">
                        <img src="/img/menu/help.svg" alt=""/> 
                    </div>  
                    <p>Help</p> 
                </a></Link>
            </div>
            <Link href="/donate">
                <button>
                    BUY ME A <br/> COFFEE
                </button>
            </Link>
            <Link href="/donate">
                <button className="sign-btn">
                    SIGN IN / UP
                </button>
            </Link>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({animaWidth, resizeinput, fadeinput})=>`
padding-top: 18px;

overflow-y: hidden;

display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

height: ${animaWidth};
width: 174px;

background: #F3F6F9;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;

transition: 1s;

.search-inner{
    display: ${resizeinput};
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 120px;
    input{
        filter: opacity(${fadeinput});
        transition: 0.25s;
        border: none;
        width: 120px;
        padding-left: 14px;
        background: none;
        height: 80%;
        &:focus{
            outline: none;
        }
    }
    button{
        width: 0;
        height: 0;
        position: absolute;
    }
}
.sign-btn{
    background: none;
    box-shadow: inset 0px 0px 0px 1.5px #09274B;
    color: #09274B;
    &:focus{
        background: #92AED0;
        border: none;
        color: white;
    }
}
h4{
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
    text-align: center;

    color: #B3C9E3;
    margin: 0;
}

.search{
    width: 152px;
    height: 42px;
    margin-top: 16px;
    margin-bottom: 4px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: #FFFFFF;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}
.iconic{
    width: 148px;
    height: 68px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 10px;

    a{
        width: 42px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;

        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 10px;
        text-align: center;

        color: #09274B;

        p{
            margin: 6px;
        }

    }
}

button{
    width: 152px;
    height: 59px;
    left: 1181px;
    top: 283px;

    background: #09274B;
    border-radius: 8px;
    border: none;
    
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    
    color: #FFFFFF;
    margin-bottom: 12px;
    &:focus{
        outline: none;
        background: #92AED0;
    }
}
    
`)
    
export default FloatMenu