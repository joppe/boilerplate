export const TYPE_LIBRARY: string = 'Library';
export const TYPE_PROJECT: string = 'Project';

export type Config = {
    name: string;
    type: 'Library' | 'Project';
    git: boolean;
};
