import styles from './Header.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
