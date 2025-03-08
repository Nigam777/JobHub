import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { useToggle } from "@mantine/hooks";
import Homes from "./Pages/Homes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import Talentprofile from "./FindTalent/Talentprofile";
import Header from "./Header/Header";
import PostJobPages from "./Pages/PostJobPages";
import JobDescPages from "./Pages/JobDescPages";

function App() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  const theme = {
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    colors: {
      brightSun: ["#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20", "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902"],
      mineShaft: ["#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888", "#6d6d6d", "#5d5d5d", "#4f4f4f", "#454545", "#3d3d3d", "#2d2d2d"]
    },
    primaryShade: 4,
  };

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="find-talent" element={<FindTalent />} />
          <Route path="find-job" element={<FindJobs />} />
          <Route path="job" element={<JobDescPages/>} />
          <Route path="post-job" element={<PostJobPages />} />
          <Route path="find-profile" element={<Talentprofile />} />
          <Route path="*" element={<Homes />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;