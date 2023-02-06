
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { CheckIcon } from '../Icons/Icons';
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../components/Popper";
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('preview')} >
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return ( 
     <Tippy
        interactive
        delay={[1000,1000]}
        offset={[-20,0]}
        render={renderPreview}
        placement='bottom'
     >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src='https://scontent.fthd1-1.fna.fbcdn.net/v/t1.6435-9/160361225_1555285298014509_7439359236161059109_n.jpg?stp=c0.79.720.720a_dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=AomqerTQ5aAAX8FISXg&_nc_ht=scontent.fthd1-1.fna&oh=00_AfBhCN8Zqi4ZYXFJl4ETEieOUNgncl7O6gXk37xD4KFcYA&oe=63F94D2C'
                alt='' />
                <div className={cx('info-item')}>
                    <p className={cx('nickname')}>
                        <strong>susu</strong>
                        <CheckIcon className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Nguyễn Thị Hoài Thu </p>
                </div>
            </div>
     </Tippy>
      
     );
}


export default AccountItem;