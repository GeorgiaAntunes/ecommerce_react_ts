import { useEffect, useState, ReactNode } from "react";
import { fetchProducts } from '../services/api'
import { ProductsProvider } from './StoreContext'

interface ProductDataLoaderProps {
    children: ReactNode;
  }

export const ProductDataLoader: React.FC<ProductDataLoaderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await fetchProducts();
          setLoading(false);
        } catch (error) {
          setError('Erro ao carregar os produtos');
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Carregando produtos...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
        <ProductsProvider>
            {children}
        </ProductsProvider>
    );
  };
  
  export default ProductDataLoader;