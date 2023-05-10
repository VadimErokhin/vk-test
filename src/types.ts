export interface SelectOption<T> {
  value: T;
  label: string;
}

export type Tower = "A" | "B";

export type DropdownValue = string | number | Tower;
