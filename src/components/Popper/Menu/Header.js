import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

export default Header;
