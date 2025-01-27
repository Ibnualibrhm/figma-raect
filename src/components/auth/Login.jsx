import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
  },
});

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleRegister = () => {
    navigate("/register");
  };


  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "350px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Login
          </h2>
          <TextField
            label="Email or Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px", marginBottom: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <p style={{ textAlign: "center" }}>
            Belum punya akun?{" "}
            <span
              onClick={handleRegister}
              style={{ color: "#2196f3", cursor: "pointer" }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;