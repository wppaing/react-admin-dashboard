import { Box } from "@mui/system";
import DashBoard from "./dashboard";
import SideBar from "./sidebar";

export default function Main() {
  return (
    <>
      <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
        <SideBar />
        <DashBoard />
      </Box>
    </>
  );
}
