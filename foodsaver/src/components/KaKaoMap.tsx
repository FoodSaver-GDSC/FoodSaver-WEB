"use client"

import React, { useEffect } from 'react';

const KakaoMap = () => {
    useEffect(() => {
        function getSuccess(position: any) {
            // 위도
            const lat = position.coords.latitude;
            // 경도
            const lng = position.coords.longitude;
            // 위도 경도 오차(m)
            console.log(lat, lng)
            const mapScript = document.createElement('script');

            mapScript.async = true;
            mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;

            document.head.appendChild(mapScript);

            const onLoadKakaoMap = () => {
                window.kakao.maps.load(() => {
                    const mapContainer = document.getElementById('map');
                    const mapOption = {
                        center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
                        level: 3, // 지도의 확대 레벨
                    };
                    new window.kakao.maps.Map(mapContainer, mapOption);
                });
            };
            mapScript.addEventListener('load', onLoadKakaoMap);

        }

        // 가지오기 실패(거부)
        function getError() {
            alert('Geolocation Error');
        }

        navigator.geolocation.getCurrentPosition(getSuccess, getError);



    }, [])

    return (
        <div>
            <div id="map" className='w-full h-80 z-0'></div>
        </div>
    );
};

export default KakaoMap;
