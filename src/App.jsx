import "./App.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import Homes from "./Pages/Home";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import Talentprofile from "./FindTalent/Talentprofile";
import PostJobPages from "./Pages/PostJobPages";
import JobDescPages from "./Pages/JobDescPages";
import ApplyJob from "./Pages/ApplyJob";
import Header from "./Header/Header";
import CompanyPages from "./Pages/CompanyPages";
import PostedJobPages from "./Pages/PostedJobPages";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";

// ✅ Move theme object outside for better performance
const theme = {
  focusRing: "never",
  fontFamily: "Poppins, sans-serif",
  primaryColor: "brightSun",
  colors: {
    brightSun: [
      "#fffbeb",
      "#fff3c6",
      "#ffe588",
      "#ffd149",
      "#ffbd20",
      "#f99b07",
      "#dd7302",
      "#b75006",
      "#943c0c",
      "#7a330d",
      "#461902",
    ],
    mineShaft: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#2d2d2d",
    ],
  },
  primaryShade: 4,
};

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="find-talent" element={<FindTalent />} />
            <Route path="find-job" element={<FindJobs />} />
            <Route path="job" element={<JobDescPages />} />
            <Route path="apply-job" element={<ApplyJob />} />
            <Route path="company" element={<CompanyPages />} />
            <Route path="posed-job" element={<PostedJobPages />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<SignUpPage />} />
            <Route path="profile-page" element={<ProfilePage />} />
            <Route path="post-job" element={<PostJobPages />} />
            <Route path="find-profile" element={<Talentprofile />} />
            <Route path="*" element={<Homes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
