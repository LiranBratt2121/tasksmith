export type BaseTaskData = {
    id: string;
    name: string;
    type: string;

    location: {
        x: number;
        y: number;
    }

    color?: string;
}

export type EdibleFieldConfig = {
    type: 'text' | 'radio';
    label: string;
    value: string | number | boolean | Record<string, any>;
    options?: string[];
};