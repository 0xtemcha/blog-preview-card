import { ReactNode } from "react";
import styles from "./Tag.module.scss";

type Props = {
  children: ReactNode | ReactNode[];
};

const Tag = ({ children }: Props) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
