import { Button, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function CookieConsent() {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
  
    const giveCookieConsent = () => {
      setCookie("cookieConsent", true, {path: "/"})
    }
  return (
    <div style={{backgroundColor: "#fff", padding: "20px", marginTop: "20px", color:"#000"}}>
      <Typography variant='h3'>Accept our cookies or vanish!</Typography>
    <p>We use cookies to enhance your user experience. By using our website,
        you agree to our use of cookies.{" "}</p>
    <Link to="/pages/rules" style={{textDecoration: "none"}}>Learn more</Link>
    <Button variant='contained' color='secondary' size="large" onClick={giveCookieConsent} style={{marginLeft: "20px"}}>
      Accept
    </Button>
  </div>
  );
}

export default CookieConsent;
