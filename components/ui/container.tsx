import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}
