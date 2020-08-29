import React from 'react'
import IosToggler from '../../components/comps/IosToggler1'
import Styled from '@emotion/styled'
import PreviewLayout from '../../components/layouts/PreviewLayout'
    
const Index = () => {
    return (
        <Wrapper>
            <PreviewLayout title="iOS Toggler" desc="Checkbox in a cool way and gradient-able" tag="Button" item="IosToggler1.js">
                <form action="" method="post" className="pen">
                    <IosToggler defaulted={true} name="subscribtionletter"/>
                    <IosToggler name="readagreement"/>
                </form>
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

.pen{
    margin: auto auto;
    width: 150px;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
  
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  }
`
export default Index