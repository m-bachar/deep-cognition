import { useState } from "react";
import "./Actualites.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlineIcon from "@mui/icons-material/AlternateEmail";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

const Actualites = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError(true);
      return;
    }

    // Submit logic would go here
    console.log("Form submitted:", formData);
    setSuccess(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#6F7E8C",
      },
      background: {
        paper: "rgb(41, 50, 76)",
      },
      text: {
        primary: "#fff",
        secondary: "#B2BAC2",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label": {
              color: "#B2BAC2",
            },
            "& label.Mui-focused": {
              color: "#6F7E8C",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "& fieldset": {
              borderColor: "#E0E3E7",
            },
            "&:hover fieldset": {
              borderColor: "#B2BAC2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6F7E8C",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            padding: "10px 24px",
          },
        },
      },
    },
  });

  return (
    <Box className="actualites">
      <Container maxWidth="md" className="newsletter-container">
        <Paper elevation={6} className="newsletter-paper">
          <Box className="newsletter-content">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              className="newsletter-title"
              sx={{ marginBottom: "50px" }}
            >
              Inscription à notre Newsletter
            </Typography>

            <Typography
              variant="body1"
              paragraph
              className="newsletter-description"
            >
              En vous inscrivant, vous recevrez régulièrement des informations
              exclusives, des conseils pratiques, des offres spéciales et bien
              plus encore.
            </Typography>

            <ThemeProvider theme={theme}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                className="newsletter-form"
              >
                <TextField
                  fullWidth
                  label="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  startIcon={<MailOutlineIcon />}
                  className="subscribe-button"
                >
                  S'inscrire
                </Button>
              </Box>
            </ThemeProvider>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Inscription réussie! Merci de vous être inscrit à notre newsletter.
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          Veuillez remplir tous les champs du formulaire.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Actualites;
