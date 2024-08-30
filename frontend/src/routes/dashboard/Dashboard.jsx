import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  /* Should contain shared navbar */
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard content</p>
      <Outlet />
    </div>
  );
}

export default Dashboard;