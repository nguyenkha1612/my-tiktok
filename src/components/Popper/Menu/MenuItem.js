import className from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = className.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Button text leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
