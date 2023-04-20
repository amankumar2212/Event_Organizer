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
      <Link to='/attendeesignup'>
        Sign Up As a User
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to='/collegesignup'>
        Sign Up As a College
      </Link>
    ),
  },

];

const SignupDropdownMenu: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className='dropdownsignup'>Signup <DownOutlined /></div>
       
      </Space>
    </a>
  </Dropdown>
);

export default SignupDropdownMenu;