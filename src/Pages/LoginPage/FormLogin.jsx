import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { https } from '../../services/api';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
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
     //Nếu có trạng thái BOOKING thì sẽ quay lại trang đặt vé còn không thì sẽ vào homepage
     const booking = localStorage.getItem("BOOKING");
     if (booking === '/booking') {
      window.history.back();
      localStorage.removeItem("BOOKING");
    } else{
      navigate("/"); // Chuyển hướng qua homepage
    }
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
return (
  <div className='my-10'>
    {/* Header Form */}
      <Form.Item
      style={{
        maxWidth: 500,
      }}
      className='containerCss'>
      <div className='bg-blue-500 flex justify-around font-bold text-white text-2xl rounded-t-xl py-1'>
        <div>
          <h1 to={"/login"}>Đăng nhập
          <hr className='bold-hr-2'/>
          </h1>
        </div>
        <div className='text-gray-400'>
          <NavLink to={"/register"}>Đăng kí</NavLink>
        </div>
      </div>
    </Form.Item>
     
   <Form
  className='bg-blue-100 rounded-b-xl p-5 containerCss'
  layout='vertical'
    name="basic"
    //Cột label
    labelCol={{
      span: 16,
    }}
    //Cột input
    wrapperCol={{
      offset: 0,
      span: 24,
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
        offset: 0,
        span: 24,
      
      }}
      
    >
      <Button style={{width: "100%"}} className='bg-blue-500 ' type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
  </Form> 
  </div>

)

}
 
;
export default FormLogin;