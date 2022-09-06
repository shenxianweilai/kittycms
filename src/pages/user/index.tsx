import { Button, Space } from 'antd';
import { useHistory, useModel } from 'umi';
import { Access, useAccess } from '@@/plugin-access/access';

const Index = () => {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const { user, signin, signout } = useModel('user');
  const access = useAccess();
  return (
    <>
      {initialState?.id}
      <br />
      {initialState?.name}
      {user?.id}
      <br />
      {user?.name}
      <Space>
        <Access
          accessible={access.isEditor !== undefined && access.isEditor}
          fallback={<div>can no read this contet</div>}
        >
          foo content
        </Access>
        <Button
          type="primary"
          onClick={() => {
            signin('最爱白菜叶', '123456');
          }}
        >
          登录
        </Button>
        <Button
          type="primary"
          onClick={() => {
            signout();
          }}
        >
          登出
        </Button>
      </Space>
      <Button type="primary" onClick={() => history.push('/user?a=b')}>
        go2user
      </Button>
      user index
    </>
  );
};

export default Index;
