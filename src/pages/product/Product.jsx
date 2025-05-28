import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { FaArrowLeft } from 'react-icons/fa';

const Product = () => {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/products')
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Yuklanmoqda...</p>;
  if (error) return <p className="text-red-500">Xatolik: {error}</p>;

  if (selectedProduct) {
    return (
      <div className="p-6">
        <button
          onClick={() => setSelectedProduct(null)}
          className="mb-4 text-blue-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Orqaga
        </button>
        <div className="border p-6 rounded shadow">
          <img src={selectedProduct.image} alt={selectedProduct.title} className="h-60 mx-auto mb-4 object-contain" />
          <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
          <p className="text-green-600 font-bold text-xl mb-2">${selectedProduct.price}</p>
          <p className="text-gray-700">{selectedProduct.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="h-40 mx-auto mb-2 object-contain" />
            <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
            <p className="text-green-600 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Product);
