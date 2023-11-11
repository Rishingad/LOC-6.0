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

const Register = () => {
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <h1 className="form-title">Register Now</h1>
      <FormControl onSubmit={handleSubmit}>
        <div className="form">
          <Grid
            container
            spacing={8}
            justifyContent="space-between"
            // Use the order property to adjust the order of the items on smaller screens
          >
            <Grid item xs={12} sm={6} style={{ order: 1 }}>
              <label
                className="form-label"
                htmlFor="firstName"
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
                First Name
              </label>
              <TextField
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
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
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                    width: "350.18px",
                    marginLeft: "10px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                htmlFor="college"
                className="form-label"
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
                College
              </label>
              <TextField
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="University of South California"
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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="graduationYear"
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
                Graduation Year
              </label>
              <TextField
                type="text"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="2022"
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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

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
                  textAlign: "left",
                }}
              >
                Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
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
                    width: "350.18px",
                    marginLeft: "10px",
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
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} style={{ textAlign: "right", order: 2 }}>
              <label
                className="form-label"
                htmlFor="lastName"
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
                Last Name
              </label>
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="contactNumber"
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
                Phone number
              </label>
              <TextField
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+91 1234567890"
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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="confirmPassword"
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
                Confirm Password
              </label>
              <TextField
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
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
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "12px",
                    marginBottom: "16px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{ color: "#fff" }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Grid item xs={12} style={{ order: 3 }}>
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
              marginBottom: "16px",
            }}
          >
            Already registered?{" "}
            <Link
              to="/login"
              style={{ color: "#06F8DB", textDecoration: "none" }}
            >
              Click here to log in.
            </Link>
          </Typography>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default Register;
