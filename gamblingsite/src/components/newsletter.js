import { TextField, Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function Newsletter() {
  return (
    <Box textAlign="center" marginTop={2.5}>
      <TextField
        color="secondary"
        label="Sign up for our newsletter!"
        style={{ borderColor: "#5e90c1", backgroundColor: "#fff", color: "white", borderRadius: "5px"}}
        InputProps={{
          endAdornment: (
            <IconButton edge="end" color="primary">
              {<EmailIcon fontSize="large" />}
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}

export default Newsletter;
