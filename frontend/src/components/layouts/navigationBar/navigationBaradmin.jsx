import React, { useState, useEffect } from "react";

const NavigationBar = () => {
  const [bellImg, setBellImg] = useState("./assets/icon/bell2.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setBellImg((prevImg) =>
        prevImg === "./assets/icon/bell2.png"
          ? "./assets/icon/bell1.png"
          : "./assets/icon/bell2.png"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
        <div>
    <nav
      className="border-gray-200 bg-[#1B1A1B] "
      style={{ boxShadow: "0px 2px 2px rgba(255, 255, 255, 0.25)" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between p-4">
      <img src={"./assets/logo.png"} 
      style={{ height: "80px" }}/>
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <h1 style={{ marginBottom: "0.5rem", color: "white",marginRight: "50rem", fontSize: "25px" }}>Musicvo</h1>
  <p style={{ marginTop: "0.5rem", color: "white", marginRight: "50rem" }}>admin</p>
</div>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="./assets/profileUser.png"
              alt="user photo"
            />
          </button>
          <span className="ms-2 border-e-2 pe-5">Nanaa</span>
          <img
            src={bellImg}
            alt=""
            className="mx-3 w-[18px] cursor-pointer"
            onClick={() => alert("Notification here")}
          />
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Nanaa
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                nanaa123@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default NavigationBar;
