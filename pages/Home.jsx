import { houses } from '../data/dummyData';

export default function Home({ setPage, setSelectedHouse, user }) {
  // "Near location" kosam Pithapuram houses filter chesa
  const nearHouses = houses.filter(h => h.location.includes('Pithapuram') || h.location.includes('Kakinada'));

  return (
    <div>
      {/* NAVBAR */}
      <div style={{display:'flex', justifyContent:'space-between', padding:'10px 20px', background:'black', color:'white'}}>
        <h2>HouseRent</h2>
        <div>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('add')}>+ Add House</button>
          <button onClick={() => setPage('dashboard')}>Profile</button>
          <button onClick={() => setPage('settings')}>Settings</button>
          <button onClick={() => setPage('tenant')}>Tenant View</button>
        </div>
      </div>

      {/* HOME CONTENT */}
      <div style={{padding:'20px'}}>
        <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
          {nearHouses.map(h => (
            <div key={h.id} style={{border:'1px solid gray', width:'300px', padding:'10px'}}>
              <img src={h.image} width="100%" />
              <h3>{h.title}</h3>
              <p>{h.location}</p>
              <p>₹{h.price}/month</p>
              <button onClick={() => {
                setSelectedHouse(h);
                setPage('details');
              }}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}