import {Redirect} from "umi";
import {ReactNode} from "react";
interface IProps {
  children?: ReactNode
}
const Index = (props: IProps) => {
  // const {isLogin} = useAuth();
  const  isLogin = true;
  if (isLogin) {
    return <div>{props.children}</div>
  } else {
    return <Redirect to="/login"/>
  }
}
export default Index;
