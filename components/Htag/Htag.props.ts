import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    tag: string;
    children: React.ReactNode;
}