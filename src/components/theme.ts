type Theme = {
    colors: {
        main: {
            background: string,
            one: string,
            two: string,
            three: string,
            four: string,
            five: string,
            six: string,
            seven: string,
            eight: string,
            nine: string,
            ten: string,
        },
        button: {
            primary: string
        },
        action: {
            error: "#C6282B"
        }
    }
    numbers: {
        mobileWidthStart: number
    }
}

export const darkTheme : Theme = {
    colors: {
        main: {
            background: "#102A43",
            one: "#F0F4F8",
            two: "#D9E2EC",
            three: "#BCCCDC",
            four: "#9FB3C8",
            five: "#829AB1",
            six: "#627D98",
            seven: "#486581",
            eight: "#334E68",
            nine: "#243B53",
            ten: "#102A43",
        },
        button: {
            primary: '#04D9C4'
        },
        action: {
            error: "#C6282B"
        }
    },
    numbers: {
        mobileWidthStart: 767
    }
}

export const ThemeVars = darkTheme;