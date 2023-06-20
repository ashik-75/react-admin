import { PropsWithChildren } from "react";

function Chartwrapper({ children }: PropsWithChildren) {
  return (
    <div className="rounded-lg p-5 shadow-md dark:shadow-lg dark:shadow-slate-800">
      {children}
    </div>
  );
}

export default Chartwrapper;
