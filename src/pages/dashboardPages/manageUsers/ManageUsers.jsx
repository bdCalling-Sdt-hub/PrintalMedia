
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
        <div className='flex items-center gap-6'>
          <button>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1871 9.007C19.8623 8.81819 19.5705 8.5777 19.3231 8.295C19.3481 7.90141 19.4418 7.51525 19.6001 7.154C19.8911 6.333 20.2201 5.403 19.6921 4.68C19.1641 3.957 18.1671 3.98 17.2921 4C16.9054 4.03978 16.5148 4.0134 16.1371 3.922C15.9358 3.59451 15.7921 3.23498 15.7121 2.859C15.4641 2.014 15.1811 1.059 14.3121 0.772999C13.4741 0.502999 12.6981 1.097 12.0121 1.619C11.7161 1.88932 11.3731 2.10317 11.0001 2.25C10.6232 2.10437 10.2764 1.89046 9.97707 1.619C9.29307 1.1 8.52007 0.499999 7.67807 0.773999C6.81107 1.056 6.52807 2.014 6.27807 2.859C6.1982 3.23376 6.05588 3.59243 5.85707 3.92C5.47859 4.01116 5.0875 4.0382 4.70007 4C3.82207 3.976 2.83307 3.95 2.30007 4.68C1.76707 5.41 2.10007 6.333 2.39207 7.153C2.55251 7.51371 2.64765 7.90003 2.67307 8.294C2.42615 8.57708 2.13464 8.81791 1.81007 9.007C1.07807 9.507 0.24707 10.076 0.24707 11C0.24707 11.924 1.07807 12.491 1.81007 12.993C2.13457 13.1818 2.42607 13.4223 2.67307 13.705C2.65033 14.0988 2.55789 14.4855 2.40007 14.847C2.11007 15.667 1.78207 16.597 2.30907 17.32C2.83607 18.043 3.83007 18.02 4.70907 18C5.09604 17.9602 5.48696 17.9866 5.86507 18.078C6.06545 18.4058 6.20881 18.7653 6.28907 19.141C6.53707 19.986 6.82007 20.941 7.68907 21.227C7.82839 21.2717 7.97376 21.2946 8.12007 21.295C8.82328 21.1941 9.47685 20.8743 9.98807 20.381C10.2841 20.1107 10.6271 19.8968 11.0001 19.75C11.377 19.8956 11.7238 20.1095 12.0231 20.381C12.7081 20.904 13.4841 21.501 14.3231 21.226C15.1901 20.944 15.4731 19.986 15.7231 19.142C15.8032 18.7665 15.9466 18.4074 16.1471 18.08C16.5241 17.9882 16.914 17.9612 17.3001 18C18.1781 18.021 19.1671 18.05 19.7001 17.32C20.2331 16.59 19.9001 15.667 19.6081 14.846C19.4487 14.4856 19.3536 14.1001 19.3271 13.707C19.5741 13.4237 19.866 13.1828 20.1911 12.994C20.9231 12.494 21.7541 11.924 21.7541 11C21.7541 10.076 20.9201 9.508 20.1871 9.007Z" fill="#49ADF4" />
              <path d="M10.0001 13.75C9.90159 13.7502 9.80403 13.7308 9.71306 13.6931C9.62209 13.6553 9.5395 13.5999 9.47009 13.53L7.47009 11.53C7.33761 11.3878 7.26549 11.1998 7.26892 11.0055C7.27234 10.8112 7.35106 10.6258 7.48847 10.4884C7.62588 10.351 7.81127 10.2723 8.00557 10.2688C8.19987 10.2654 8.38792 10.3375 8.53009 10.47L10.0701 12.01L13.5501 9.4C13.7092 9.28066 13.9092 9.22941 14.1062 9.25754C14.3031 9.28567 14.4807 9.39087 14.6001 9.55C14.7194 9.70913 14.7707 9.90916 14.7426 10.1061C14.7144 10.303 14.6092 10.4807 14.4501 10.6L10.4501 13.6C10.3202 13.6973 10.1624 13.7499 10.0001 13.75Z" fill="white" />
            </svg>

          </button>

          <button>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#FF5353" />
            </svg>
          </button>
        </div>
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