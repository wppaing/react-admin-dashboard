import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavItem from "../nav/nav-item";
import {
  Dashboard,
  Genres,
  Artists,
  Album,
  Music,
  PlayList,
  UserDetail,
  Bell,
} from "../../icons";

export default function SideBar() {
  const items = [
    {
      href: "/",
      icon: <Dashboard />,
      title: "Dashboard",
    },
    {
      href: "/artists",
      icon: <Artists />,
      title: "Artists",
    },
    {
      href: "/genres",
      icon: <Genres />,
      title: "Genres",
    },
    {
      href: "/albums",
      icon: <Album />,
      title: "Albums",
    },
    {
      href: "/tracks",
      icon: <Music />,
      title: "Tracks",
    },
    {
      href: "/playlists",
      icon: <PlayList />,
      title: "Playlists",
    },
    {
      href: "/users",
      icon: <UserDetail />,
      title: "Users",
    },
    {
      href: "/push-notification",
      icon: <Bell />,
      title: "Push notification",
    },
  ];

  return (
    <>
      <Box
        sx={{
          color: "#ffffff",
          backgroundColor: "background",
          width: 250,
          flexShrink: 0,
        }}
      >
        <Box sx={{ padding: "2rem" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h4" component="h1">
              Admin Panel
            </Typography>
          </Link>
        </Box>
        {items.map((item) => (
          <NavItem
            key={item.title}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </Box>
    </>
  );
}
