
import React, { useState } from "react";
import { Box, Button, TextField, InputAdornment, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Login = ({ onLogin }) => { 
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    setError("");
    try {
      const payload = new URLSearchParams();
      payload.append("mobile_number", mobile);
      payload.append("password", password);

      const response = await axios.post(`http://localhost:8000/myriart/login/`, payload);

      if (response.status === 200) {
        setSuccess("Login successful!");
        setError("");
        const token = response.data.token; 
        onLogin(token); 
      } else {
        setError("Login failed. Please check your credentials.");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="primary" align="center">
          {success}
        </Typography>
      )}
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        type="tel"
        margin="normal"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? "text" : "password"}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Sign in
      </Button>
    </Box>
  );
};

export default Login;
