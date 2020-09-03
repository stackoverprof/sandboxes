import React from 'react'
import Styled from '@emotion/styled'
import Navbar from '../Navbar'
    
const MainLayout = (props) => {
    return (
        <Wrapper>
            <Navbar />
            {props.children}
        </Wrapper>
    )
}
    
const Wrapper = Styled.div`
    
`
    
export default MainLayout