export default function Dashboard({ setPage, user }) {
  return (
    <div style={{padding:'80px'}}>
      <h1>My Profile 👤</h1>
      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>
      <p><b>Role:</b> {user?.role}</p>
      <button onClick={() => setPage('home')}>Back to Home</button>
    </div>
  );
}