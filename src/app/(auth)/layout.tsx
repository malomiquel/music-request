import { FC, PropsWithChildren } from "react";

const AuthenticationLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {children}
    </div>
  )
};

export default AuthenticationLayout;