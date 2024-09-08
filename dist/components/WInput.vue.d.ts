import type { InputProps } from '@/types';
declare let __VLS_typeProps: InputProps;
type __VLS_PublicProps = {
    modelValue: string | number;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    input: (...args: any[]) => void;
    prefix: (...args: any[]) => void;
    suffix: (...args: any[]) => void;
    "toggle-password": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClear?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onPrefix?: ((...args: any[]) => any) | undefined;
    onSuffix?: ((...args: any[]) => any) | undefined;
    "onToggle-password"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    help?(_: {}): any;
    error?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
