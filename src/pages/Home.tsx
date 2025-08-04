import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="mt-24 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to the Theme Switcher App</h1>

      <p className="mb-6 max-w-2xl">
        This app demonstrates a multi-theme setup in React. Use the dropdown in the header to try out different looks!
      </p>

      <button className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
        Explore Now
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow p-4 transition-all"
            >
              <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain mb-3" />
              <h2 className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h2>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
