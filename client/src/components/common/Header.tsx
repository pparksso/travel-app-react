import S_Header from '@/styles/layout/S_Header';
import AuthBox from '@/components/common/AuthBox';

const Header = () => {
  return (
    <S_Header>
      <h1>Travel Note</h1>
      <AuthBox />
    </S_Header>
  );
};

export default Header;
