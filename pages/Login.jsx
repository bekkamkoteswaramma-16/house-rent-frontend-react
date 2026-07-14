import { useState } from 'react';
import { users } from '../data/dummyData';

export default function Login({ setPage, setUser }) {
  const [form, setForm] = useState({email: '', password: ''});

  const handleLogin = () => {
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if(user){
      setUser(user);
      setPage('home');
    } else alert('Wrong Email or Password');
  }

  return (
    <div style={{maxWidth:'400px', margin:'50px auto', padding:'20px', border:'1px solid gray'}}>
      <h1>Login</h1>
      <input placeholder="Email" style={{width:'100%', padding:'8px'}} onChange={e => setForm({...form, email:e.target.value})} /><br/><br/>
      <input placeholder="Password" type="password" style={{width:'100%', padding:'8px'}} onChange={e => setForm({...form, password:e.target.value})} /><br/><br/>
      <button onClick={handleLogin} style={{width:'100%', padding:'10px'}}>Login</button>
      <p>Don't have account? <span style={{color:'blue', cursor:'pointer'}} onClick={() => setPage('register')}>Register</span></p>
    </div>
  );
}