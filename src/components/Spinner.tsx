import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export interface SpinnerProps extends SvgIconProps {
    size?: number
    thickness?: number
}

const Spinner: FC<SpinnerProps> = ({ size, thickness, ...props }) => {
    return (
        <SvgIcon
            viewBox="0 0 38 38"
            {...props}
            style={{ width: size, height: size, ...props.style }}
        >
            <defs>
                <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                    <stop stopColor="currentColor" stopOpacity="0" offset="0%" />
                    <stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
                    <stop stopColor="currentColor" offset="100%" />
                </linearGradient>
            </defs>
            <g fill="none">
                <g transform="translate(1 1)">
                    <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" strokeWidth={thickness}>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="0.5s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </SvgIcon>
    )
}

export default Spinner
