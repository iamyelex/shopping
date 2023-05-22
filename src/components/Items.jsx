import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Items = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    getItems();
  }, []);

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {products ? (
        products.map((list) => (
          <ItemCard
            key={list.id}
            image={list.image}
            price={list.price}
            title={list.title}
            description={list.description}
          />
        ))
      ) : (
        <p className="text-center">loading....</p>
      )}
    </section>
  );
};

export default Items;
