import React from "react";
import NavigationBar from "../components/layouts/navigationBar.jsx/navigationBar";
import Genre from "../components/genreMusic/genre";
import MostlyPlayed from "../components/mostly played/mostPlay";
import Sidebar from "../components/layouts/sidebar/sidebar";


const Home = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar/>
        <div>
          <NavigationBar />
          <div className="home ps-[120px]">
            <div className="ms-[30px]">
              <div className="ucapan mt-[40px]">
                <h3 className="text-[28px] font-semibold">Good Morning, Nanaa</h3>
              </div>
              <Genre />
            </div>
            <div className="mostPlay">
              <h2 className="text-[25px] mt-[30px] mb-3 font-semibold ms-3">
                Mostly Played
              </h2>
              <MostlyPlayed />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;