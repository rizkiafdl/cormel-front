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
// Define the type for member data
export interface MemberType {
    img: string;
    name: string;
    title: string;
}

export const selectedMemberAtom = atom<MemberType | null>(null);

// Atoms for modal state and selected course
export const openAtom = atom(false);
export const selectedCourseAtom = atom<CourseData | null>(null);
