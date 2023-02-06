
import {
    SearchIcon,
    LoadingIcon,
    ClearIcon} from "../../../components/Icons/Icons"
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import AccountItem from "../../../components/AccoutItem";
import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useDebounce } from "../../../routes/hooks";
import request from "../../../utils/request";


const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchvalue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
      if(!debounce.trim()) {
        setSearchResult([])
        return;
      }

      setLoading(true)

      request.get('users/search', {
        params : {
          q: debounce,
          type: 'less'
        }
      } )
        .then((res) => {
          setSearchResult(res.data.data)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }, [debounce]);

    const handlehideResult = () => {
      setShowResult(false)
    }

    const handleChange = (e) => {
      const searchValue = e.target.value
      if(!searchValue.startsWith(' ')){
        setSearchvalue(searchValue)
      }
      
    }

  

    return ( 
        <div>
          <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Tài khoản</h4>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
                
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handlehideResult}
        >
          <div className={cx("search")}>
            <input
            ref={inputRef}
              value={searchValue}
              placeholder="Tìm kiếm tài khoản và video"
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
              <button className={cx("clear")}   onClick={() => {
                setSearchvalue('');
                inputRef.current.focus();
              }}>
                <ClearIcon />
              </button>
              
            )}
            
            {loading && <LoadingIcon className={cx("loading")} />}
            <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
        </div>
     );
}



export default Search;