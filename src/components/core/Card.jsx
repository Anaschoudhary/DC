"use client";
import React from 'react';
import  '@/styles/card.scss';

const Card = ({ data, onClick, type }) => {
const dateAdded = data.date_added;
const year = dateAdded.split("-")[0];

  return (
    <div className='Card' onClick={onClick}>
      <div className='poster'>
        <img 
          src={data.image?.original_url || '/marvel-default.jpg'} 
          alt={data.name}
          onError={(e) => e.target.src = '/marvel-default.jpg'}
        />
      </div>
      {type === 'movie' && (
        <div className='extra-info'>
          <h3>{data.name}</h3>
          <div className='meta'>
            {data.runtime && <span>{data.runtime} min</span>}
            | 
            {data.release_date && (
              <span>
                {new Date(data.release_date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            )}
          </div>
        </div>    
      )}
      {type === 'character' && (
        <div className='extra-info character'>
          <div className='name-year'>
              <h3>{data.name}</h3> 
              <span>{year}</span>
          </div>
          <p className='real-name'>{data.real_name}</p>       
        </div>  

      )}
    </div>
  );
};

export default Card;