interface PrayerTimesResponse {
    code: number;
    status: string;
    data: {
        timings: {
            Fajr: string;
            Sunrise: string;
            Dhuhr: string;
            Asr: string;
            Sunset: string;
            Maghrib: string;
            Isha: string;
            Imsak: string;
            Midnight: string;
            Firstthird: string;
            Lastthird: string;
        };
        date: {
            readable: string;
            timestamp: string;
            hijri: {
                date: string;
                format: string;
                day: string;
                weekday: {
                    en: string;
                    ar: string;
                };
                month: {
                    number: number;
                    en: string;
                    ar: string;
                };
                year: string;
                designation: {
                    abbreviated: string;
                    expanded: string;
                };
            };
            gregorian: {
                date: string;
                format: string;
                day: string;
                weekday: {
                    en: string;
                };
                month: {
                    number: number;
                    en: string;
                };
                year: string;
                designation: {
                    abbreviated: string;
                    expanded: string;
                };
            };
        };
    };
}

// Default Location: New Delhi, India
const DEFAULT_LAT = 28.6139;
const DEFAULT_LONG = 77.2090;

export const getPrayerTimes = async (latitude?: number, longitude?: number): Promise<PrayerTimesResponse | null> => {
    try {
        const lat = latitude ?? DEFAULT_LAT;
        const long = longitude ?? DEFAULT_LONG;
        const method = 2; // ISNA

        // Format: DD-MM-YYYY
        const date = new Date();
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const response = await fetch(
            `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${lat}&longitude=${long}&method=${method}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: PrayerTimesResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return null;
    }
};
