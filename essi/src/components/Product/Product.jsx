import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS

import React, { Fragment, useEffect, useState } from "react";
import "./Product.scss";
import { Link } from 'react-router-dom';

const Product = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);



  const [isVisible, setIsVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(true);

  const handleHover = () => {
    setHover(!hover);
    setShowSecondImage(!showSecondImage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const triggerOffset = window.innerHeight * 0.7;

      if (scrollTop > triggerOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <>
      <div className={`product ${isVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="product__wrapper">
            <img src="intro_leafs.png" data-aos="fade-down" data-aos-duration="2000" alt="" className="product__img2" />
            <h1 data-aos-duration="2000" data-aos="fade-up" className="product__h1">
              Выбирайте вкусные и <br /> надежные продукты
            </h1>

           
            <h3 className="product__h3" data-aos="fade-up" data-aos-duration="2000">
              Деликатные вкусы, заботливо приготовленные для вашего
              благополучия. <br /> Откройте для себя магию наших молочных
              радостей.
            </h3>
            <img src="intro_cloud.png" data-aos-duration="2000" data-aos="fade-up" alt="a" className="product__img" />
            <button
            data-aos-duration="2000"
            data-aos="fade-up"
              className="product__btn"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              style={{ backgroundColor: hover ? "white" : "rgb(252, 73, 73)" }}
            >
              <a href="/" className="a1">
                Подробнее
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="product2">
        <div className="container2">
          <h1  data-aos="zoom-in" data-aos-duration="2000" className="product2__h1">ПРОДУКТЫ</h1>
          <h2  data-aos="zoom-in" data-aos-duration="2000" className="product2__h2">ESSI ЙОГУРТ</h2>
          <div>
            <img  data-aos="fade-up" data-aos-duration="2000" src="intro_fruits.png" alt="" className="product2__img" />
          </div>
          <img src="bg.jpg"  alt=""  className="product2__img3" />
          <h3 className="product2__h3" data-aos-duration="2000" data-aos="zoom-in">
            ESSI Йогурт — исключительный вкус и нежная текстура, <br />{" "}
            созданные для моментов истинного удовольствия. <br /> Погрузитесь в
            мир свежести и заботы о <br />
            себе с каждым глотком.
          </h3>
          <img src="banana.png" alt="" className="product2__img2" data-aos="zoom-in" data-aos-duration="2000" />

          <button data-aos="fade-up"
            className="product2__btn2"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            data-aos-duration="2000"
            style={{ backgroundColor: hover ? "rgb(252, 73, 73)" : "white" }}
          >
            <a href="/" className="a1">
              Подробнее
            </a>
          </button>
          <h2 data-aos="fade-up" className="product2__h4" data-aos-duration="2000">ESSI СЫРОК</h2>
          <h3 data-aos="fade-up" className="product2__h5" data-aos-duration="2000">
            ESSI Сырок — искусство нежности в каждой упаковке. <br /> Откройте
            для себя богатство вкуса и питательности, в каждой порции, <br />{" "}
            которая ласкает ваше тело и удовлетворяет ваши <br />{" "}
            гастрономические желания
          </h3>
          <img data-aos="zoom-in" src="cirok.png" alt="" className="product2__img4" />
          <button data-aos="zoom-in"
          data-aos-duration="2000"
            className="product2__btn3"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ backgroundColor: hover ? "rgb(252, 73, 73)" : "white" }}
          >
            {" "}
            <a href="/" className="a1">
              {" "}
              Подробнее
            </a>
          </button>
          <img src="milk.png" data-aos="zoom-in" data-aos-duration="2000" alt="" className="product2__img5" />
          <button data-aos="zoom-in"
          data-aos-duration="2000"
            className="product2__btn4"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ backgroundColor: hover ? "rgb(252, 73, 73)" : "white" }}
          >
            <a href="/" className="a1">
              Подробнее
            </a>
          </button>
          <h2 className="product2__h2_2" data-aos="fade-up" data-aos-duration="2000"> ESSI КЕФИР</h2>
          <h3 className="product2__h3_2" data-aos="fade-up" data-aos-duration="2000">
            ESSI Кефир — утонченный вкус и польза для вашего организма. <br />{" "}
            Насладитесь освежающими нотками каждого глотка, <br /> который дарит
            вашему дню энергию и витальность.
          </h3>
        </div>
      </div>
      
    </>
  );
};

export default Product;
