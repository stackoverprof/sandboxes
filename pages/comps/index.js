import React from 'react'
import Styled from '@emotion/styled'
import Card from '../../components/comps/CardSB'
import MainLayout from '../../components/layouts/MainLayout'
    
const Index = () => {
    return (
        <Wrapper>
            <MainLayout>
                <h1>Explore Components</h1>
                <div className="etalase">
                    <Card title="Dark Mode Skew" description="Button with nice sliding icon" urlimg="/compgif/darkskew.gif" tag="Button" page="/comps/dark-mode-btn1"/>
                    <Card title="iOS Toggler" description="Checkbox in a cool way and gradient-able" urlimg="/compgif/iostoggler.gif" tag="Button" page="/comps/ios-toggler"/>
                    <Card tag="soon" page="/comps"/>
                    <Card tag="soon" page="/comps"/>
                    <Card tag="soon" page="/comps"/>
                    <Card tag="soon" page="/comps"/>
                    <Card tag="soon" page="/comps"/>
                    <Card tag="soon" page="/comps"/>
                </div>
            </MainLayout>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    margin: 50px;
    margin-top: 80px;
    text-align: center;
}
.etalase{
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
`
export default Index