import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@mui/material";
import { Lens } from "../../icons";

export default function Head() {
  return (
    <Box sx={{ m: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" component="h2">
          Albums
        </Typography>
        <Box>
          <Button variant="contained">Create Album</Button>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          fullWidth
          placeholder="Search"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small">
                  <Lens />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
