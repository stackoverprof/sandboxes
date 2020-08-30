import React from 'react'
import Styled from '@emotion/styled'
import NoSSR from 'react-no-ssr'
import PodFloat from '../PodFloat'
import Draggable from "react-draggable";
    
const PreviewLayout = ({title, desc, tag, item, children}) => {
    return (
        <Wrapper>
            {children}
            <NoSSR>
                <Draggable>
                    <PodFloat title={title} desc={desc} tag={tag} item={item}/>
                </Draggable>
            </NoSSR>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    
`
export default PreviewLayout