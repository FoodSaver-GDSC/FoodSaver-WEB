"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const howToMake = [
    "가래떡을 윗부분만 조금 남기고 반으로 잘라줍니다.",
    "꽈배기 모양처럼 떡을 꼬아줍니다.",
    "팬에 기름을 두르고 바삭하게 튀겨줍니다.",
    "설탕, 시나몬 가루를 섞고, 재방 같은 그릇에 담아줍니다.",
    "쟁반에 가루를 담아 튀긴 가래떡에 가루를 골구르 묻혀주면 완성!"
]
const Page = () => {
    const [bookmark, setClickBookmark] = useState<boolean>(false)

    const onClickBookmark = () => {
        setClickBookmark(prev => !prev)
    }
    return (
        <div className='px-5'>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='font-extrabold text-2xl text-textColor'>
                        가래떡 츄러스
                    </div>
                    <div onClick={onClickBookmark}>
                        {bookmark ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-mainColor w-6 h-6">
                                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                            </svg>

                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-mainColor w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>}


                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='text-sm'>
                    준비재료 : 가래떡, 설탕(6T), 시나몬 가루(2T)
                </div>
                <div className='h-40 bg-gray-300' />
                <div className='space-y-2'>
                    {howToMake.map((h, id) =>
                        <div key={id} className='space-x-2'>
                            <span>{id + 1}.</span><span>{h}</span>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;