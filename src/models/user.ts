import { useCallback, useState } from 'react';
import { history } from '@@/core/history';
import { message } from 'antd';

export default function () {
  const [user, setUser] = useState<API.IUser>();

  const signin = useCallback((username, password) => {
    if (
      (username === 'admin' || username === 'user') &&
      password === 'ant.design'
    ) {
      sessionStorage.setItem('token', 'admin');
      setUser({
        username,
        password,
      });
      history.replace('/');
    } else {
      message.error('账号或者密码错误...');
    }
  }, []);

  const signout = useCallback(() => {
    message.success('已退出登录！');
    sessionStorage.removeItem('token');
    setUser({} as API.IUser);
    history.replace('/login');
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
