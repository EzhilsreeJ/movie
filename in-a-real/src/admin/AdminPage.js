import React from 'react';
import AdminDashboard from './AdminDashboard';

function AdminPage() {
  // In a real app, you'd have authentication logic here to ensure only admins can access.
  const isAdmin = true; // Placeholder for authentication

  if (!isAdmin) {
    return <div>Access Denied. You are not an administrator.</div>;
  }

  return (
    <div>
      <h1>Admin Section</h1>
      <AdminDashboard />
    </div>
  );
}

export default AdminPage;