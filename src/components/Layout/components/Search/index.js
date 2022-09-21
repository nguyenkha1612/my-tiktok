import HeadlessTippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import 'tippy.js/dist/tippy.css'; // optional

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = className.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input //two way binding
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue &&
                    !loading && ( //!!searchValue => convert boolean
                        <button className={cx('clear')} onClick={handleClear}>
                            <HiOutlineX />
                        </button>
                    )}
                {loading && <AiOutlineLoading3Quarters className={cx('loading')} />}

                <button className={cx('search-btn')}>
                    <BsSearch />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
