import { type TabsProps } from '../types';
declare let __VLS_typeProps: TabsProps;
type __VLS_PublicProps = {
    'modelValue': string | number;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    tab?(_: {
        tab: Record<string, import("../types").Tab>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
