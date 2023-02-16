import { IconType } from "react-icons/lib";

export interface ICard {
  icon: IconType | string;
  title: string;
  value: string;
  color: string;
}
