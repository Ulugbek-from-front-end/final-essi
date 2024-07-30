import React, { useState } from 'react'
import "./Product_page.scss";
import {  useParams } from 'react-router-dom';
 
import "./Product_page.scss";
const Id_six = () => {
  const [products, setProducts] = useState([
    {
      "id":"6",
      "title":"Творог 5%, 200 гр",
      "img":"../../public/творог_5__2_1.png",
      "tag":"Творог",
      "description":"Пищевая ценность в 100 г продукта белок-17 г, углеводы-1,4 г, жир-5,0 г Энергетическая ценность-118,3 ккал / 498 кДж. Откройте для себя великолепный мир вкуса с нашим нежирным творогом, содержащим 5% жира. Этот идеально сбалансированный продукт, созданный из свежего коровьего молока и молока обезжиренного, не только удовлетворит ваш вкус, но и обогатит вас полезными белками. Наслаждайтесь каждым кусочком, зная, что вы делаете правильный выбор для своего здоровья и удовольствия от вкуса. Состав: Коровье молоко, молоко обезжиренное, закваска. Дата выработки и годен до (число, месяц, год): указано на упаковке. Срок хранения при температуре от +2°С до +6°С и относительной влажности воздуха не более 70 %. После вскрития упаковки срок хранения не более 24 часа при температуре от +2°С до +6°С Масса нетто: 400г±5г"
  }
  ]); 
  return (
      
    <div className="container4">

                <div className="flex_wrapper">
                    <div className="total_new_card">
                        {products.map((product) => (
                          
                                <div className="   new_card">
                                    <img src={product.img} alt={product.title} className="total_new_card__img" />
                                    <h1 className="total_new_card__h1">{product.title}</h1>
                                    <p className="total_new_card__description">{product.description}</p>
                                    <button 
            className="btn4"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ backgroundColor: hover ? "rgb(252, 73, 73)" : "white" }}
          >
            <a href="/" className="a1">
              Вернуться на лобби
            </a>
          </button> 
                                </div>
                            
                        ))}
                    </div>
                </div>
          

                <ProductDetails products={products} />
          
    </div>

);
}

const ProductDetails = ({ products }) => {
const { id } = useParams();
const selectedProduct = products.find(product => product.id === id);

  
if (!selectedProduct) return <div></div>;
return (
<div className="modal">
    <div className="modal-content">
        <span className="close">&times;</span>
        <img src={selectedProduct.img} alt={selectedProduct.title} className="total_new_card__img" />
        <h1 className="total_new_card__h1">{selectedProduct.title}</h1>
        <p className="total_new_card__description">{selectedProduct.description}</p>
    </div>
</div>
);

}

export default Id_six