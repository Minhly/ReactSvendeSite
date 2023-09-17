import {
    Grid,
    TextField,
    Typography,
    Box,
  } from "@mui/material";
  import Paper from '@mui/material/Paper';
  import { styled } from '@mui/material/styles';

  function Rules() {

    const DemoPaper = styled(Paper)(({ theme }) => ({
      width: "100%",
      height: "100%",
      padding: theme.spacing(8),
      ...theme.typography.body2,
      textAlign: 'center',
    }));

    return (
      <Grid container marginTop={20} marginBottom={20}>
        <Grid item md="3"></Grid>
        <Grid item md="6">
          <Box textAlign="center" marginTop={4}>
            <Typography
              marginBottom={5}
              variant="h2"
              style={{
                color: "#5e90c1",
                fontWeight: "bold",
              }}
            >
              Regler og Vilkår
            </Typography>
            <DemoPaper square elevation={20}>1. Generelt

 

1.1. De vilkår, der følger nedenfor gælder for personer, der ønsker at oprette en netspilskonto på danskespil.dk eller som ønsker at deltage i spil udbudt af Danske Licens Spil på danskespil.dk. Personer, der ønsker at oprette en netspilskonto, skal registreres som kontoindehaver (herefter ”spiller”), for at kunne deltage i spil på danskespil.dk. Disse vilkår gælder også, når spilleren benytter sin netspilskonto på en mobilenhed, herunder på en af Danske Licens Spils udbudte apps. Henvisninger til danskespil.dk i disse vilkår er både en henvisning til danskespil.dk og Danske Licens Spils udbudte apps, medmindre andet et anført.
<br></br><br></br>2.1. Registrering som spiller hos Danske Licens Spil kan kun foretages af en person, som

 

·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,

·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.

Spilleren er forpligtet til straks at informere Danske Licens Spil, såfremt en eller flere af ovenstående krav ikke længere er opfyldt.</DemoPaper>
          </Box>
        </Grid>
        <Grid item md="3"></Grid>
      </Grid>
    );
  }
  
  export default Rules;
  