import { useState } from 'react';
import { houses } from '../data/dummyData';
export default function AddHouse({ setPage, user }) {
  const [form, setForm] = useState({title: '', price: '', location: '', desc: ''});
  const handleAdd = () => {
    houses.push({...form, id: Date.now(), userId: user?.id});
    alert('House Added!');
    setPage('home');
  }
  return (
    <div style={{padding:'20px'}}>
      <h1>Add New House</h1>
      <input placeholder="Title" onChange={e => setForm({...form, title:e.target.value})} /><br/><br/>
      <input placeholder="Price" onChange={e => setForm({...form, price:e.target.value})} /><br/><br/>
      <input placeholder="Location" onChange={e => setForm({...form, location:e.target.value})} /><br/><br/>
      <button onClick={handleAdd}>Save</button>
      <button onClick={() => setPage('home')}>Back</button>
    </div>
  );
}