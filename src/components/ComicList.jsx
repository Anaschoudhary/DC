"use client";
import React, { useEffect, useState } from "react";
import { fetchComics } from "../lib/comicVineComicApi";
import { fetchFromWp } from "@/lib/fetchFromWp";
import Card from "@/components/core/Card";
import '@/styles/comiclist.scss';
import { getResourceType } from '@/utils/getResourceType';

const GET_VILLAINS = `
  query GetVillains {
    page(id: "homepage", idType: URI) {
    pageComponents {
      villainFilter {
        name
      }
    }
  }
  }
`;

const ComicList = () => {
  const [comic, setComic] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [villains, setVillains] = useState([]);
  const [selectedVillain, setSelectedVillain] = useState("batman");

    useEffect(() => {
        const loadComic = async () => {
        const comic = await fetchComics();
        setComic(comic);
        };
        loadComic();
        fetchFromWp(GET_VILLAINS)
        .then(data => {
            setVillains(data.page.pageComponents.villainFilter);
            console.log("Full WPGraphQL response:", data);
            console.log("Villain Filter:", data?.page?.pageComponents?.villainFilter);
        })
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const loadComic = async () => {
        const comic = await fetchComics(selectedVillain); 
        setComic(comic);
        };
        loadComic();
    }, [selectedVillain]);


  return (
      <div className="comics">
        <div className="dc-comic">
        <h2>See Batman Comics</h2>

        <div className="villain-select">
            <p>Filter Comic by Villain</p>
            <select
                value={selectedVillain}
                onChange={(e) => setSelectedVillain(e.target.value)}
            >
                {villains.map((villain) => (
                <option key={villain.name} value={villain.name}>
                     {villain.name.charAt(0).toUpperCase() + villain.name.slice(1)}
                </option>
                ))}
            </select>
        </div>
        
        <div className="comics-grid">
          {comic.map((comic) => (
            <Card 
              key={comic.id} 
              data={comic}
              onClick={() => setSelectedComic(comic)}
              type={getResourceType(comic.api_detail_url)}
            />
          ))}
        </div>

        {selectedComic && (
          <div className="comic-modal" onClick={() => setSelectedComic(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn"  onClick={() => setSelectedComic(null)}>×</button>
              <img 
                src={selectedComic.image?.original_url || '/marvel-banner.jpg'} 
                alt={selectedComic.name}
                className="modal-poster"
              />
              <div className="modal-details">
                <h2>{selectedComic.name}</h2>
                <div className="details-meta">
                  
                </div>
                <p className="comic-description">
                  {selectedComic.deck || "No Information available."}
                </p>
              </div>
            </div>
          </div>
        )}
        </div>`
      </div>
  );
};

export default ComicList;