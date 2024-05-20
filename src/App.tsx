import React from "react";
import { ProductsList } from "./pages/ProductsList";
import { ProductDataLoader } from './context/ProductDataLoader'

const App: React.FC = () => {
  return (
    <div>
      <h1>Minha Loja de E-commerce</h1>
      <ProductDataLoader>
        <ProductsList/>
      </ProductDataLoader>
    </div>
  );
};

export default App;