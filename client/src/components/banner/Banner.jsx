import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Image = styled(Box)`
  background: url('https://i.ibb.co/ysG0849/banner.jpg') center/cover no-repeat #000;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Heading = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  color: #FF5733;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled(Typography)`
  font-size: 1.2rem;
  background: none;
  color: #A8A8A8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Portfolio</SubHeading>
    </Image>
  );
};

export default Banner;
