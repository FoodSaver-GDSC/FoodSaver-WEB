"use client"

import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { setTokenCookie } from '@/components/\butils/auth';
import { useParams, useRouter } from 'next/navigation';


const Redirect = () => {
    const router = useRouter();
    const param = useParams()
    const token = param?.token?.[0]?.substring(7);
    // const cookieStore = cookies();

    console.log(param?.token[0].substring(7))
    localStorage.setItem("token", token)
    // useEffect(() => {
    //     const token = param?.token[0].substring(7);
    //     if (token) {


    //     }
    // }, []);
    return (
        <div>
            dfsf
        </div>
    );
};


export default Redirect;