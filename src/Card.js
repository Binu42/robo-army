import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {
    return (
        <div className='bg-yellow dib pa2 ma2 grow bw2 shadow-5 card'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div className='tc'>
                <h2>{name}</h2>
                <p className='underline'>{email}</p>
            </div>
        </div>
    );
}

export default Card;