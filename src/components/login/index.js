import { Box, Container } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container component={"main"} maxWidth="xs">
      <Box
        height={"100vh"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          width={"100%"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            autoComplete="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type={"password"}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
