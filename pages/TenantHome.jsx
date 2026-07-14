import { houses } from '../data/dummyData';

export default function TenantHome({ setPage }) {
  return (
    <div style={{padding:'20px'}}>
      <button onClick={() => setPage('home')}>← Back</button>
      <h1>Tenant Dashboard 🏡</h1>
      <p>All available houses for rent</p>
      
      {houses.map(h => (
        <div key={h.id} style={{border:'1px solid gray', padding:'10px', margin:'10px 0'}}>
          <h3>{h.title} - ₹{h.price}</h3>
          <p>{h.location}</p>
        </div>
      ))}
    </div>
  );
}