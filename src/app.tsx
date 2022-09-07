import { message } from 'antd';
import { history } from 'umi';

export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    username: 'user',
    role: {
      isAdmin: true,
      isEditor: false,
    },
  });
}

export const layout = {
  logout: () => {
    sessionStorage.removeItem('token');
    message.info('已退出登录').then(() => {
      history.replace('/login');
    });
  },
};
