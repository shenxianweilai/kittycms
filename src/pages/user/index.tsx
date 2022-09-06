import {Button} from "antd";
import {useHistory} from "umi";

const Index= () => {
  const history = useHistory();
  return (
    <>
      <Button type='primary' onClick={()=>history.push('/user?a=b')}>go2user</Button>
      user index
    </>
  )
}

export default Index;
