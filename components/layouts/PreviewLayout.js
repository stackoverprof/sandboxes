import React from 'react'
import Styled from '@emotion/styled'
import PodFloat from '../PodFloat'
    
const PreviewLayout = ({title, desc, tag, item, children}) => {
    return (
        <Wrapper>
            {children}
            <PodFloat title={title} desc={desc} tag={tag} item={item}/>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    
`
export default PreviewLayout