import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PurchasedItem from "./PurchasedItem";
import "./Purchased.css";
export const Purchased = () => {
  const satinAlinanlar = useSelector((state) => state.cinema.purchased);

  const [selectedFilm, setSelectedFilm] = useState();

  const getFilms = () => {
    let arr = [];
    satinAlinanlar.forEach((element) => {
      if (arr.indexOf(element.film.filmAdi) === -1) { 
        arr.push(element.film.filmAdi);
      }
    });
    return arr;
  };

  useEffect(() => { 
    setSelectedFilm("Seçiniz");
  }, []); 
 
  return (
    <div className="purchase">
      
      <select
        className="select-input"
        defaultValue={selectedFilm}
        onChange={(e) => setSelectedFilm(e.target.value)}
      >
        <option>Seçiniz</option>
        {getFilms().map((x) => {
          return ( 
            <option key={x} value={x}>
              {x}
            </option>
          );
        })}
      </select>

      {satinAlinanlar.filter(
          (x) =>x.film.filmAdi === selectedFilm
        ).map((x) => {
          return <PurchasedItem key={x} data={x} />;
        })}
    </div>
  );
};
