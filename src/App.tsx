import React, { useState } from "react";
import type { FC } from "react";
import { Button, ConfigProvider, Menu, Layout } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1"
          },
          {
            label: "Option 2",
            key: "setting:2"
          }
        ]
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3"
          },
          {
            label: "Option 4",
            key: "setting:4"
          }
        ]
      }
    ]
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay"
  }
];

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`
      };
    })
  };
});
const App: FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b"
        }
      }}
    >
      <Layout className="menu">
        <Header className="header">
          <Menu
            className="menu"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Header>
        <Layout className="sider">
          <Sider width={200} style={{ background: "white" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "24px 24px", minHeight: 1280 }}>
            <div className="App">
              <Button type="primary">欢迎</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
