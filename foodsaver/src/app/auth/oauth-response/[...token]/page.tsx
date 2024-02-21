"use client"

import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { setTokenCookie } from '@/components/utils/auth';
import { useParams, useRouter } from 'next/navigation';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/components/utils/locaStroage';


const Redirect = () => {
    const router = useRouter();
    const param = useParams()
    const token = param?.token?.[0];
    // const cookieStore = cookies();

    console.log(param?.token[0])
    setItemToLocalStorage("token", token)
    if (getItemFromLocalStorage("token") !== undefined || getItemFromLocalStorage("token") !== null) {
        router.push("/")
    }

    return (
        <div>
            로그인중,,,
        </div>
    );
};


export default Redirect;