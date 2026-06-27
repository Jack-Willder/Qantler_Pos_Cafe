import type React from "react";

interface cafepropstype {
    icon?: string;
    color?: string;
    size?: number;
}
type pathstype = {
    [key: string]: React.JSX.Element;
}


const paths: pathstype = {
    cafe: <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" />,
    downarrow: <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />,
    mcube: <><path d="M12 2 4 6v12l8 4 8-4V6L12 2z" /><path d="M12 2v20" /><path d="M4 6l8 4 8-4" /></>,
    mchecklist: <></>,
}


export function IconPosCafe({color = "white", icon = "cafe", size = 16}: cafepropstype) {
    type lookuptype = {
        [key: string]: string;
    };
    const colorLookup: lookuptype = {
        white: "white",
        black: "black"
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 -960 960 960" width={`${size}px`} fill={colorLookup[color]}>
            {paths[icon]}
        </svg>);
}


export function BadgePosCafe({ color = "grey", icon = "cafe" }: cafepropstype) {
    type lookuptype = {
        [key: string]: {[key: string]: string};
    };
    const colorLookup: lookuptype = {
        purple: { light: "bg-ipurple-light", dark: "#2b21f3"},
        green: { light: "bg-igreen-light", dark: "#3da081"},
        orange: { light: "bg-iorange-light", dark: "#fc9912"},
        blue: { light: "bg-iblue-light", dark: "#bdc2c9"},
        red: { light: "bg-ired-light", dark: "#ca2d03"},
        brown: { light: "bg-ibrown-light", dark: "#6c4625"},
        grey: { light: "bg-igrey-light", dark: "#c3c3c2"},
        ash: { light: "bg-iash-light", dark: "#b5b7b9"}
    };

    const badgeprops = {
        color: colorLookup[color].dark,
        bg: colorLookup[color].light,
        size: "16px"
    };


    return (
        <div className={badgeprops.bg + " p-1.5 rounded-sm"}>
            <svg xmlns="http://www.w3.org/2000/svg" height={badgeprops.size} viewBox="0 -960 960 960" width={badgeprops.size} fill={badgeprops.color}>
                {
                    paths[icon]
                }
            </svg>
        </div>
    );
}