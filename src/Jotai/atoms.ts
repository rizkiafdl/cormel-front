import { atom } from 'jotai';

export interface CourseData {
    id: number;
    courseTitle: string;
    lecturer: string;
    tag: string[];
    outline: string[];
    thumbnail?: Thumbnail | null;
    linkVideo: string[];
}
export interface ThumbnailFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Thumbnail {
    id: number;
    name: string;
    formats: {
        thumbnail: ThumbnailFormat;
        large?: ThumbnailFormat;
        medium?: ThumbnailFormat;
        small?: ThumbnailFormat;
    };
    url: string;
}

export interface MemberType {
    img: string;
    name: string;
    title: string;
}

// Atom for storing an array of courses
export const coursesAtom = atom<CourseData[]>([]);

export const selectedMemberAtom = atom<MemberType | null>(null);
export const openAtom = atom(false);
export const selectedCourseAtom = atom<CourseData | null>(null);
