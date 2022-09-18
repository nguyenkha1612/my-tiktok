import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import {
    AiOutlineCloudUpload,
    AiOutlineLoading3Quarters,
    AiOutlineMessage,
    AiOutlineQuestionCircle,
    AiOutlineSetting,
    AiOutlineUser,
} from 'react-icons/ai';
import { BsCoin, BsKeyboard, BsSearch } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosLogOut } from 'react-icons/io';
import { IoEarth } from 'react-icons/io5';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <IoEarth />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',

                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',

                    code: 'jp',
                    title: '日本',
                },
                {
                    type: 'language',
                    code: 'chi',
                    title: '中国人',
                },
            ],
        },
    },
    { icon: <AiOutlineQuestionCircle />, title: 'Feedback and help', to: '/feedback' },
    { icon: <BsKeyboard />, title: 'Keyboard shortcuts' },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setSearchResult([]);
    }, []);

    const handleMenuCHange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                console.log(menuItem);
        }
    };

    const USER_MENU = [
        { icon: <AiOutlineUser />, title: 'View profile', to: '/user' },
        { icon: <BsCoin />, title: 'Get coins', to: '/coin' },
        { icon: <AiOutlineSetting />, title: 'Settings', to: '/settings' },
        { icon: <IoIosLogOut />, title: 'Logout', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <HiOutlineX />
                        </button>
                        <AiOutlineLoading3Quarters className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <BsSearch />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay="200" content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <AiOutlineCloudUpload />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <AiOutlineMessage />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuCHange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src={
                                    'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/297990921_1545221645936165_4467323158470599965_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4b7h4Ar8AF8AX8nQWsl&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT8f3LTBp8DxATuFfqjeOLDcz83lQzTAxKJ3W4D4Z37LNw&oe=6328FAAF'
                                }
                                alt={'Nguyen Van A'}
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
