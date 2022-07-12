import { Button, ListItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavItem({ href, icon, title, ...props }) {
  const [active, setActive] = useState(false);

  return (
    <ListItem>
      <Button
        disableRipple
        sx={{
          backgroundColor: active && "rgba(255,255,255, 0.08)",
          borderRadius: 1,
          color: active ? "secondary.main" : "neutral.300",
          fontWeight: active && "fontWeightBold",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "secondary.main" : "neutral.400",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Link to={href}>{title}</Link>
      </Button>
    </ListItem>
  );
}
