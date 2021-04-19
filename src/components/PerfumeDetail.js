import products from "../json/products.json"
import { useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import { Card } from "antd";
import { Link } from "react-router-dom"
import ProductItem from "./ProductItem";


export default function PerfumeDetail({product}) {
    
    return (
        <content className="content"> 
        <hr className="hr-line-productdetail" />
        <div className="perfume-title-bg">
        </div>
        <p className="perfume-title">PERFUMES</p>
        <div className="perfume-detail">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/product-word.png?raw=true" className="product-word"/>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/jo-malone-london-blossoms-yuja-cologne.png?raw=true" className="product-img" />
            
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/up-arrow.png?raw=true"className="arrow-icon"/>
            
        </div>
        <div>
        <Row gutter={[48,48]}>
            {products.map(product => (
                <Col 
                key={product.id} 
                sm={{ span: 12 }} 
                lg={{ span: 8 }}
                xl={{ span: 7 }}
                xxl={{ span: 2 }}
                >
                <ProductItem product={product}/>
                </Col>
            ))}
        </Row>
        </div>
       </content>
    );
 }

 