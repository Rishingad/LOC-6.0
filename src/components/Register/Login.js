import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Box,
  FormControl,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    email: "",
    graduationYear: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <FormControl onSubmit={handleSubmit}>
        <h1 className="title">Login</h1>
        <div className="form">
          <Grid
            container
            spacing={2}
            justify="center"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Grid item xs={12}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Email
              </label>
              <TextField
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@example.com"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "363.18px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input", // Apply custom class to override default styles
                  },
                }}
              />

              <label
                htmlFor="password"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.showPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "363.18px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ color: "#fff" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: "outlined-input", // Apply custom class to override default styles
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className="submit"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#0D0D0D",
                  padding: "15px",
                  fontSize: "18px",
                  color: "#6236C0",
                  borderColor: "#6236C0",
                  width: "363px",
                  fontFamily: "Nunito",
                  marginBottom: "16px",
                }}
              >
                Register
              </Button>
              <Typography
                variant="subtitle1"
                className="text"
                style={{
                  color: "#fff",
                  marginTop: "16px",
                }}
              >
                Don't have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "#06F8DB", textDecoration: "none" }}
                >
                  Click here to register.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </FormControl>
    </Box>
  );
};

export default Login;
