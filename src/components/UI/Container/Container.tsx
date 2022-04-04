import { FC, ReactNode } from "react";
import classes from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
