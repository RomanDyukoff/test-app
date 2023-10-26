export interface CheckboxPropType {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isCheck: boolean;
    text: string;
}