import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { satinAl } from "../../store/cinema";
import "./SatinAlma.css";

export const SatinAlma = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [eposta, setEposta] = useState("");
  const [kredikart, setKredikart] = useState("");


  const { seciliKoltuklar, cinema } = props; 

  let dispatch = useDispatch(); 
  let navigate = useNavigate(); 

  const satinAlClick = () => {
    if (name !== "" && surname !== "" && eposta !== "") {
      const userDetails = { name, surname, eposta };

      dispatch(
        satinAl({
          filmId: cinema.id,
          koltuklar: seciliKoltuklar,
          userDetails: userDetails,
        })
      );
      //alert("Satın Alma Başarılı!! Faturanız mailinize gönderilmiştir.");
      
      sendEmail(eposta,mailIcerigi());
    
      navigate("/"); 
    } else {
      alert("Bos Alan Birakilamaz!");
    }
  };
  const sendEmail = (to, body) =>{
    window.Email.send({
      SecureToken: "e5bfec75-6537-4995-89e6-30747e24fb10",
      To : to,
      From : "i.s.parlak17@hotmail.com",
      Subject : "Bilet Satış Bilgilendirmesi",
      Body : body,
     }).then(
    message => alert(eposta + " mail adresine bilet detaylariniz iletilmistir!")
    );
  }
  const mailIcerigi=()=>{
    let mail=
        "isim : " +
        name +
        "\nsoyisim : " +
        surname +
        "\nsecilen koltuklar : " +
        seciliKoltuklar.map((x) => x.id).join(",") +
        "\nfiyatlar : " +
        seciliKoltuklar.length * cinema.fiyat
    ;
    return mail;
    
  }
  return (
    <div className="SatinAlma">
      <input
        className="inputBox"
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Soyisim"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Kredi Kartı"
        value={kredikart}
        onChange={(e) => setKredikart(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Eposta"
        value={eposta}
        onChange={(e) => setEposta(e.target.value)}
        
      />





      <button className="butonAl" onClick={() => satinAlClick()}>
        SATIN AL
      </button>
    </div>
  );
};
