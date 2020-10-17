import React from 'react'
import Styled from '@emotion/styled'
import MainLayout from '../components/layouts/MainLayout.js'
import Link from 'next/link'
    
const Index = () => {
    return (
        <MainLayout>
            <Wrapper className="index-asbody">
                <div className="main-container">
                    <div className="inner-container">
                        <div className="supertitle">
                            <div className="mainicon">
                                <img src="/img/mainicon.svg" alt=""/>
                            </div>
                            <div className="title">
                                <h1>SandBoxes</h1>
                                <h2>by ERRBINT</h2>
                            </div>
                        </div>
                        <div className="twobutton">
                            <Link href="/explore">
                                <button className="blue">
                                    EXPLORE
                                    <img src="/img/icons/exploreicon.svg" alt="" className="explore-icon"/>
                                </button>
                            </Link>
                            <Link href="/docs">
                                <button className="white">
                                    DOCS
                                    <img src="/img/icons/docsicon.svg" alt="" className="docs-icon"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </MainLayout>
    );
}
    
const Wrapper = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    
    .main-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .inner-container{
        width: 562px;
    }
    
    .supertitle{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 160px;
        margin-top: 80px;
    }
    .title {
        margin-left: 20px;
        margin-bottom: 20px;
        h1{
            font-family: Lato;
            font-style: normal;
            font-weight: 800;
            font-size: 78px;
            line-height: 94px;

            margin: 0;    
            margin-bottom: -12px;        
            color: #000000;
            letter-spacing: -1px;
        }
        h2{
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 21px;
            line-height: 25px;
            
            margin: 0;
            margin-left: 4px;
            color: #09274B;
        }
        
    }
    .twobutton{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 14px;

        button{
            width: 268px;
            height: 98px;
            
            font-family: Lato;
            font-style: normal;
            font-weight: 800;
            font-size: 25px;
            line-height: 30px;
            
            box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25), inset 2px 2px 2px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            border: none;

            padding: 0 24px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .blue{
            color: #F3F6F9;
            background: #09274B;
        }
        .white{
            color: #09274B;
            background: #F3F6F9;            
        }
    }
`
    
export default Index