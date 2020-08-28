import React from 'react'
import Styled from '@emotion/styled'
import MenuBurger from '../Hamburger'
import styles from '../../styles/Home.module.css'
import Sidebar from '../Sidebar'
    
const MainLayout = (props) => {
    return (
        <Wrapper>
            <div className="sidebardiv">
                <Sidebar />
            </div>

            <MenuBurger />
            <div className="supermain">    
                {props.children}
                <footer className={styles.footer}>
                    <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                        by&nbsp;<strong> ERRBINT </strong>&nbsp;with ❤
                    </a>
                </footer>
            </div>
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
    .sidebardiv{
        height: 100%;
        width: 400px;
        
        position: fixed;
        top: 0;
        left: 0;
    }
`
export default MainLayout