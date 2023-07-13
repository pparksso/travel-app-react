import { styled } from 'styled-components';

const S_AuthBox = styled.div`
  position: absolute;
  width: 260px;
  height: 16vh;
  bottom: -18%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #fff;
  .title {
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    h2 {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  .links {
    height: 40%;
    display: flex;
    align-items: center;
    border-radius: 0 0 10px 10px;
    button,
    a {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child {
        border-right: 1px solid #ccc;
      }
    }
  }
`;

export default S_AuthBox;
