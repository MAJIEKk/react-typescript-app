export interface PostInterface {
    id: number;
    body: string;
    reactions: number;
    tags: string[];
    title: string;
  }

  export interface PaginationInterface {
   limit: number;
   skip: number;
   total: number;
 }

