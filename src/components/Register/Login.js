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
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      <h1 className="form-title">Login</h1>
      <FormControl onSubmit={handleSubmit}>
        <div className="form">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "80%", 
              maxWidth: "400px", 
              margin: "auto", 
            }}
          >
            <Grid item xs={12}>
              <label
                className="form-label"
                htmlFor="email"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Email
              </label>
              <TextField
                type="email"
                id="mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@example.com"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "10px", 
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "45px", 
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <label
                className="form-label"
                htmlFor="password"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
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
                    padding: "10px", 
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "45px", 
                  },
                  classes: {
                    notchedOutline: "outlined-input",
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
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className="submit"
                style={{
                  borderRadius: "10px",
                  background: "none",
                  padding: "8px 20px", 
                  fontSize: "17px",
                  color: "#6236C0",
                  border: "2px solid #6236C0",
                  width: "60%", 
                  fontFamily: "Nunito",
                  marginTop: "16px",
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
                  to="/register"
                  style={{ color: "#06F8DB", textDecoration: "none" }}
                >
                  Click Here to Register.
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
