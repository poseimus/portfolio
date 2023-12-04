import dynamic from "next/dynamic";
import { LegacyRef } from "react";
import  { OwlCarouselProps } from "react-owl-carousel";
if (typeof window !== "undefined") {
    //@ts-ignore
    window.$ = window.jQuery = require("jquery");
}

const Owl = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

interface IMyOwl<T> extends OwlCarouselProps {
    ref?: LegacyRef<T> | undefined;
}
const MyOwl = (props: IMyOwl<any>) => {
    return <>
        <Owl {...props} >
            {props.children}
        </Owl>
    </>
}

export default MyOwl