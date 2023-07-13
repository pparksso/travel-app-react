import { styled } from 'styled-components';
import back from '@/assets/images/mainVisual.jpg';

const S_Header = styled.header`
  width: 100%;
  height: 32vh;
  background-image: url(${back});
  background-position: 0 50%;
  opacity: 0.85;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.8rem;
    white-space: nowrap;
  }
`;

export default S_Header;
