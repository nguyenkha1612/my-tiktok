import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { IoIosArrowBack } from 'react-icons/io';

import styles from './Menu.module.scss';

const cx = className.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <IoIosArrowBack className={cx('icon')} />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
