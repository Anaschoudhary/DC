"use client";
import React, { useEffect, useState } from "react";
import { fetchChars } from "../lib/comicVineCharsApi";
import Card from "@/components/core/Card";
import '@/styles/charslist.scss';
import { getResourceType } from '@/utils/getResourceType';

const CharsList = () => {
  const [chars, setchars] = useState([]);
  const [selectedchar, setSelectedchar] = useState(null);

  useEffect(() => {
    const loadchars = async () => {
      const chars = await fetchChars(8); ;
      setchars(chars);
    };
    loadchars();
  }, []);

  return (
      <div className="characters">
        <div className="dc-chars">
        <h2>See DC Heros</h2>
        
        <div className="chars-grid">
          {chars.map((char) => (
            <Card 
              key={char.id} 
              data={char}
              onClick={() => setSelectedchar(char)}
              type={getResourceType(char.api_detail_url)}
            />
          ))}
        </div>

        {selectedchar && (
          <div className="chars-modal" onClick={() => setSelectedchar(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn"  onClick={() => setSelectedchar(null)}>×</button>
              <img 
                src={selectedchar.image?.original_url || '/marvel-banner.jpg'} 
                alt={selectedchar.name}
                className="modal-poster"
              />
              <div className="modal-details">
                <h2>{selectedchar.name}</h2>
                <div className="details-meta">
                  
                </div>
                <p className="chars-description">
                  {selectedchar.deck || "No Information available."}
                </p>
              </div>
            </div>
          </div>
        )}
        </div>`
      </div>
  );
};

export default CharsList;