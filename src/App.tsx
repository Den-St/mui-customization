import { Box, Button, Container, Input, InputLabel, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import { AuthFormControl } from './components/AuthFormControl/AuthFormControl';

function App() {
  return <Container 
    maxWidth={false} 
    className='flex justify-center items-center h-[100vh]'
    // sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' , height: '100vh'}}
    >
    <Box 
    className="flex flex-col justify-center items-center gap-[24px] px-[60px] py-[96px] bg-customGrey-95 border-[1px] border-customGrey-80 w-[552px]" 
    // sx={{'display': "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "60px 96px", backgroundColor: theme.palette.customGrey[95], border: `1px solid ${theme.palette.customGrey[80]}`, width: '552px'}}
    >
      <Typography variant='h1' className='mb-[12px]'>Вхід</Typography>
      <AuthFormControl sx={{width: '100%'}}>
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input placeholder='Ваш email' id='email-input'/>
      </AuthFormControl>
      <AuthFormControl>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <InputLabel
          htmlFor="password-input">Пароль</InputLabel>
          <Typography variant='body1'>Забули пароль?</Typography>
        </Box>
        <Input placeholder='Ваш пароль' id='password-input'/>
      </AuthFormControl>
      <Button variant='primary' size='large' className='mt-[24px]'>Далі</Button>
      <Button variant='primary' size='medium'>Далі</Button>
      <Button variant='primary' size='medium' endIcon={<DownloadIcon />}>Перейти до курсу</Button>
    </Box>
  </Container>
}

export default App
