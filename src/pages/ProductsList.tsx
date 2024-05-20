import React from 'react'
import { useProducts } from '../context/StoreContext';
import '../styles/ProductList.Style.css'

export const ProductsList: React.FC = () => {
    const { products } = useProducts();

    return (
        <>
        <div>Available Products:</div>
        <div className='wrapper'>{products.map( (product) => {
            return (
                <div key={product.id}>
                    <div className='container'>
                        <img className='containerItemImg' src={product.image}></img>
                        <div className='containerItems' >{product.title}</div>
                        <div className='containerItems' >R$:{product.price}</div>
                        {/* <button onClick={() => addProducttoCart(item)}>Add to Cart</button> */}
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}

