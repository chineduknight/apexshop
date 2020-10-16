declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";

declare interface Action {
  type: string;
  payload: Record<string, any>;
}

interface ReducerStateType {
  processing: boolean;
  processed: boolean;
  success: boolean;
  errors: Record<string, any>;
  message?: string;
}

interface PaginationType {
  currentPage: string;
  nextPage: string;
  totalEntries: number;
  errors?: Record<string, any>;
}

interface ManyObjectState<T = Record<string, any>> extends ReducerStateType {
  data: T[];
  pagination: PaginationType;
}

interface SingleObjectState extends ReducerStateType {
  data: Record<string, any>;
}

interface Payload {
  data?: Record<string, any> | Record<string, any>[];
  errors?: Record<string, any>[];
  meta?: {
    pagination: Pagination;
  };
}

type InputSearchArgs = { onChange: (e) => void; value: string };
