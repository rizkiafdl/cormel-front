// atoms.ts
import { atom } from 'jotai';

// Define the type for course data, excluding the handleOpen method
export interface CourseData {
    name: string;
    desc: string;
    imgs: string[];
    cardNum: string;
    profileImg: string;
}

// Atoms for modal state and selected course
export const openAtom = atom(false);
export const selectedCourseAtom = atom<CourseData | null>(null);
