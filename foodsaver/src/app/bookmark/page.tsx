"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


interface RecipeValues {
    name: string,
    ingredients: string
    imageUrlBig: string,
    id: number
}
const Page = () => {
    const [recipes, setRecipes] = useState<RecipeValues[] | null>()
    const token = getItemFromLocalStorage("token")
    const router = useRouter()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/members/my-recipe`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            console.log(res)
            setRecipes(res.data)
        }).catch(err => console.log(err))
    }, [])

    const onClickRecipe = (id: number) => {
        router.push(`/recipe/${id}`)
    }
    return (
        <div>
            <div>
                <div className='text-3xl'>
                    저장한 레시피
                </div>
                <div>
                    전체 <span className='font-bold'>{recipes?.length}</span>개
                </div>
            </div>
            <div className='py-2 space-y-5'>
                {recipes?.map((r, i) =>
                    <div onClick={() => onClickRecipe(r.id)} key={i} className='grid grid-cols-[1fr,4fr] space-x-2  cursor-pointer'>
                        <img src={r.imageUrlBig} className='h-20 w-20 bg-gray-100' />
                        <div className='space-y-2'>
                            <div className='flex justify-between '>
                                <div className='font-bold'>
                                    {r.name}
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-mainColor">
                                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                            <div className='text-xs'>
                                {r.ingredients}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;