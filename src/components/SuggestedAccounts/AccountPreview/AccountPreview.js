import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';
import Button from "../../Button";
import { CheckIcon } from "../../Icons/Icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
            <img className={cx('avatar')} src='https://scontent.fthd1-1.fna.fbcdn.net/v/t1.6435-9/160361225_1555285298014509_7439359236161059109_n.jpg?stp=c0.79.720.720a_dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=AomqerTQ5aAAX8FISXg&_nc_ht=scontent.fthd1-1.fna&oh=00_AfBhCN8Zqi4ZYXFJl4ETEieOUNgncl7O6gXk37xD4KFcYA&oe=63F94D2C'
                alt='' />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                        <strong>susu</strong>
                        <CheckIcon className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Nguyễn Thị Hoài Thu </p>
            </div>
            <div className={cx('footer')}>
                <strong className={cx('value')}>5.6M</strong>
                <p className={cx('lable')}>Follower</p>
                <strong className={cx('value')}>506.6M</strong>
                <p className={cx('lable')}>Thích</p>
            </div>
        </div>
     );
}

AccountPreview.propTypes = {}

export default AccountPreview;