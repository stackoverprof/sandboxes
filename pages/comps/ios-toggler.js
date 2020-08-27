import React from 'react'
import IosToggler from '../../components/comps/IosToggler1'

const index = () => {
    return (
        <div>
            <form action="" method="post" className="pen">
                <IosToggler defaulted={true} name="subscribtionletter"/>
                <IosToggler name="readagreement"/>
            </form>

            <style>{`
                html{
                    height:100%;
                }
                body{
                    background-color:#EFEFEF;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height: 100%;
                }
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
            `}
            </style>

        </div>
    );
}

export default index