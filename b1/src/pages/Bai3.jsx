import { Button, Input } from "antd";
import React from "react";

export default function Bai3() {
  return (
   
    <div className="w-[300px]">
       <h3>Login</h3>
      <div className="m-3">

      <label htmlFor="">Email</label>
      <Input placeholder="default size" />
      </div>
      <div className="m-3">
      <label htmlFor="">Password</label>
      <Input placeholder="Basic usage" />

      </div>
      <Button type="primary" className="m-3 w-[277px]">Login</Button>
    </div>
  );
}
