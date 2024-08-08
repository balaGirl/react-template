import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/disboard");
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      initialValues={{
        remember: true,
        username: "admin",
        password: "admin"
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: "用户名不能为空"
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="请输入用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "密码不能为空"
          }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        <div>
          <a href="">注册!</a>
        </div>
      </Form.Item>
    </Form>
  );
};
export default Login;
