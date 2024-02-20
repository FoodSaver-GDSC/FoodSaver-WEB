"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const recipes = [
    { id: 1, name: "가래떡 구이" },
    { id: 2, name: "가래떡 어쩌구" },
    { id: 3, name: "가래떡 저쩌구" },
]
const Page = () => {
    const [loading, setLoading] = useState<boolean>(true)
    // const [recipes]

    return (
        <div className=''>
            {loading ?
                <div className='p-4'>
                    <div className='text-xl'>
                        <span className='text-mainColor'>레시피</span>가 생성되었어요!
                    </div>
                    <ul className='menu rounded-box menu-lg '>
                        {recipes?.map(recipe =>
                            <li>
                                <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                : <div className='text-center mt-32'>
                    <span className="loading loading-spinner loading-md bg-mainColor"></span>
                    <div>
                        맛있는 레시피를
                        생성하고 있어요!
                    </div>
                </div>}


        </div>
    );
};

export default Page;