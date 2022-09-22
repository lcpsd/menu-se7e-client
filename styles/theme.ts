import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            svg: {
                strokeWidth: '0.9'
            },
            body: {
                color: "gray.600",
                fontWeight: 'light',
                background: "black"
            }
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'sans-serif'
    },
    colors: {
        gray: {
            '50': '#EEEEF2',
            '100': '#D1D2DC',
            '200': '#B3B5C6',
            '300': '#9699B0',
            '400': '#797D9A',
            '500': '#616480',
            '600': '#4B4D63',
            '700': '#353646',
            '800': '#1F2029',
            '900': '#181B23'
        },
        purple: {
            '400': '#7F08FF',
            '500': '#5400ad',
            '600': '#2E035C',
            '800': '#160D24',
            '900': '#07040C'
        }
    }
})