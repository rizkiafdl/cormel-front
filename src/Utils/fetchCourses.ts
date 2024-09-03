import axios from 'axios';

const API_URL = "http://localhost:1337/api/Courses?populate=*";
const AUTH_TOKEN = "Bearer a77cb36aef5cd9669b2568626fc3eae227368f9d3d98aac62ae1e560f241d289c59c13c5ef81a8a715f3be4b5d7644f2d33dde6e46cb0d0e5cfa0ff7634f51352cfe7e1ac10df75986117847fb8e234d4d11c08894a5eaccd8e91b931c1ec399c5eb78c386a3bbdee7677abe7608681d2f340353436e7129b6ca232c4b959f6c";

interface Thumbnail {
    url: string;
}

interface Formats {
    thumbnail: Thumbnail;
}

interface ThumbnailAttributes {
    formats: Formats;
}

interface ThumbnailData {
    attributes: ThumbnailAttributes;
}

interface CourseAttributes {
    courseTitle: string;
    lecturer: string;
    tag: { field: Record<string, string> };
    Outline: { materi: Record<string, string> };
    thumbnail: { data: ThumbnailData[] } | null;
    linkVideo: Record<string, any>;
}

interface Course {
    id: number;
    attributes: CourseAttributes;
}

interface APIResponse {
    data: Course[];
}

export interface FetchedCourse {
    id: number;
    courseTitle: string;
    lecturer: string;
    tag: string[];
    outline: string[];
    thumbnail: string | null;
    linkVideo: Record<string, any> | null;
}

export const fetchCourses = async (): Promise<FetchedCourse[]> => {
    try {
        const response = await axios.get<APIResponse>(API_URL, {
            headers: {
                'Authorization': AUTH_TOKEN
            }
        });

        return response.data.data.map((item) => {
            const { id } = item;
            const {
                courseTitle,
                lecturer,
                tag,
                Outline,
                thumbnail,
                linkVideo
            } = item.attributes;

            // Safely extract the thumbnail URL
            const thumbnailUrl = thumbnail?.data
                ? `http://localhost:1337${thumbnail.data[0].attributes.formats.thumbnail.url}`
                : null;

            // Safely extract linkVideo data using the utility function
            const videoLinks = extractVideoLinks(linkVideo);

            return {
                id,
                courseTitle,
                lecturer,
                tag: tag ? Object.values(tag.field) : [],
                outline: Outline ? Object.values(Outline.materi) : [],
                thumbnail: thumbnailUrl,
                linkVideo: videoLinks,
            };
        });
    } catch (error) {
        console.error("Error fetching courses:", error instanceof Error ? error.message : error);
        throw error;
    }
};

// Utility function to handle linkVideo extraction
const extractVideoLinks = (linkVideo: Record<string, any> | null): Record<string, any> | null => {
    if (!linkVideo) return null;

    return Object.keys(linkVideo).reduce((acc: Record<string, any>, key: string) => {
        acc[key] = linkVideo[key];
        return acc;
    }, {});
};
