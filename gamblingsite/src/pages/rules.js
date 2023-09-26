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
      <Grid container marginTop={22} marginBottom={20}>
        <Grid item md="3"></Grid>
        <Grid item md="6">
          <Box textAlign="center" marginTop={4}>

            <DemoPaper square elevation={20}>
            <Typography
              marginBottom={8}
              variant="h2"
              style={{
                color: "#5e90c1",
                fontWeight: "bold",
              }}
            >
              Regler og Vilkår
            </Typography>
1.2. Registrering som spiller hos Danske Licens Spil kan kun foretages af en person, som

 

·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,

·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.
·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,
·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,

·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.
·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.

Spilleren er forpligtet til straks at informere Danske Licens Spil, såfremt en eller flere af ovenstående krav ikke længere er opfyldt.<br></br><br></br>
2.1. Registrering som spiller hos Danske Licens Spil kan kun foretages af en person, som

·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,

·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.

·       har dansk (herunder grønlandsk) eller færøsk CPR-nummer,

·       er fyldt 18 år,

·       ikke er erklæret personligt konkurs, og

·       ikke er umyndiggjort eller sat under værgemål.

Spilleren er forpligtet til straks at informere Danske Licens Spil, såfremt en eller flere af ovenstående krav ikke længere er opfyldt.<br></br><br></br>
2.2. Registrering som spiller hos Danske Licens Spil kan kun foretages af en person, som

 

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
  