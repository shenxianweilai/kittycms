import styles from './index.less';
import { useModel } from '@@/plugin-model/useModel';

export default function IndexPage() {
  const { user } = useModel('user');
  return (
    <div>
      <h1 className={styles.title}>Hello, {user?.username}</h1>
    </div>
  );
}
