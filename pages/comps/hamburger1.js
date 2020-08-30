import React from 'react'
import Styled from '@emotion/styled'
import PreviewLayout from '../../components/layouts/PreviewLayout'
import Hamburger from '../../components/comps/Hamburger1'
    
const Hamburger1 = () => {
    return (
        <Wrapper>
            <PreviewLayout  title="Hamburger Animated" 
                desc="Minimalistic animation, pen by @AlikinVV" 
                tag="Button" 
                item="Hamburger1.js">

                <Hamburger />

            </PreviewLayout>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;

`
    
export default Hamburger1