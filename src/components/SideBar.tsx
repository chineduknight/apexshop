import React, { useState } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/core";

interface MenuOptions {
  label: string;
  icon: string;
  path: string;
}

interface SideBarOption extends MenuOptions {
  submenu?: MenuOptions[];
}

interface SideBarProps {
  pages: SideBarOption[];
}

interface MenuItemProps {
  page: MenuOptions;
  isActive?: boolean;
  isSubMenu?: boolean;
  onClick: (page: MenuOptions) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const { page, isSubMenu = false, onClick, isActive = false } = props;

  const { label, icon } = page;

  return (
    <MenuItem.Wrapper
      isActive={isActive}
      isSubMenu={isSubMenu}
      onClick={() => onClick(page)}
    >
      <img src={icon} alt="icon" /> {label}
    </MenuItem.Wrapper>
  );
};

type MenuItemWrapperProps = {
  isActive: boolean;
  isSubMenu?: boolean;
};

MenuItem.Wrapper = styled.span<MenuItemWrapperProps>`
  padding: 0.6rem 1rem;
  img {
    width: 20px;
  }
  &:hover {
    background-color: green;
    cursor: pointer;
  }

  ${(props) =>
    props.isSubMenu &&
    css`
      padding-left: 2rem;
    `}

  ${(props) =>
    props.isActive &&
    css`
      background-color: green;
      cursor: pointer;
      border-left: 3px solid yellow;
    `}
`;

interface SubMenuProps extends Omit<MenuOptions, "path"> {
  pages: Array<SideBarOption>;
  onSubMenuClick: (page: MenuOptions) => void;
}

const SubMenu = (props: SubMenuProps) => {
  const [visible, setVisible] = useState(false);
  const { icon, label, pages, onSubMenuClick } = props;
  const itemPage = {
    label,
    icon,
    path: "",
  };

  const currentLocation = window.location.pathname;

  return (
    <>
      <MenuItem page={itemPage} onClick={() => setVisible(!visible)} />
      <SubMenu.Wrapper
        visible={visible}
        className={`${visible ? "is-visible" : ""}`}
      >
        {pages.map((page, index) => (
          <MenuItem
            isActive={currentLocation.includes(page.path)}
            key={index}
            isSubMenu
            page={page}
            onClick={onSubMenuClick}
          />
        ))}
      </SubMenu.Wrapper>
    </>
  );
};

type SubMenuWrapper = {
  visible: boolean;
};
SubMenu.Wrapper = styled.div<SubMenuWrapper>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.visible &&
    css`
      display: none;
    `}
`;

const SideBar = (props: SideBarProps) => {
  const { pages } = props;
  const history = useHistory();
  const currentLocation = window.location.pathname;
  const menuItemClickHandler = (page: MenuOptions) => history.push(page.path);

  return (
    <SideBar.Wrapper>
      {pages.map((page, index) => {
        const { label, icon, submenu } = page;

        return submenu === undefined ? (
          <MenuItem
            isActive={currentLocation.includes(page.path)}
            page={page}
            key={index}
            onClick={menuItemClickHandler}
          />
        ) : (
          <SubMenu
            onSubMenuClick={menuItemClickHandler}
            key={page.label}
            label={label}
            icon={icon}
            pages={submenu}
          />
        );
      })}
    </SideBar.Wrapper>
  );
};

SideBar.Wrapper = styled.aside`
  width: 10rem;
  height: 100%;
  background: #1d294c;
  position: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export default SideBar;
