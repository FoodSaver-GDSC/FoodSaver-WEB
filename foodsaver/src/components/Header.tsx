"use client";
import React, { useState } from 'react';

const Header = () => {
    const [clickMenu, setClickMenu] = useState<boolean>(false)
    const [clickBookmark, setClickBookmark] = useState<boolean>(false)
    const onClickMenu = () => {
        setClickMenu(prev => !prev)
    }
    const onClickBookmark = (bool: boolean) => {
        setClickBookmark(bool)
        console.log(bool)
    }
    return (
        <div className="p-5 flex items-center justify-between">

            <div className='dropdown relative '>
                <div onClick={onClickMenu} tabIndex={0} role="button" className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <ul tabIndex={0} className="z-[1] menu dropdown-content rounded-box absolute top-7 p-5 py-3  w-56 shadow-xl text-xl space-y-3">
                    <li><a>레시피 생성하기</a></li>
                    <li><a>커뮤니티</a></li>
                    <li><a>내 근처 푸드뱅크</a></li>
                </ul>

            </div>
            <div className="font-bold text-2xl">
                <span className="text-mainColor">Food</span>
                <span className="text-textColor">Saver</span>
            </div>
            <div>
                {
                    clickBookmark ?
                        <svg onClick={() => onClickBookmark(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                        </svg>

                        :
                        <svg onClick={() => onClickBookmark(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                }


            </div>


        </div>
    );
};

export default Header;