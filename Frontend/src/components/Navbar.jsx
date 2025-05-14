// import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// const [searchQuery, setSearchQuery] = useState("");


// function Navbar() {
//   const [authUser, setAuthUser] = useAuth();
//   const [cartCount, setCartCount] = useState(0);

//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );
//   const element = document.documentElement;

//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       document.body.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       document.body.classList.remove("dark");
//     }
//   }, [theme]);

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartCount(cart.length);
//     };

//     updateCartCount();

//     // Listen for localStorage changes across tabs
//     window.addEventListener("storage", updateCartCount);

//     return () => {
//       window.removeEventListener("storage", updateCartCount);
//     };
//   }, []);

//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = (
//     <>
//       <li><a href="/">Home</a></li>
//       <li><a href="/course">Course</a></li>
//       <li><a href="/contact">Contact</a></li>
//       <li><a href="/about">About</a></li>
//     </>
//   );

//   return (
//     <div
//       className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
//         sticky
//           ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
//           : ""
//       }`}
//     >
//       <div className="navbar">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//               {navItems}
//             </ul>
//           </div>
//           <a className="text-2xl font-bold cursor-pointer">bookStore</a>
//         </div>

//         <div className="navbar-end space-x-3">
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">{navItems}</ul>
//           </div>

//           {/* Search bar */}
//           <form
//               onSubmit={(e) => {
//               e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchQuery(""); // optional: clear the input
//     }
//   }}
//   className="hidden md:block"
// >
//   <label className="px-3 py-2 border rounded-md flex items-center gap-2">
//     <input
//       type="text"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
//       placeholder="Search"
//     />
//     <button type="submit">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 16 16"
//         fill="currentColor"
//         className="w-4 h-4 opacity-70"
//       >
//         <path
//           fillRule="evenodd"
//           d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//   </label>
// </form>


//           {/* Theme switch */}
//           <label className="swap swap-rotate">
//             <input type="checkbox" className="theme-controller" />
//             <svg
//               className="swap-off fill-current w-7 h-7"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             >
//               <path d="M5.64,17l-.71.71a1...Z" />
//             </svg>
//             <svg
//               className="swap-on fill-current w-7 h-7"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             >
//               <path d="M21.64,13a1,1,0,0,0-1.05...Z" />
//             </svg>
//           </label>

//           {/* Cart button */}
//           <Link to="/cart" className="relative">
//             <svg
//               className="w-7 h-7 text-gray-700 dark:text-white hover:text-pink-500 transition"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13l1.2-6h8.4" />
//             </svg>
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* Auth button */}
//           {authUser ? (
//             <Logout />
//           ) : (
//             <div>
//               <a
//                 className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
//                 onClick={() =>
//                   document.getElementById("my_modal_3").showModal()
//                 }
//               >
//                 Login
//               </a>
//               <Login />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Optional: clear after redirect
    }
  };

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">bookStore</a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </form>

          {/* Theme switch */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M5.64,17l-.71.71a1...Z" />
            </svg>
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05...Z" />
            </svg>
          </label>

          {/* Cart button */}
          <Link to="/cart" className="relative">
            <svg
              className="w-7 h-7 text-gray-700 dark:text-white hover:text-pink-500 transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13l1.2-6h8.4" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth button */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

