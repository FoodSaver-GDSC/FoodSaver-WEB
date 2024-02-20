"use client"


import React, { useEffect } from 'react';

const GoogleMap = () => {

    async function initMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const { Map, Marker } = (window as any).google.maps;

                    const map = new Map(document.getElementById('map'), {
                        center: { lat: latitude, lng: longitude },
                        zoom: 14,
                    });

                    new Marker({
                        position: { lat: latitude, lng: longitude },
                        map: map,
                        title: 'Your Location',
                    });
                },
                (error) => {
                    console.error('Error getting current position:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    useEffect(() => {
        initMap()
    }, []);

    return (
        <div>
            <div id="map" className='w-full h-80 z-0'></div>
        </div>
    );
};

export default GoogleMap;
