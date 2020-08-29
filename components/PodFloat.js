import React from 'react'
import Styled from '@emotion/styled'
import Tag from '../components/comps2/Badge2'
    
const PodFloat = ({title, desc, tag, item}) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <hr/>
            <div className="bottompart">
                <div className="bottomleft">
                    <p>{desc}</p>
                    <div className="tag">
                        <Tag text={tag} color="black" bgcolor="white"/>
                    </div>
                </div>
                <div className="divdownload">
                    <a className="download-btn" href={`/items/${item}`} target="_blank" download>
                        <img src="/img/download.svg" alt=""/>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    width: 350px;

    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 12px;
    background-color: rgba(0,0,0,0.75);
    color: white;

    padding-bottom: 20px;
    
    h1{
        font-size: 26px;
        margin-bottom: 12px;
    }
    h1, p{
        margin-left: 22px;
    }
    p{
        margin-bottom: 16px;
        display: inline-block;
    }
    .bottompart{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .bottomleft{
        width: 240px;
    }
    .download-btn{
        height: 60px;
        width: 60px;
        border: 2px solid white;
        margin-right: 22px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }
    hr{
        margin: 0 22px;
    }
    .tag{
        margin-left: 22px;
    }
    .divdownload{
    }
`
export default PodFloat