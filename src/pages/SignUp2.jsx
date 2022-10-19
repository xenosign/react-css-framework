import { Avatar, Grid, TextField, Typography, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';

export default function SignUp2() {
  return (
    // Validate : 유효성검사
    // sx : 스타일
    // mt: 3 = margin-top: 3em;
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '90vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: lightBlue[300] }}>#</Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          {/* spacing : 간격 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                label="이메일"
                autoFocus
                autoComplete="off"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                label="비밀번호"
                type="password"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                required
                fullWidth
                label="비밀번호 확인"
                type="password"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="nickname"
                required
                fullWidth
                label="닉네임"
              ></TextField>
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: lightBlue[700], height: '3.5em' }}
          >
            회원가입
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">이미 계정이 있나요? 로그인으로 이동</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
