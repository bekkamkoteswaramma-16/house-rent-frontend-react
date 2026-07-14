export default function Details({ setPage, house }) {
  if(!house) return <p>Loading...</p>

  return (
    <div style={{maxWidth:'800px', margin:'20px auto', padding:'20px'}}>
      <button onClick={() => setPage('home')}>← Back to Home</button>
      
      <img src={house.image} width="100%" style={{borderRadius:'10px', marginTop:'10px'}} />
      
      <h1>{house.title}</h1>
      <h2 style={{color:'green'}}>₹{house.price} / month</h2>
      
      <p><b>📍 Location:</b> {house.location}</p>
      <p><b>📄 Description:</b> {house.desc}</p>
      
      <div style={{border:'1px solid gray', padding:'15px', marginTop:'20px'}}>
        <h3>Owner Contact</h3>
        <p>Phone: +91 9876543210</p>
        <p>Email: owner@example.com</p>
      </div>

      <button style={{marginTop:'20px', padding:'12px 30px', background:'black', color:'white'}}>
        Contact Owner
      </button>
    </div>
  );
}