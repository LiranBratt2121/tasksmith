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