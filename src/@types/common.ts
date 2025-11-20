import type { CSSProperties, HtmlHTMLAttributes, JSX, ReactNode } from "react";

export type CustomButtonProps = {
  asLink?: boolean;
  icon?: ReactNode;
  path?: string;
  label: string;
  className?: string;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export type CommonButtonProps = {
  label: string;
  onClick?: (val: unknown) => void;
  style?: CSSProperties;
  icon?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  customStyle?: CSSProperties;
  asLink?: string;
  labelSm?: string;
};

export interface PaginationMeta {
  current_page?: number;
  from?: number;
  last_page?: number;
  per_page?: number;
  to?: number;
  total?: number;
}

export type PaginatedResponse<T> = {
  data: T[];
  meta?: PaginationMeta;
};

export type ModalMode = "add" | "edit" | "delete" | "other" | "view";
export type ModalProps<T> = {
  open: boolean;
  type: ModalMode;
  data: null | T;
}