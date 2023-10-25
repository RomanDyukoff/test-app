export type TextsType = {
  title: string;
  label: string;
  button: string;
};

export interface BannerPropType {
  position?: "absolute" | "fixed" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}