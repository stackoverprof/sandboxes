import React from 'react'
import Styled from '@emotion/styled'
    
const Badge2 = ({text, color, bgcolor}) => {
    return (
        <Wrapper bgcolor={bgcolor} color={color}>
            <p>{text}</p>
        </Wrapper>
    );
}
    
const Wrapper =  Styled.div(({bgcolor, color}) =>`
    padding: 3px 6px 4px 6px;

    background-color: orange;
    color: white;
    background-color: ${bgcolor} !important;
    color: ${color} !important;
    border-radius: 4px;
    display:inline-block;

    p{
        margin: 0 !important;
        display:inline-block;
    }
`)

export default Badge2