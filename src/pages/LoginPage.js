import React from 'react';

function LoginPage() {
  // In a real app, this would be a form for username/password and an API call.
  return (
    <div>
      <h2>Login</h2>
      <p>Please log in to get personalized recommendations.</p>
      {/* Add login form here */}
      <button onClick={() => alert('Login attempted (placeholder)')}>Login</button>
    </div>
  );
}

export default LoginPage;