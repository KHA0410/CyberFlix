import React from 'react';
import {
  Button,
  Form,
  Input,
  message,
} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { https } from '../../services/api';
import { setLoadingOff } from '../../redux/spinnerSlice/spinnerSlice';


const FormRegister = () => {
  //Responsive form
  const formItemLayout = {
    wrapperCol: {
      //Laybel
      xs: {
        offset: 0,
        span: 24,
      },
      //ô input
      sm: {
        offset: 0, 
        span: 24,
      },
    },
  };
  const [form] = Form.useForm();//important
  const navigate = useNavigate()
  
  //Đăng kí thành công
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    https.post("/api/QuanLyNguoiDung/DangKy", values)
    .then((res) => {
     console.log(res);
     message.success("Đăng kí tài khoản thành công")
     navigate("/login")
    })
    .catch((err) => {
     console.log(err.response.data.content);
     message.error("Đăng kí tài khoản thất bại")
     message.error(err.response.data.content)
     });
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
        <div className='text-gray-400'>
          <NavLink to={"/login"}>Đăng nhập
          </NavLink>
        </div>
        <div>
          <h1 to={"/register"}>Đăng kí</h1>
          <hr className='bold-hr-2'/>
        </div>
      </div>
    </Form.Item>

      <Form
    className='containerCss bg-blue-100 rounded-b-xl p-5 '
    layout='vertical'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 500,
      }}
    >

     {/* Tài khoản */}
     <Form.Item
        name="taiKhoan"
        label="Tài Khoản"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tài khoản!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Mật khẩu */}
      <Form.Item
        name="matKhau"
        label="Mật Khẩu"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      {/* Nhập lại mật khẩu */}
      <Form.Item
        name="confirm"
        label="Nhập lại mật khẩu"
        dependencies={['matKhau']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập lại mật khẩu!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('matKhau') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu nhập lại không khớp!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        {/* Họ và tên */}
     <Form.Item
        name="hoTen"
        label="Họ và tên"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập họ và tên!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

     {/* Email */}
     <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Email sai định dạng!',
          },
          {
            required: true,
            message: 'Vui lòng nhập Email!',
          },
          
        ]}
      >
        <Input />
      </Form.Item>
        
        {/* Số điện thoại */}
      <Form.Item
        name="soDt"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

   
           {/* Button */}
    <Form.Item
      wrapperCol={{
        offset: 10,
        span: 24,
        
      }}>
      <Button className='bg-blue-500' type="primary" htmlType="submit">
          Đăng kí
        </Button>

      </Form.Item>
 
    </Form>
    </div>
    
    
    
  );
};
export default FormRegister;