import { Container, Box, Typography, InputLabel, Input, Button, useTheme } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import { AuthFormControl } from "../AuthFormControl/AuthFormControl"

export const SignInForm = () => {
    const theme = useTheme();

    return <Container 
        maxWidth={false} 
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , height: '100vh'}} 
        >
        <Box
        component={'form'}
        sx={{'display': "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "60px 96px", backgroundColor: theme.palette.customGrey[95], border: `1px solid ${theme.palette.customGrey[80]}`, width: '552px'}}
        >
        <Typography variant='h1'>Вхід</Typography>
        <AuthFormControl>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <Input placeholder='Ваш email' id='email-input'/>
        </AuthFormControl>
        <AuthFormControl>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <InputLabel htmlFor="password-input">Пароль</InputLabel>
            <Typography variant='body1'>Забули пароль?</Typography>
            </Box>
            <Input placeholder='Ваш пароль' id='password-input'/>
        </AuthFormControl>
        <Button variant='primary' size='large'>Далі</Button>
        <Button variant='primary' size='medium'>Далі</Button>
        <Button variant='primary' size='medium' endIcon={<DownloadIcon />}>Перейти до курсу</Button>
        </Box>
    </Container>
}