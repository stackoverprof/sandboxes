import React from 'react';

const Badge = ({kind, text}) => {
    return (
        <div>
            <div className={`gotocomps ${kind}`}>
                <p>{text}</p>
            </div>
            
            <style>
            {`
                .gotocomps{
                    background-color: #eeeeee;
                    color: #444444;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 12px;
                }
                .gotocomps p{
                    margin: 0;
                }
                .palegray{
                    background-color: #eeeeee;
                    color: #444444;
                }
            `}
            </style>
        </div>
    );
}

export default Badge;
