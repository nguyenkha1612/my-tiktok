import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import className from 'classnames/bind';
import { AiOutlineCloudUpload, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { BiMessageAltMinus, BiPaperPlane } from 'react-icons/bi';
import { BsCoin, BsKeyboard } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { IoEarth } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import routesConfig from '~/config/routes';

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
    const currentUser = true;

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
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay="200" content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <AiOutlineCloudUpload />
                                </button>
                            </Tippy>
                            <Tippy delay="200" content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BiPaperPlane />
                                </button>
                            </Tippy>
                            <Tippy delay="200" content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BiMessageAltMinus />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuCHange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={
                                    'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/297990921_1545221645936165_4467323158470599965_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4b7h4Ar8AF8AX8nQWsl&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT8f3LTBp8DxATuFfqjeOLDcz83lQzTAxKJ3W4D4Z37LNw&oe=6328FAAF'
                                }
                                alt={'Nguyen Van A'}
                                fallback="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/306004139_645432850501768_8126873536246337482_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=21Y-U5wlQ7AAX8-n7Mh&tn=GllT5Vg-glcoEbto&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT8XIm3_PiVljhqFdEYdnoIqk-XeA_SkUdQ-YSGVQV4S8Q&oe=632D1DE3"
                            />
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
