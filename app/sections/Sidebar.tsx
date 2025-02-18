"use client";

import React, { useState } from "react";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, ConfigProvider } from "antd";
import { LuLayoutDashboard, LuCalendarRange } from "react-icons/lu";
import { CiUser, CiMenuBurger } from "react-icons/ci";
import { TbTemplate } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: <Link href="/">Dashboard</Link>,
    icon: <LuLayoutDashboard />,
  },
  {
    key: "users",
    label: <Link href="/users">Users</Link>,
    icon: <CiUser />,
  },
  {
    key: "recipes",
    label: <Link href="/recipes">Recipes</Link>,
    icon: <LuCalendarRange />,
  },
  {
    key: "categories",
    label: <Link href="/categories">Categories</Link>,
    icon: <CiMenuBurger />,
  },
  {
    key: "templates",
    label: <Link href="/templates">Templates</Link>,
    icon: <TbTemplate />,
  },
  {
    key: "Settings",
    label: <Link href="/settings">Settings</Link>,
    icon: <IoSettingsOutline />,
  },
];

const styleTheme = {
  components: {
    Menu: {
      itemBg: "transparent", // Background color
      itemSelectedBg: "#F28705", // Selected item background
      itemColor: "black", // Text color
      itemSelectedColor: "#fff", // Selected text color
    },
  },
};

const Sidebar: React.FC = () => {
  const [current, setCurrent] = useState("1");


  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="h-full max-h-screen overflow-y-auto scrollbar-hide bg-secondary2">
      <div className="flex items-center justify-center h-[100px]">
        <h2 className="text-4xl font-bold">PocketChef</h2>
      </div>
      <ConfigProvider theme={styleTheme}>
        <Menu
          onClick={onClick}
          style={{ width: "230px" }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </ConfigProvider>
    </div>
  );
};

export default Sidebar;
