import React from 'react'
import Styled from '@emotion/styled'
import Tag from '../comps2/Badge2'
import Link from 'next/link'
    
const CardSB = ({title, description, urlimg, tag, page}) => {
    return (
        <Link href={page}>
            <a>
                <Wrapper>
                    <div className="preview">
                        <div className="preview-in" style={{backgroundImage : `url(${urlimg})`}}></div>
                    </div>
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Tag text={tag}/>
                    </div>
                </Wrapper>
            </a>
        </Link>
    );
}



const Wrapper = Styled.div`
    width: 340px;
    height: 186px;
    margin: 14px;

    background: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25), inset 1px 1px 0px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    :hover {
        border: 1px solid #b700ff;

        h3{
            color: #9900ff;
        }
        .preview-in{
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25), inset 1px 1px 0px rgba(0, 0, 0, 0.25);
            border: none;
            transform: scale(1.05);
        }
    }
    h3{
        font-weight: 900;
        font-family: 'Lato', sans-serif;
        font-size: 22px;
        margin: 0;
    }
    .preview{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .preview-in{
        transition: 0.25s;
        margin-left: 16px;
        border-radius: 12px;
        border: 1px solid #EEEEEE;
        width: 140px;
        height: 140px;  
        background-size: cover;
    }
    .content{
        padding: 28px 16px;
        padding-bottom: 24px;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;

        p{
            margin: 0;
            margin-bottom: 6px;
            color: gray;
            font-size: 16px;
        }
    }
`

export default CardSB