import React from 'react'
import Styled from '@emotion/styled'
    
const Sidebar = () => {
    return (
        <Wrapper>
            <img width="264" src="/compgif/example.png" alt=""/>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    height: 100%;
    width: 400px;
    border: none;
    background-color: #fefefe;
    box-shadow: 0 0 8px rgba(0,0,0,0.20);
    
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Sidebar