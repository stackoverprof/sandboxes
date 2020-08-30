import React from 'react'
import DarkModeBtn from '../../components/comps/DarkModeBtn1'
import Styled from '@emotion/styled'
import PreviewLayout from '../../components/layouts/PreviewLayout'
    
const Index = () => {
    return (
        <Wrapper className="target-background">
            <PreviewLayout  title="Dark Mode Skew" 
                            desc="Button with nice sliding icon" 
                            tag="Button" 
                            item="DarkModeBtn1.js">
                                
                <div className="aside">
                    <DarkModeBtn />
                    <p style={{fontFamily: "'Arial', sans-serif", color: "white"}}><strong>#BlackLivesMatter</strong></p>
                </div>
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

.aside{
    display: flex;
    justify-content: center;
    align-items: center;
}
`
export default Index