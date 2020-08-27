import React from 'react'
import Styled from '@emotion/styled'
    
const CardSB = () => {
    return (
        <Wrapper>
            <div className="preview">
                <div className="previewin">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="content">
                <h3>iOS Toggler</h3>
                <p>Function just like a checkbox, in a cool way</p>
            </div>
        </Wrapper>
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

    .preview{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .previewin{
        margin-left: 16px;
        border-radius: 12px;
        width: 140px;
        height: 140px;
        background-color: grey;
    }
    .content{
        padding: 20px;
        width: 50%;
    }
`
export default CardSB