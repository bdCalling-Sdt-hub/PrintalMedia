
import React, { useState } from 'react';
import { Input, Space, Table, Form, Radio } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
import { Button, Modal } from 'antd';
import Swal from 'sweetalert2';



const ManageUsers = () => {
  const [formOne] = Form.useForm();
  const [formTwo] = Form.useForm();
  const [selectionType, setSelectionType] = useState('checkbox');
  const [searchText, setSearchText] = useState('')
  const [modalOpenOne, setModalOpenOne] = useState(false)
  const [modalOpenTwo, setModalOpenTwo] = useState(false)
  const [value, setValue] = useState(1);


  // modal one
  const onFinishOne = () => {
    console.log('click')
  }

  const showModalOne = () => {
    setModalOpenOne(true)
  }

  const handleMondalOpenOneOk = () => {

  }
  const handleMondalCancelOneOk = () => {
    setModalOpenOne(false)
  }

  // modal two
  const onFinishTwo = () => {
    console.log('click')
  }

  const showModalTwo = () => {
    setModalOpenTwo(true)
  }

  const handleMondalOpenTwoOk = () => {

  }
  const handleMondalCancelTwoOk = () => {
    setModalOpenTwo(false)
  }




  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#00C49A',
      }}
    />
  );
  const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  const handleUpdate = () => {
    console.log('click')
  }

  const columns = [

    {
      title: 'Image',
      dataIndex: 'image',
      render: (_, record) => (
        <div className=''>
          <img src={record.avatar} alt="" className='w-[40px] rounded-full' />
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <div className=''>
          <p className='font-semibold'>{record.name}</p>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: <div className="">Action</div>,
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
          <button>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#FF5353" />
            </svg>
          </button>
      ),
    },
  ];


  const data = [
    {
      key: '1',
      verified_status: "Unverified",
      profile_status: "Unbanned",
      name: 'John Brown',
      email: 'john@example.com',
      action: '1',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      key: '2',
      verified_status: "Unverified",
      profile_status: "Unbanned",
      name: 'Emily White',
      email: 'emily@example.com',
      action: '2',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      key: '3',
      verified_status: "Verified",
      profile_status: "Unbanned",
      name: 'Michael Green',
      email: 'michael@example.com',
      action: '3',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      key: '4',
      verified_status: "Verified",
      profile_status: "Banned",
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      action: '4',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      key: '5',
      verified_status: "Unverified",
      profile_status: "Unbanned",
      name: 'David Lee',
      email: 'david@example.com',
      action: '5',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      key: '6',
      verified_status: "Verified",
      profile_status: "Unbanned",
      name: 'Olivia Taylor',
      email: 'olivia@example.com',
      action: '6',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
      key: '7',
      verified_status: "Unverified",
      profile_status: "Banned",
      name: 'Chris Evans',
      email: 'chris@example.com',
      action: '7',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
      key: '8',
      verified_status: "Verified",
      profile_status: "Unbanned",
      name: 'Sophia Martinez',
      email: 'sophia@example.com',
      action: '8',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
    }
  ];



  const onChange = e => {
    setValue(e.target.value);
  };




  return (
    <div>
      <Space direction="vertical" style={{ marginBottom: "20px", background: "#00C49A", borderRadius: "20px" }}>
        <Search placeholder="enter search email or name" onSearch={onSearch} enterButton
          className="custom-search-height"
        />
      </Space>





      <Table
        columns={columns}
        dataSource={data}
      />

      {/* modal one */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-OpenSans text-[18px]  font-semibold rounded-t-lg">
            Change verified status
          </div>
        }
        open={modalOpenOne}
        onOk={handleMondalOpenOneOk}
        onCancel={handleMondalCancelOneOk}
        footer={null}
        width={600}
        className='custom-service-modal'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8">
          <Form form={formOne} onFinish={onFinishOne}>
            <div className="space-y-3">
              {/* car image */}
              <div className="w-full flex justify-center items-center border border-[#ccc] p-4 rounded-xl mb-10">
                <Radio.Group
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                  onChange={onChange}
                  value={value}
                  options={[
                    { value: 'Verified', label: 'verified' },
                    { value: 'Unverified', label: 'Unverified' },
                  ]}
                />
              </div>

              <Button
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#00C49A",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "600",
                  height: "60px",
                  borderRadius: "20px",
                  paddingInline: "20px",
                  marginTop: "20px",
                  border: "none",

                }}
              >
                Done
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      {/* modal two */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-OpenSans text-[18px]  font-semibold rounded-t-lg">
            Change profile status
          </div>
        }
        open={modalOpenTwo}
        onOk={handleMondalOpenTwoOk}
        onCancel={handleMondalCancelTwoOk}
        footer={null}
        width={600}
        className='custom-service-modal'
        maskStyle={{ backgroundColor: 'rgba(134, 134, 134, 0.4)' }}
      >

        <div className="p-8">
          <Form form={formTwo} onFinish={onFinishTwo}>
            <div className="space-y-3">
              {/* car image */}
              <div className="w-full flex justify-center items-center border border-[#ccc] p-4 rounded-xl mb-10">
                <Radio.Group
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                  onChange={onChange}
                  value={value}
                  options={[
                    { value: 'Ban', label: 'ban' },
                    { value: 'Unban', label: 'unban' },
                  ]}
                />
              </div>

              <Button
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#00C49A",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "600",
                  height: "60px",
                  borderRadius: "20px",
                  paddingInline: "20px",
                  marginTop: "20px",
                  border: "none",

                }}
              >
                Done
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default ManageUsers