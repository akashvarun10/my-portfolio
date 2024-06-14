import { Box, Typography, styled } from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#76885B',
  color: '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const FooterText = styled(Typography)(() => ({
  fontSize: '1rem',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Venkat Akash Varun Pemmaraju | All Rights Reserved
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
