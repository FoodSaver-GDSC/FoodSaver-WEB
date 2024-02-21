"use client"
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


interface RecipesValues {
    id: number,
    name: string
}

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { slug } = useParams() as { slug: string[] }
    const [recipes, setRecipes] = useState<RecipesValues[] | null>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/filter?ingredientNames=${slug}`).then(res => {
            console.log(res)
            setRecipes(res.data)
            setLoading(true)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className=''>
            {loading ?
                <div className='p-4'>
                    <div className='text-xl'>
                        <span className='text-mainColor font-bold'>레시피</span>가 생성되었어요!
                    </div>
                    <ul className='menu rounded-box menu-lg '>
                        {recipes?.map((recipe, key) =>
                            <li key={key}>
                                <Link href={`/recipe/${recipe.id}`}>{key + 1}. {recipe.name}</Link>
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