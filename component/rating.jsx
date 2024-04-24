import React from 'react';

const Rating = (props) => {

    const stars = [];
    for (let index = 0; index < 5; index++) {
        if (index < props.count) {
            stars.push(<span key={index} className="fa fa-star" style={{color:"orange"}}></span>);
        } else {
            stars.push(<span key={index} className="fa fa-star"></span>);
        }
    }


    return (
        <div className='wrapper'>
            {stars}
        </div>
    );
};

export default Rating;