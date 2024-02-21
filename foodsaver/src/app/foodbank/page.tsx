"use client"

import { cls } from '@/components/\butils/utils';
import GoogleMap from '@/components/GoogleMap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';


interface FormData extends FieldValues {
    search: string;
}
const address = [
    { center: "전국푸드뱅크", area: "중앙", detail: "서울특별시 마포구 만리재로 14 한국사회복지회관 1201호", phone: "02-2077-3985" },
    { center: "전국푸드뱅크", area: "중앙", detail: "서울특별시 마포구 만리재로 14 한국사회복지회관 1201호", phone: "02-2077-3985" },
    { center: "전국푸드뱅크", area: "중앙", detail: "서울특별시 마포구 만리재로 14 한국사회복지회관 1201호", phone: "02-2077-3985" },
    { center: "전국푸드뱅크", area: "중앙", detail: "서울특별시 마포구 만리재로 14 한국사회복지회관 1201호", phone: "02-2077-3985" },
    { center: "전국푸드뱅크", area: "중앙", detail: "서울특별시 마포구 만리재로 14 한국사회복지회관 1201호", phone: "02-2077-3985" },

]
interface AddressValue {
    name: string,
    id: number,
    location: string,
    address: string,
    phoneNumber: string
}


const Page = () => {
    const { register, handleSubmit, reset } = useForm<FormData>()
    const [address, setAddress] = useState<AddressValue[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    const [pageIndex, setPageIndex] = useState<number>(1)

    const onValid: SubmitHandler<FormData> = ({ search }) => {
        console.log(search)
        if (search) {
            axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/foodbanks/search?keyword=${search}`,
            ).then(res => {
                console.log(res)
                const resContent = res.data.content
                if (resContent.length === 0) {
                    alert("검색 결과가 없습니다!")
                } else {
                    setAddress(res.data.content)
                    setTotalPages(Number(res.data.totalPages))
                }
            }).catch(err => console.log(err))
        }
        reset()
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/foodbanks?page=${page}`)
            .then(res => {
                console.log(res)
                setAddress(res.data.content)
                setTotalPages(Number(res.data.totalPages))
                setLoading(true)
            }).catch(err => console.log(err))
    }, [page])
    return (
        <div>
            <div className='bg-textColor text-white p-2 rounded-xl text-xs'>
                푸드뱅크란 ?  생산, 유통, 판매, 소비 과정에서 발생한 잉여 식품, 현물, 기금 등을 후원받아 필요한 이웃에게 전달하여 식품을 통한 사랑의 나눔을 실천하는 식품 은행. 개인이나 식품관련업체, 도매점, 소매점, 음식점 등으로부터 먹을 수 있는 식품 또는 사용 가능한 물품, 기부금 등을 받아 이웃에게 전달하는 시스템을 말합니다.
            </div>
            <div className='py-2'>
                <span className='text-3xl'>푸드뱅크 지도</span>
            </div>
            <div className=''>
                <GoogleMap />
                <div className='py-8 space-y-4'>
                    <form onSubmit={handleSubmit(onValid)} className='relative'>
                        <input {...register("search")} className='input input-bordered w-full' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-mainColor absolute right-5 top-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </form>
                    <div className="overflow-x-scroll text-nowrap">
                        {loading ? <table className="table w-full">
                            {/* head */}
                            <thead className=''>
                                <tr>
                                    <th></th>
                                    <th>센터명</th>
                                    <th>지역</th>
                                    <th>상세주소</th>
                                    <th>전화번호</th>
                                </tr>
                            </thead>
                            <tbody>
                                {address?.map((a, i) =>
                                    <tr key={i} className=''>
                                        <th>{a.id}</th>
                                        <td>{a.name}</td>
                                        <td>{a.location}</td>
                                        <td>{a.address}</td>
                                        <td>{a.phoneNumber}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table> :
                            <div className='flex items-center justify-center h-64'>
                                <div className='loading' />
                            </div>
                        }

                    </div>
                    <div className="join flex justify-center">
                        <button onClick={() => {
                            const newPage = pageIndex === 1 ? pageIndex : pageIndex - 1

                            setPageIndex(newPage)
                            console.log(pageIndex)
                        }} className="join-item btn">«</button>
                        {loading ?
                            Array.from({ length: totalPages + 1 }, (_, index) => index).slice(pageIndex * 5 - 4, pageIndex * 5 + 1).map((item, key) =>
                                <button key={key} onClick={() => setPage(item - 1)} className={cls("join-item btn ", page == item - 1 ? "btn-active" : null)}>{item}</button>
                            )
                            :
                            null
                        }
                        <button onClick={() => {
                            const newPage = pageIndex === ~~(totalPages / 5) + 1 ? pageIndex : pageIndex + 1
                            setPageIndex(newPage)
                            console.log(pageIndex)
                        }} className="join-item btn">»</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;