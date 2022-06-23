import React from "react";
import { useNavigate } from "react-router-dom";
import "./FilmListItem.css";
const FilmListItem = (props) => {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const navigate = useNavigate();

  const biletAl = () => {
    navigate("/bilet/" + id);
  };

  const { id, salon, filmAdi, fiyat, tarih,image} = props.cinema;
  return (
    <div onClick={() => biletAl()} className="film-list-item">
      {/* <h1>id:{id}</h1> */}
      <div align="center">
        <img src={image} alt="Resim Yok" width="300"/>
      </div>
      <div className="film-list-item-row">
        <h1>Salon No: {salon}</h1>
      </div>
      <div className="film-list-item-row">
        <h1>{filmAdi}</h1>
      </div>
      <div className="film-list-item-row">
        <h1>Tarih: {tarih.toLocaleDateString("tr-TR", options)}</h1>
      </div>
      <div className="film-list-item-row">
        <h1>Bilet Fiyatı: {fiyat}</h1>
      </div> 
    </div>
  );
};

export default FilmListItem;
