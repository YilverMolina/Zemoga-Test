export class Vote {
    id: number;
    name: string;
    date: string;
    category: string;
    description: string;
    message: string;
    imageUrl: string;
    up?: number;
    down?: number;
    resultVisibility?: string;
    percUp?: number;
    percDown?: number;
    upIsSelected?: boolean;
    downIsSelected?: boolean;
    upVisible?: boolean;
    downVisible?: boolean;
    nowVisible?: boolean;
    againVisible?: boolean;
}