export default function Settings({ setPage }) {
  return (
    <div style={{padding:'20px'}}>
      <h1>Settings ⚙️</h1>
      <button>Change Password</button><br/><br/>
      <button>Notifications</button><br/><br/>
      <button onClick={() => setPage('login')}>Logout</button><br/><br/>
      <button onClick={() => setPage('home')}>Back</button>
    </div>
  );
}