declare global {
    interface Window {
        google: {
            maps: {
                Map: any;
                Marker: any;
                // Add other types as needed
            };
        };
    }
}