import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);  

  
  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { 
      setItemPrice(value);
    }
  };

  // Fetch items from backend when the component loads
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => {
        console.log('Data fetched from server:', response.data);
        setItems(response.data);
        setIsLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setIsLoading(false);  
      });
  }, []);

  const handleAddItem = () => {
    if (itemName.trim() === '' || itemPrice.trim() === '') return;

    const newItem = { name: itemName, price: itemPrice };

    if (editingIndex === -1) {
      // Create a new item (POST request)
      axios.post('http://localhost:5000/api/items', newItem)
        .then(response => {
          setItems([...items, response.data]);
        })
        .catch(error => {
          console.error('Error adding item:', error);
        });
    } else {
      // Update existing item (PUT request)
      axios.put(`http://localhost:5000/api/items/${editingId}`, newItem)
        .then(response => {
          const updatedItems = items.map((item, index) =>
            index === editingIndex ? response.data : item
          );
          setItems(updatedItems);
          setEditingIndex(-1);
          setEditingId(null);
        })
        .catch(error => {
          console.error('Error updating item:', error);
        });
    }

    setItemName('');
    setItemPrice('');
  };

  const handleEditItem = (index, id) => {
    setItemName(items[index].name);
    setItemPrice(items[index].price);
    setEditingIndex(index);
    setEditingId(id);
  };

  const handleDeleteItem = (id, index) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => {
        setItems(items.filter((_, i) => i !== index));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div className="App">
      <h1>CRUD Barang</h1>

      <div className="form">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Nama Barang"
        />
        <input
          type="text"
          value={itemPrice}
          onChange={handlePriceChange}  
          placeholder="Harga Barang"
        />
        <button onClick={handleAddItem}>
          {editingIndex === -1 ? 'Tambah Barang' : 'Update Barang'}
        </button>
      </div>

      {isLoading ? (
        <p>Sedang memuat data...</p>  
      ) : items.length > 0 ? (
        <table className="items-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{formatRupiah(item.price)}</td> 
                <td>
                  <button className="edit-btn" onClick={() => handleEditItem(index, item.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDeleteItem(item.id, index)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Belum ada barang.</p>
      )}
    </div>
  );
}

export default App;
