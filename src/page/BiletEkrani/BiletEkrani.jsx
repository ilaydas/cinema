import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Koltuk from "../../components/Koltuk/Koltuk";
import { SatinAlma } from "../../components/SatinAlma/SatinAlma";
import { click } from "../../store/cinema";
import "./BiletEkrani.css";

const BiletEkrani = () => {
  let params = useParams(); 

  let dispatch = useDispatch(); 

  const cinema = useSelector(
    (
      state 
    ) => state.cinema.cinemaData.find((i) => i.id === Number(params.id)) 
  );

  const seciliKoltuklar = cinema.koltuklar.filter((x) => {
    return x.secildi === 1; 
  });

  const onKoltukClick = (koltuk) => {
    dispatch(click({ filmId: Number(params.id), koltuk: koltuk }));
  };

  return (
    <div className="BiletEkran">
      <h1 className="Baslik">Sinema No: {params.id}
      <h4>Sinema Film Adı: {cinema.filmAdi}</h4>
      <h4>Bilet Fiyatı: {cinema.fiyat}₺</h4>
      <h4>Toplam Tutar: {seciliKoltuklar.length * cinema.fiyat}₺</h4></h1>
      
      <div className="bilet-koltuk">
        {cinema.koltuklar.map((x, index) => {
        
          return (
            <Koltuk
              classname="koltuklar"
              onClick={() => onKoltukClick(x)}
              key={x.id}
              koltuk={x}
            />
          );
        })}
      </div>
      {seciliKoltuklar.length > 0 ? (
        <div>
          <SatinAlma cinema={cinema} seciliKoltuklar={seciliKoltuklar} />
        </div>
      ) : null}
    </div>
  );
};

export default BiletEkrani;
