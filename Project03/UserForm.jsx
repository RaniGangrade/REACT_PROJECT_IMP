import React, { useState, useEffect } from 'react';
import './App.css'
const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.email && userData.phone) {
      if (selectedUser) {
        // Update existing user
        const updatedUsers = userList.map((user) =>
          user === selectedUser ? { ...userData } : user
        );
        setUserList(updatedUsers);
        setSelectedUser(null);
      } else {
        // Add new user
        const newUserList = [...userList, userData];
        setUserList(newUserList);
      }
      localStorage.setItem('userList', JSON.stringify(userList));
      setUserData({ name: '', email: '', phone: '' });
    } else {
      alert('Please fill out all fields');
    }
  };

  const handleEdit = (user) => {
    setUserData(user);
    setSelectedUser(user);
  };

  const handleDelete = (user) => {
    const updatedUsers = userList.filter((u) => u !== user);
    setUserList(updatedUsers);
    localStorage.setItem('userList', JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('userList'));
    if (storedUsers) {
      setUserList(storedUsers);
    }
  }, []);

  return (
    <div>
      <div  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
    <div className="modal-content">
      <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center" > 
      <div className="flex flex-col">
        <label>
          Name:
        </label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
      </div>
      <div className="flex flex-col mt-2">
        <label>
          Email:
        </label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
        </div>
        <div className="flex flex-col mt-2">
        <label>
          Phone:
        </label>
          <input type="number" name="phone" value={userData.phone} onChange={handleInputChange} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"/>
        </div>

        <button className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300" type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
      </form>
      </div>
      </div>
      <h2 className="text-orange-600"> User List</h2>
      <table  className="shadow-lg bg-white border-separate">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Email</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Phone</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Update</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td className="border px-8 py-4">{user.name}</td>
              <td className="border px-8 py-4">{user.email}</td>
              <td className="border px-8 py-4">{user.phone}</td>
              <td className="border px-8 py-4"><button className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300" onClick={() => handleEdit(user)}>Edit</button></td>
              <td className="border px-8 py-4"><button className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300" onClick={() => handleDelete(user)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;
