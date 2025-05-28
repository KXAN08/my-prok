import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import Loader from '../../components/Loader';
import ErrorBox from '../../components/ErrorBox';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle, FaArrowLeft } from 'react-icons/fa';

const Users = () => {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} />;

  if (selectedUser) {
    return (
      <div className="p-6">
        <button
          onClick={() => setSelectedUser(null)}
          className="mb-4 text-blue-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Orqaga
        </button>
        <div className="border p-6 rounded shadow flex items-start space-x-6">
          <FaUserCircle className="w-20 h-20 text-gray-500" />
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {selectedUser.name.firstname} {selectedUser.name.lastname}
            </h2>
            <p className="text-gray-700 mb-1"><FaEnvelope className="inline mr-2" /> {selectedUser.email}</p>
            <p className="text-gray-700 mb-1"><FaPhone className="inline mr-2" /> {selectedUser.phone}</p>
            <p className="text-gray-700"><FaMapMarkerAlt className="inline mr-2" /> {selectedUser.address?.city}, {selectedUser.address?.street}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Foydalanuvchilar</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(user => (
          <li
            key={user.id}
            className="border p-4 rounded shadow flex items-start space-x-4 cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedUser(user)}
          >
            <FaUserCircle className="w-16 h-16 text-gray-500" />
            <div>
              <p className="font-semibold text-lg">{user.name.firstname} {user.name.lastname}</p>
              <p className="text-gray-600 text-sm"><FaEnvelope className="inline mr-2" /> {user.email}</p>
              <p className="text-gray-600 text-sm"><FaPhone className="inline mr-2" /> {user.phone}</p>
              <p className="text-gray-600 text-sm"><FaMapMarkerAlt className="inline mr-2" /> {user.address?.city}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Users);
