import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const GearIcon = (props: SvgProps) => {
    return (
        <Svg
            width={20}
            height={18}
            fill="none"
            {...props}
        >
            <Path
                d="M17 2a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3v2a2 2 0 104 0V2h1v2a2 2 0 104 0V2h1v2a2 2 0 104 0V2zM3 8v2h2V8H3zm0 4v2h2v-2H3zm12 0v2h2v-2h-2zm0-4v2h2V8h-2zM7 8v2h2V8H7zm4 0v2h2V8h-2zm0 4v2h2v-2h-2zm-4 0v2h2v-2H7zM5 0a1 1 0 011 1v3a1 1 0 01-2 0V1a1 1 0 011-1zm10 0a1 1 0 011 1v3a1 1 0 01-2 0V1a1 1 0 011-1zm-5 0a1 1 0 011 1v3a1 1 0 01-2 0V1a1 1 0 011-1z"
                fill="#333"
            />
        </Svg>
    )
}

export default GearIcon
