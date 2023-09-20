import React from 'react';
import {IBoxProps} from "../../shared/interface/IBoxProps.interface"

export const DarkLayout = ({ children }: IBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};
