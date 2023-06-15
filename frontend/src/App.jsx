import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorit from "./pages/favorit";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/Login";
import Regis from "./pages/LogReg/Regis";
// import ProfileSetting from "./pages/settingPage/profilesetting";

import About from "./pages/settingPage/about";
import Leaderboard from "./pages/leaderboard";
import Premium from "./pages/premium";
import Artist from "./pages/artist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
        <Route path="/favorit" element={<Favorit />} />
        {/* <Route path="/profilesetting" element={<ProfileSetting />} /> */}
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//admin

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dasboardadmin from "./admin/dasboardadmin";
// import Music from "./admin/musicadmin";
// import DataUser from "./admin/datauseradmin";
// import Setting from "./admin/settingadmin";

// function App() {
// return (
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<Dasboardadmin />} />
// <Route path="/Music" element={<Music />} />
// <Route path="/DataUser" element={<DataUser />} />
// <Route path="/Setting" element={<Setting />} />
// </Routes>
// </BrowserRouter>
// );
// }

// export default App;
