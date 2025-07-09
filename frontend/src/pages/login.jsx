import React, {useState} from 'react'
import axios from 'axios';


// form that data should be passed to request using axios
const Login = () => {
    const [formData, setFormData] = useState({ email: ``, password: `` });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = formData;
        
        if (!email || !password) {
            alert("All fields are required!");
            return;
        }
        // Sending a POST request to the backend API for login
        // The backend should handle the authentication and return a response
        try {
            const res = await axios.post(`http://localhost:5050/api/login`, {
                email: email,
                password: password
            });
            
            const { token, user } = res.data;
            // Store the token in localStorage or sessionStorage
            localStorage.setItem("authToken",JSON.stringify(token));
            localStorage.setItem("UserInfo", JSON.stringify(user));
            alert("Login successful!");
            console.log(res.data);
            // Redirect to the home page or dashboard after successful login
            window.location.href = "/";
            
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("Login failed. Please try again.");
        }
    } 

  return (
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold custom-brand-color hover:custom-brand-color">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center custom-brand-bg rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:custom-brand-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-brand-bg">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
    Don't have an account? <a href="/api/signup" className="font-semibold custom-brand-color">Sign Up</a>
    </p>
  </div>
</div>

  )
};

export default Login
