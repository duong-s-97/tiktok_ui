import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  leftIcon,
  rightIcon,
  primary = false,
  outline = false,
  small = false,
  large = false,
  upload = false,
  disable = false,
  rounder = false,
  onClick,
  children,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener when btn is dissable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof key === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    upload,
    disable,
    rounder,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("plus-btn")}>{leftIcon}</span>}
      <div className={cx("btn-title")}>{children}</div>
      {rightIcon && <span className={cx("plus-btn")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
to: PropTypes.string,
href: PropTypes.string,
leftIcon: PropTypes.node,
rightIco: PropTypes.node,
primary : PropTypes.bool,
outline : PropTypes.bool,
small : PropTypes.bool,
large : PropTypes.bool,
upload: PropTypes.bool,
disable : PropTypes.bool,
rounder : PropTypes.bool,
onClick: PropTypes.func,
children: PropTypes.node.isRequired,
}

export default Button;
