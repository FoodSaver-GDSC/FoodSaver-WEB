import React from 'react';

const boormarks = [
    {
        name: "가래떡 츄러스",
        ingredients: "가래떡, 설탕(6T), 시나몬 가루(2T)"
    },
    {
        name: "순두부 열라면",
        ingredients: "열라면 반 개, 물 350ml, 순두부 반모, 대파, 고춧가루, 후추"
    },
    {
        name: "가래떡 츄러스",
        ingredients: "베이컨, 슬라이스 치즈, 밥, 후레이크"
    },

]

const Page = () => {
    return (
        <div>
            <div>
                <div className='text-3xl'>
                    저장한 레시피
                </div>
                <div>
                    전체 <span className='font-bold'>{boormarks.length}</span>개
                </div>
            </div>
            <div className='py-2 space-y-5'>
                {boormarks?.map((b, i) =>
                    <div key={i} className='grid grid-cols-[1fr,4fr] space-x-2 '>
                        <div className='h-20 w-20 bg-gray-100' />
                        <div className='space-y-2'>
                            <div className='flex justify-between '>
                                <div>
                                    {b.name}
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-mainColor">
                                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                            <div>
                                {b.ingredients}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;