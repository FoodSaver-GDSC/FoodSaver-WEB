declare global {
    interface Window {
        initMap?: () => void;
        google?: {
            maps?: {
                Map?: any;
                Marker?: any;
                // Add other types as needed
            };
        };
    }
}