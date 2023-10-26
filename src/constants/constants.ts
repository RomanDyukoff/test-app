import { TextsType } from "../components/Banner.tsx/Banner.type";

export const TEXTS_BANNER: TextsType = {
    title: 'исполните мечту вашего малыша! подарите ему собаку!',
    label: 'Сканируйте QR-код или нажмите ОК',
    button: 'ok'
};

export const TEXTS_PANEL = {
    title: 'Введите ваш номер мобильного телефона',
    text: 'и с Вами свяжется наш менеждер для дальнейшей консультации',
    label: 'Согласие на обработку персональных данных',
    button: 'Подтвердить номер',
}

export const KEYBOARD_NUM: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Стереть', '0'];

export enum ROUTES {
    HOMEPAGE = "/",
    PROMOPAGE = "/promo",
}