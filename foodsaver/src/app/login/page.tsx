import Image from 'next/image';
import React from 'react';
import googlePng from "../../../public/Google.png"

const Page = () => {
    return (
        <div className='mt-20 flex flex-col items-center justify-center space-y-2'>
            <div className='flex'>
                <div className='btn flex items-center border bg-white font-medium border-borderColor rounded-full px-8 py-2'>
                    <Image src={googlePng} alt="google" className='h-8 w-8' />
                    구글 계정으로 계속하기
                </div>
            </div>
            <div className='text-[10px] w-64 text-center font-thin'>
                계속 진행하면 FoodSaver의 서비스 약관 및 <br /> 개인정보 보호 정책 동의한 것으로 간주됩니다.
            </div>
        </div>
    );
};

export default Page;