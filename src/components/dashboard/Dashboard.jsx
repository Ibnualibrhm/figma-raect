import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton"; 
import ListItemText from "@mui/material/ListItemText";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        height: "100vh",  
        width: "100vw"   
      }}
    >
      <Box
        sx={{
            margin: "10, 0",
          width: "250px",
          backgroundColor: "#4facfe",
          height: "100vh",
          borderRight: "1px solid #ccc",
          borderRadius: "0 10px 10px 0",
        }}
      >
        <List>
          <ListItem disablePadding> 
            <ListItemButton component="a" href="#Beranda"> 
              <ListItemText primary="Beranda" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profil">
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pengaturan">
              <ListItemText primary="Pengaturan" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        {/* Content area */}
        <h1>Welcome to Dashboard</h1>

        {/* Elemen setengah lingkaran */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "200px",
            height: "100px",
            backgroundColor: "#4facfe",
            borderRadius: "0 0 0 100px",
          }}
        ></div>
      </Box>
    </Box>
  );
}

export default Dashboard;