import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
  const classes = cx("btn-list", {
    separate: data.separate,
  });
  return (
    <Button to={data.to} className={classes} onClick={onClick}>
      <span className={cx("btn-icon")}>{data.icon}</span>
      <h4>{data.title}</h4>
      <div className={cx('change-mode')}>{data.change}</div>
    </Button>
  );
}

MenuItems.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default MenuItems;
