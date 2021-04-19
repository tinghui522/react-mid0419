import { Link } from "react-router-dom"

export default function Category() {
   return (
      <header className="header"> 
         <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/bigimg.png?raw=true" className="bigpic" /> 
         <div className="home-detail">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/detail.png?raw=true" className="detail-img"/>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/detailpic.png?raw=true" className="detailpic"/>
         </div>
         <div className="categories">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/categories-word.png?raw=true" className="categories-word"/>
            <div>
            <Link to="/perfume">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/perfume.png?raw=true" className="categories-img1"/>
            <hr className="hr-line1" />
            <p
                className="text-1">
                PERFUME
            </p>
            </Link>
            <p
                className="detail-1">
                Each of our simple, elegant Colognes is crafted from fine ingredients and designed to be layered with another on the skin to create something truly personal to you.
            </p>
            </div>
            <div>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/bathe.png?raw=true" className="categories-img2"/>
            <hr className="hr-line2" />
            <p
                className="text-2">
                BATH/BODY
            </p>
            <p
                className="detail-2">
                Create a new morning ritual, a night of pampering or a moment of escape. From uplifting Body & Hand Wash, to sumptuous Bath Oil, all steeped in a selection of our most delicious scents.
            </p>
            </div>
            <div>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/fragrance.png?raw=true" className="categories-img3"/>
            <hr className="hr-line3" />
            <p
                className="text-3">
                CANDLE
            </p>
            <p
                className="detail-3">
                Our candles are hand-crafted in England, passing through 16 pairs of skilled hands before completion. Indulge the senses and mix and match Travel, Home, Deluxe and Luxury Candles in your favourite scents.
            </p>
            </div>
            <div>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/home.png?raw=true" className="categories-img4"/>
            <hr className="hr-line4" />
            <p
                className="text-4">
                DIFFUSER
            </p>
            <p
                className="detail-4">
                Fill your home with fragrance. Our understated and sleek Diffuser design is crowned with 10 elegant rattan reeds. A timeless home accessory that will continue to enhance the space with scent.
            </p>
            </div>
         </div>
      </header>
   );
}