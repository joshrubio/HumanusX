type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Analyze",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-search-eye-line",
        description: "We conduct a deep dive into your hotel's performance, identifying gaps and opportunities for growth.",
    },
    {
        id: 2,
        title: "Implement",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-settings-4-line",
        description: "We deploy tailored strategies and AI tools to automate operations and enhance guest experiences.",
    },
    {
        id: 3,
        title: "Optimize",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-bar-chart-groupped-line",
        description: "Continuous monitoring and refinement ensure sustained revenue growth and operational efficiency.",
    },
]