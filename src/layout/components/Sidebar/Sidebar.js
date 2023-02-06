
import classNames from "classnames/bind";
import routes from "../../../config/routes";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveSideBarIcon, HomeActiveIcon, UserGroupActiveIcon, LiveSideBarActiveIcon} from '../../../components/Icons/Icons'
import SuggestedAccounts from "../../../components/SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
      <MenuItem title = 'Dành cho bạn' to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
      <MenuItem title = 'Đang Follow' to={routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
      <MenuItem className={cx('live-icon')} title = 'Live' to={routes.live} icon={<LiveSideBarIcon />} activeIcon={<LiveSideBarActiveIcon />} />
      </Menu>
      <SuggestedAccounts lable="Tài khoản được đề xuất" />
      <SuggestedAccounts lable="Các tài khoản đang follow" />
      
    </aside>
  );
}

export default Sidebar;
