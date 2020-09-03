import React from 'react'
import Styled from '@emotion/styled'
import MainLayout from '../components/layouts/MainLayout.js'
    
const Index = () => {
    return (
        <MainLayout>
            <Wrapper className="index-asbody">
            </Wrapper>
        </MainLayout>
    );
}
    
const Wrapper = Styled.div`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
`
    
export default Index