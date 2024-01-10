import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { https } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice/userSlice';
const FormLogin = () => {
  //tạo navigate điều hướng trang
  let navigate = useNavigate()
  //tạo dispatch
  let dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Success:', values);
    //Nhập thành công thì gọi api 
    https.post("/api/QuanLyNguoiDung/DangNhap", values)
    .then((res) => {
     console.log(res);
     message.success("Đăng nhập thành công")
     //Đẩy data lên redux
     dispatch(setUser(res.data.content))
     //Điều hướng trang qua HomePage sau khi đăng nhập thành công
     navigate("/")
     //Lưu xuống localstore
     let dataJon = JSON.stringify(res.data.content)
     localStorage.setItem("USER_LOGIN", dataJon)
    })
    .catch((err) => {
     console.log(err);
     message.error("Đăng nhập thất bại")
     });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
return <Form
  className='bg-blue-100 rounded p-2 '
  layout='vertical'
    name="basic"
    //Cột label
    labelCol={{
      
      span: 16,
    }}
    //Cột input
    wrapperCol={{
      offset: 2,
      span: 20,
    }}
    //Set width
    style={{
      maxWidth: 500,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    {/* Form nhập tài khoản */}
    <Form.Item 
      className='text-white'
      label="Tài khoản"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập tài khoản!',
        },
      ]}
    >
      <Input />
    </Form.Item>

      {/* Form nhập mật khẩu */}
    <Form.Item
      label="Mật Khẩu"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập mật khẩu!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

      {/* Button */}
    <Form.Item
      wrapperCol={{
        offset: 9,
        span: 16,
      }}
    >
      <Button className='bg-blue-500' type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
}
 
;
export default FormLogin;