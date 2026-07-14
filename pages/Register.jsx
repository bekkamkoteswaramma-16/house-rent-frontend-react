import { useState } from 'react';
import { users } from '../data/dummyData';

export default function Register({ setPage }) {
  const [form, setForm] = useState({name: '', email: '', password: '', role: 'owner'});

  const handleRegister = () => {
    users.push({...form, id: Date.now().toString()});
    alert('Registered Successfully!');
    setPage('login');
  }

  return (
    <div style={{maxWidth:'400px', margin:'50px auto', padding:'20px', border:'1px solid gray'}}>
      <h1>Register </h1>
      <input placeholder="Name" style={{width:'100%', padding:'8px'}} onChange={e => setForm({...form, name:e.target.value})} /><br/><br/>
      <input placeholder="Email" style={{width:'100%', padding:'8px'}} onChange={e => setForm({...form, email:e.target.value})} /><br/><br/>
      <input placeholder="Password" type="password" style={{width:'100%', padding:'8px'}} onChange={e => setForm({...form, password:e.target.value})} /><br/><br/>
      <select onChange={e => setForm({...form, role:e.target.value})} style={{width:'100%', padding:'8px'}}>
        <option value="owner">House Owner</option>
        <option value="tenant">Tenant</option>
      </select><br/><br/>
      <button onClick={handleRegister} style={{width:'100%', padding:'10px'}}>Register</button>
      <p>Already have account? <span style={{color:'blue', cursor:'pointer'}} onClick={() => setPage('login')}>Login</span></p>
    </div>
  );
}