import React from 'react'
import Styled from '@emotion/styled'
    
const Badge2 = ({text}) => {
    return (
        <Wrapper>
            <p>{text}</p>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    height: 26px;
    padding: 3px 6px;

    background: #9900FF;
    border-radius: 4px;

    p{
        color: white !important;
        margin: 0 !important;
    }
`
export default Badge2