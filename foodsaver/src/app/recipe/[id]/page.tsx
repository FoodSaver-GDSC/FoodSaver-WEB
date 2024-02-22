"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/components/utils/locaStroage';


const Page = () => {
    const [bookmark, setClickBookmark] = useState<boolean>(false)
    const { id } = useParams() as { id: string }
    const [name, setName] = useState<string | null>()
    const [imageUrlBig, setImgUrlBig] = useState<string | null>()
    const [ingredients, setIngredients] = useState<string | null>()
    const [howToMake, setHowToMake] = useState<string[] | null>()
    const token = getItemFromLocalStorage("token")
    var bookmarksNames = getItemFromLocalStorage("bookmarks")
    const router = useRouter()

    useEffect(() => {
        if (bookmarksNames) {
            var data = bookmarksNames.split(",")
            if (data.includes(id.toString())) {
                setClickBookmark(true)
            } else {
                false
            }
        }
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}`).then(res => {
            console.log(res)
            setName(res.data.name)
            setImgUrlBig(res.data.imageUrlBig)
            setIngredients(res.data.ingredients)

            const temp = res.data.recipe
            const templist = temp.split("\n")
            setHowToMake(templist)
        }).catch(err => console.log(err))
    }, [])


    const onClickBookmark = () => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/members/toogle-recipe?recipeId=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            console.log(res)
            if (res.data === '레시피 저장') {
                console.log(bookmarksNames)
                bookmarksNames += "," + id
                console.log(bookmarksNames)
                setClickBookmark(true)
                setItemToLocalStorage("bookmarks", bookmarksNames as string)
            } else {
                var arr = bookmarksNames?.split(",")

                arr = arr?.filter(function (item) {
                    return item !== id
                })
                console.log(arr)
                bookmarksNames = arr?.join(",")
                setClickBookmark(false)
                setItemToLocalStorage("bookmarks", bookmarksNames as string)

            }
        })
            .catch(res => {
                console.log(res)
                alert("로그인이 필요한 기능입니다!")
                router.push("/login")
            })
        setClickBookmark(prev => !prev)
    }

    return (
        <div className='px-5'>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='font-extrabold text-2xl text-textColor'>
                        {name}
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
                <div className='text-sm whitespace-pre-wrap'>
                    {ingredients}
                </div>
                <div className='flex justify-center'>
                    <img src={imageUrlBig ? imageUrlBig : undefined} className='h-40 w-full object-contain bg-gray-100' />
                </div>

                <div className='space-y-2'>
                    {howToMake?.map((h, id) =>
                        <div key={id} className='space-x-2'>
                            <span>{h}</span>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;