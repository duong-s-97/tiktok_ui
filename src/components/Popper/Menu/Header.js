import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Header({ title, onback }) {



  return (
    <header className={cx('header')} >
        <button className={cx("btn-back")} onClick={onback}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h4 className={cx('header-title')}>{title}</h4>
     </header>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onback: PropTypes.func.isRequired,
}

export default Header;
