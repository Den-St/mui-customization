import { Grid, useMediaQuery, useTheme } from "@mui/material"

export const GridResponsiveTemplate = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    console.log(matches); // true if screen width is >= 600px (sm breakpoint)
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(6)).map((_, index) => (
            <Grid key={index} 
            sx={{width: {
                xs: 100,
                sm: 200,
                md: 300,
            },backgroundColor: {
                xs: theme.palette.green[100],
                sm: theme.palette.orange[50],
                md: theme.palette.purple[200],
            }, padding: '20px'}}
            size={{ xs: 2, sm: 4, md: 4 }}>{index + 1}</Grid>
        ))}
    </Grid>
}