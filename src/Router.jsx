import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import About from "./components/About/About";
import Prizes from "./components/Prizes/Prizes";
const MainRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/prizes" element={< Prizes/>} />
        </Routes>
      </Router>
    </>
  );
};

// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// // import Sponsors from "./components/Sponsors";
// // import FAQ from "./components/FAQ";
// // import About from "./components/About/About";
// const MainRouter = () => {
//   return (
//     <>
//       {/* <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/sponsors" element={<Sponsors />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router> */}
//       <HomePage></HomePage>
//     </>
//   );
// };

// export default MainRouter;
