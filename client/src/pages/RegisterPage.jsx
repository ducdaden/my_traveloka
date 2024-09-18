import React, { useState } from 'react'
import "../styles/Register.scss"

const RegisterPage = () => {
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    profileImage: null
  });

  const handleChange = (e) =>{
    const {name,value,files} = e.target
    setFormData({
      ...formData,
      [name]: value,
      [name]: name==="profileImage"? files[0]:value
    })
  }

  console.log(formData)


  return (
    <div className='register'>
      <div className='register_content'>
        <from className="register_content_form">
          <input
            placeholder='Họ'
            name='firstName'
            value={formData.firstName}
            onChange = {handleChange} 
            required
          />
          <input
            placeholder='Tên'
            name='lastName'
            value={formData.lastName}
            onChange = {handleChange} 
            required
          />
          <input
            placeholder='Email'
            name='email'
            value={formData.email}
            type='email'
            onChange = {handleChange} 
            required
          />
          <input
            placeholder='Mật khẩu'
            name='password'
            value={formData.password}
            onChange = {handleChange} 
            type='password'
            required
          />
          <input
            
            placeholder='Xác nhận mật khẩu'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange = {handleChange} 
            type='password'
            required
          />
          <input 
          type='file'
            id="image"
           name='profileImage' 
           accept='image/*' 
           style={{ display: 'none' }} 
           onChange = {handleChange} 
           required />

          <label htmlFor='image'>
            <img src="/assets/addImage.png" alt="Chọn ảnh đại diện"/> 
            <p>Chọn ảnh</p>
          </label>
          {formData.profileImage && (
            <img srt={URL.createObjectURL(formData.profileImage)}
            alt = "ảnh đại diện"
            style={{maxwidth:"80px"}}
            />
          )}
          <button type='submit'>Đăng ký</button>
        </from>
        <a href='/login'>Bạn đã có tài khoản? Đăng nhập ở đây</a>
      </div>
    </div>
  )
}

export default RegisterPage