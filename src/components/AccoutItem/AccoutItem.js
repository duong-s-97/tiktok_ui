import PropTypes from 'prop-types';
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img
        src={data.avatar}
        className={cx("avatar")}
        alt={data.full_name}
      />
      <div className={cx("info")}>
        <div className={cx("name")}>
          <h4>{data.full_name}</h4>
          { data.tick && <FontAwesomeIcon
            className={cx("check-icon")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>}
        </div>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem;
