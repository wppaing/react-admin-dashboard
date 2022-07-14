import { Button, ListItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { StyledLink } from "../../utils/styled-link";

export default function NavItem({ href, icon, title, ...props }) {
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <ListItem
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <StyledLink to={href}>
        <Button
          disableRipple
          startIcon={icon}
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "#D1D5DB",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "inherit",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          {title}
        </Button>
      </StyledLink>
    </ListItem>
  );
}
