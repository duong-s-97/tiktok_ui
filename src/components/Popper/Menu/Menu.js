import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import MenuItems from "./MenuItems";
import Header from "./Header";
import { useState } from "react";
import "tippy.js/dist/tippy.css";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ children, items=[], hideOnClick = false }) {

  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]

  const renderItems = () => {
      return current.data.map((item, index) => {
        const isParent = !!item.children
        return (
          <MenuItems  key={index} data={item} onClick={() => {
            if(isParent) {
              setHistory(prey => [...prey, item.children])
            }
          }}/>
        )
      })
  }

  return (
    <Tippy
      interactive
      delay={[0,700]}
      offset={[15,8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-option")}>
            
              {history.length > 1 && <Header title={current.title} onback={() => {
                setHistory(prey => prey.slice(0, prey.length - 1))
              }} />}
              <div className={cx('menu-body')}>{renderItems()}</div>
         
          </PopperWrapper>
        </div>
      )}
      onHidden={() => setHistory(prey => prey.slice(0,1))}
    >
      {children}
      
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
}

export default Menu;
