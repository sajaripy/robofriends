import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', /* border: '5px solid black',*/ height: 'calc(100% - 187.899px)', position: 'fixed', top: '187.899px', scrollbarWidth: 'none', /* For Firefox */
            msOverflowStyle: 'none',  /* For Internet Explorer and Edge */ 
            width: '100%',
            margin: '0 auto' }}>
            {props.children}
        </div>
    )
}

export default Scroll;