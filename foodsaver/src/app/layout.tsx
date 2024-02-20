import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Provider from "@/components/Provider";

const MyLocalFont = localFont({
  src: [
    {
      path: '../../public/fonts/GmarketSansTTFLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GmarketSansTTFMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GmarketSansTTFBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})
export const metadata: Metadata = {
  title: "FoodSaver",
  description: "남는 재료를 알뜰히!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY)
  return (
    <html className="flex justify-center bg-white">
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY}&callback=initMap`}
        async
      />
      <body className="w-full sm:w-[640px] bg-white">
        <Provider>
          <div className=" fixed top-0 w-full sm:w-[640px] z-0">
            <Header />
          </div>
          <div className="mt-28 px-5 sm:px-20">
            {children}
          </div>


        </Provider>


      </body>
    </html >
  );
}
