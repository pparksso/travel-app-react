import S_AuthBox from '@/styles/layout/S_AuthBox';
import { Link } from 'react-router-dom';

const AuthBox = () => {
  return (
    <S_AuthBox>
      {/* 로그인 전 */}
      <div className="title">
        <h2>Welcome!</h2>
      </div>
      <div className="links">
        <button>Login</button>
        <button>Join</button>
      </div>
      {/* 로그인 후 */}
      {/* <div className="title">
        <h2>Welcome back!</h2>
      </div>
      <div className="links">
        <button>Logout</button>
        <Link to={'/mytour'}>My tour</Link>
      </div> */}
      {/* 마이투어 접속 시 */}
      {/* <div className="title">
        <h2>My tour</h2>
      </div>
      <div className="links">
        <button>Logout</button>
        <Link to={'/mypage'}>My Page</Link>
      </div> */}
    </S_AuthBox>
  );
};

export default AuthBox;
