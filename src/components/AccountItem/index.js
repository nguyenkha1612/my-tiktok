import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/297990921_1545221645936165_4467323158470599965_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4b7h4Ar8AF8AX8nQWsl&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT8f3LTBp8DxATuFfqjeOLDcz83lQzTAxKJ3W4D4Z37LNw&oe=6328FAAF"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huu Kha</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>yangheenlw</span>
            </div>
        </div>
    );
}

export default AccountItem;
