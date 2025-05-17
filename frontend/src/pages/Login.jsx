// Login page with Google OAuth
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4 font-bold">Login</h1>
        <a
          href="http://localhost:4000/auth/google"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default Login;