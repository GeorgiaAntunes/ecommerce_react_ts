
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'

interface ProductsContextType {
    products: ProductsProps[];
    // adicionarProduto: (produto: ProductsProps) => void;
    // removerProduto: (id: number) => void;
}
interface ProductsProps {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        count: number
    }
    title: string;

}
interface ProductsProviderProps {
    children: ReactNode;
}

const ProductsContext = createContext<ProductsContextType | undefined >(undefined);

export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const ProductsProvider: React.FC<ProductsProviderProps> = ({children}) => {
    const [products, setProducts] = useState<ProductsProps[]>([])

    useEffect(()=>{
        fetchData();
      
    },[])

    const fetchData = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
        }
        catch (error) {
            console.error('Erro ao carregar os produtos');
        }
    }

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
    // const [cart, setCart] = useState<IStoreProps[]>([]);

    // const addProducttoCart = (product: IStoreProps) => {
    //     setCart([...cart, product])
    // }

    // const removeProducttoCart = (id: number) => {
    //     const newCart = cart.filter((product)=>{ product.id !== id})
    //     setCart(newCart);
    // }






