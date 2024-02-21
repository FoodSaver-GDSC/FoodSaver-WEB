"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getItemFromLocalStorage } from './utils/locaStroage';

const Header = () => {
    const [clickBookmark, setClickBookmark] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const token = getItemFromLocalStorage("token")


    const onClickBookmark = (bool: boolean) => {
        if (token) {
            router.push("/bookmark")
        } else {
            alert("로그인이 필요합니다!")
            router.push("/login")
        }

        setClickBookmark(bool)
        console.log(bool)
    }

    const onClickBack = () => {
        router.back()
    }
    return (
        <div className="navbar p-5 flex items-center justify-between w-full bg-white z-10">
            {pathname?.includes("recipes") || pathname?.includes("recipe") ?
                <div className="btn btn-ghost btn-circle" onClick={onClickBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                : <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10000] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={"/"}>레시피 생성하기</Link></li>
                        <li><a onClick={() => {
                            const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
                            if (modal) {
                                modal.showModal();
                            }
                        }}>커뮤니티</a></li>
                        <li><Link href="/foodbank">내 근처 푸드뱅크</Link></li>
                    </ul>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <p className="py-4">준비 중인 기능입니다!</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>}


            <Link href="/" className="font-bold text-2xl">
                <span className="text-mainColor">Food</span>
                <span className="text-textColor">Saver</span>
            </Link>
            <div className='btn btn-circle bg-white border-none shadow-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>



            </div>


        </div>
    );
};

export default Header;