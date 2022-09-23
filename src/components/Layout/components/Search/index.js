import HeadlessTippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import 'tippy.js/dist/tippy.css'; // optional

import * as searchServices from '~/apiServices/searchServices';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = className.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    return (
        //tippy warning
        <>
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue &&
                        !loading && ( //!!searchValue => convert boolean
                            <button className={cx('clear')} onClick={handleClear}>
                                <HiOutlineX />
                            </button>
                        )}
                    {loading && <AiOutlineLoading3Quarters className={cx('loading')} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <BsSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
