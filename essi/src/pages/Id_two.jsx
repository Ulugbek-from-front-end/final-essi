import React, { useState } from 'react'
import "./Product_page.scss";
import {  useParams } from 'react-router-dom';

 
import "./Product_page.scss";
const Id_two = () => {
    const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
    const [products, setProducts] = useState([
        {
            "id": "2",
            img: "../../public/banan_kivi_3.png",
            "title": "Йогурт банан - киви 2.5 %",
            "tag": "Йогурт",
            "description": "Пищевая и энергетическая ценность в 100 г продукта Жир-1,5 г, Белок-2,85 г, Углеводы-12,8 г Энергетическая ценность-76 ккал / 321 кДж «Клубника»  Йогурт полужирный 2,5% с изысканным вкусом клубники – это погружение в мир нормализованного коровьего молока, сладкого сахара и сочной клубничной нежности, создающее в каждой порции яркое воспоминание о летнем утре с первыми лучами солнца и свежими ягодами, окутанными нежным ароматом. Состав: молоко коровье нормализованное, сахар, наполнитель клубника (сахар, клубника, вода, загуститель: модифицированный крахмал, регуляторы кислотности: цитрат натрия, лимонная кислота, красители: антоцианы, экстракт паприки, ароматизаторы: «Крем», «Клубника»), сухое обезжиренное молоко, закваска. Дата выработки и годен до (число, месяц, год): указано на упаковке. До и после вскрытия упаковки хранить при температуре от +2°С до +6°С. Масса нетто: 95г±5г"
        }
    ]);
    return (

        <div className="container4">

            <div className="flex_wrapper">
                <div className="total_new_card">
                    {products.map((product) => (
                        
                            <div className="new_card">
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
                <h1 className="total_new_card__h1">{selectedProduct.title}</h1>
                <p className="total_new_card__description">{selectedProduct.description}</p>
            </div>
        </div>
    );

}

export default Id_two