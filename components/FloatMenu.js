import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const FloatMenu = ({animaWidth}) => {
    return (
        <Wrapper animaWidth={animaWidth}>
            <h4>MENU</h4>
            <div className="search"></div>
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
        </Wrapper>
    );
}
    
const Wrapper = Styled.div(({animaWidth})=>`
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
}
    
`)
    
export default FloatMenu