import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 's' | 'm' | 'h'
}