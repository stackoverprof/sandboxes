import React from 'react'
import Styled from '@emotion/styled'
import Card from '../../components/comps/CardSB'
    
const Index = () => {
    return (
        <Wrapper>
            <h1>Explore Components</h1>
            <div className="etalase">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
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