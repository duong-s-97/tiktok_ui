import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images"
import Tippy from "@tippyjs/react";
import Button from "../../../components/Button";
import Menu from "../../../components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import Search from "../Search";
import { Link } from "react-router-dom";
import routesConfigs from "../../../config/routes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Switch } from 'antd';
import {
  CoinsIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LiveIcon,
  LogoutIcon,
  MessageIcon,
  SettingIcon,
  SupportIcon,
  UserIcon,
  ModeIcon,
} from "../../../components/Icons/Icons";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: (
      <LanguageIcon />
    ),
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          code: "vi",
          title: "Tiếng Việt",
          type: "language",
        },
        {
          code: "en",
          title: "English",
          type: "language",
        },
      ],
    },
  },
  {
    icon: <SupportIcon/>,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <ModeIcon />,
    title: "Chế độ tối",
    change:<Switch/>,
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem) {
      case "language":
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <UserIcon />,
      title: "Xem hồ sơ",
      to: "/@duongg_",
    },
    {
      icon: <CoinsIcon />,
      title: "Nhận Xu",
      to: "/coin",
    },
    {
      icon: <LiveIcon />,
      title: "LIVE Studio",
      to: "/studio",
    },
    {
      icon: <SettingIcon />,
      title: "Cài đặt",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: "Đăng xuất",
      separate: true,
      to: "/logout",
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={routesConfigs.home} className={cx('logo-link')}>
          <img src={images.logo} alt="TIKTOK"></img></Link>
        </div>

       <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <div className={cx("options-login")}>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Tải lên </span>
              </Button>
              <Tippy delay={[0, 0]} content="Tin nhắn">
                <div className={cx("message-icon")}>
                  <MessageIcon />
                </div>
              </Tippy>
              <Tippy content="Hộp thư">
                <div className={cx("mailbox-icon")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </div>
              </Tippy>
            </div>
          ) : (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Tải lên </span>
              </Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://scontent.fthd1-1.fna.fbcdn.net/v/t39.30808-1/293292753_2190453027787076_3650698151343129534_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ODfdQAvjeFQAX91P0xC&_nc_ht=scontent.fthd1-1.fna&oh=00_AfACmrxnaHVCz5r9uAUnJnb6SLZQV518NSGouG8YD_kINg&oe=63C873BB"
                className={cx("avatar-user")}
                alt="No Avatar"
              />
            ) : (
              <button className={cx("more-btn")} tabIndex="-1">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
    
  );
}

export default Header;
