import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import './LSDropdown.css'


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to='/Attendeelogin'>
        Login As a User
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to='/collegelogin'>
        Login As a College
      </Link>
    ),
  },
  
];

const LoginDropdownMenu: React.FC = () => (
  <Dropdown menu={{ items }} centered size='large' >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <div className='dropdownlogin'>Login <DownOutlined /></div> 
        
      </Space>
    </a>
  </Dropdown>
);

export default LoginDropdownMenu;