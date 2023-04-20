import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import './Dropdown.css';


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to='/conference'>
        Conference
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to='/hackathon'>
        Hackathon
      </Link>
    ),


  },
  {
    key: '3',
    label: (
      <Link to='/seminar'>
        Seminar
      </Link>
    ),

  },
  {
    key: '4',
    label: (
      <Link to='/workshop'>
        Workshop
      </Link>
    ),

  },
];

const DropdownMenu: React.FC = () =>
(
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className='events'>Events </div>
        <div className='event-drop'>
          <DownOutlined />
        </div>


      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;