export interface InputTextModel {
    type?: string;
    value?: any;
    onChange?: (arg: any) => void;
    placeholder?: string;
    styleType?: string;
}

export interface ButtonModel {
    type?: string;
    text?: any;
    onClick?: (arg: any) => void;
    styleType?: string;
}

export interface ServicesModel {
    text?: any;
    image?: any;
    id?: any;
    data?: any;
    onClick?: (arg: any) => void;
}

export interface ServicesStyleModel {
    active?: boolean;
    id?: any;
}

export interface ImportExportWidgetModel {
    text?: any;
    id?: any;
    data?: any;
    onClick?: (arg: any) => void;
    active?: boolean;
}
export interface CargoWidgetModel {
    text?: any;
    id?: any;
    data?: any;
    onClick?: (arg: any) => void;
    active?: boolean;
}

export interface AdditionalServicesModel {
    name?: any;
    summary?: any;
    id?: any;
}