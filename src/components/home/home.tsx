import React from 'react';
import './home.css';
import Product from "../product";
import IProduct from "../../types/product";

const Home = () => {  
  const t1 = "The lean startup: ";
  const im1 = "https://m.media-amazon.com/images/I/41Z7qvCN+UL._AC_SY200_.jpg";
  const price1=19.99;
  const r1 = 3;
  const id1 = "1";
  const p1: IProduct = {id: id1, title: t1, image: im1, price: price1, rating: r1};

  const t2 = "The Wemo light switch ";
  const im2 = "https://m.media-amazon.com/images/I/310bMKQjT5L._AC_SY200_.jpg";
  const price2=39.99;
  const r2 = 2;
  const id2 = "2";
  const p2: IProduct = {id: id2, title: t2, image: im2, price: price2, rating: r2};

  const t3 = "Apple lightning to USB cable ";
  const im3 = "https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY400_.jpg";
  const price3=129.99;
  const r3 = 5;
  const id3 = "3";
  const p3: IProduct = {id: id3, title: t3, image: im3, price: price3, rating: r3};

  const t4 = "The lean startup: ";
  const im4 = "https://m.media-amazon.com/images/I/41Z7qvCN+UL._AC_SY200_.jpg";
  const price4=19.99;
  const r4 = 1;
  const id4 = "4";
  const p4: IProduct = {id: id4, title: t4, image: im4, price: price4, rating: r4};

  const t5 = "The lean startup: ";
  const im5 = "https://m.media-amazon.com/images/I/41Z7qvCN+UL._AC_SY200_.jpg";
  const price5=1.99;
  const r5 = 2;
  const id5 = "5";
  const p5: IProduct = {id: id5, title: t5, image: im5, price: price5, rating: r5};

  const t6 = "The lean startup: How product innovation creates raducakk successfl businesses paperback";
  const im6 = "https://m.media-amazon.com/images/I/41Z7qvCN+UL._AC_SY200_.jpg";
  const price6=12.99;
  const r6 = 5;
  const id6 = "6";
  const p6: IProduct = {id: id6, title: t6, image: im6, price: price6, rating: r6};


  return (
    <div className="home">
      <div className="div home-container">
        <img 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          className="home-image"
          alt=""
        />

        <div className="home-row">
          <Product product={p1}/>
          <Product product={p2}/>
        </div>

        <div className="home-row">
          <Product product={p3}/>
          <Product product={p4}/>
          <Product product={p5}/>
        </div>

        <div className="home-row">
          <Product product={p6}/>
        </div>

      </div>
    </div>
  );
}

export default Home;

