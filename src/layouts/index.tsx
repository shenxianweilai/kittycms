import {ReactNode} from "react";

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  return (
    <>
      <h2>layout</h2>
      {props.children}
    </>
  )
}

export default Index;
