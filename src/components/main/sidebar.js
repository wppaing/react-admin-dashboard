import { Box } from "@mui/material";
import NavItem from "../nav/nav-item";

export default function SideBar() {
  const items = [
    {
      href: "/",
      icon: "",
      title: "Dashboard",
    },
    {
      href: "/customers",
      icon: "",
      title: "Customers",
    },
    {
      href: "/about",
      icon: "",
      title: "About",
    },
    {
      href: "/settings",
      icon: "",
      title: "Settings",
    },
  ];

  return (
    <>
      <Box>
        {items.map((item) => (
          <NavItem href={item.href} icon={item.icon} title={item.title} />
        ))}
      </Box>
    </>
  );
}
