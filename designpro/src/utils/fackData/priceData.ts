type DataType = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Growth",
        description: "Essential tools to boost occupancy and visibility.",
        price: "Contact Us",
        features: [
            {
                id: 1,
                feature: "Revenue Management Audit",
                available: true
            },
            {
                id: 2,
                feature: "Basic Digital Marketing",
                available: true
            },
            {
                id: 3,
                feature: "Social Media Setup",
                available: true
            },
            {
                id: 4,
                feature: "Monthly Reports",
                available: true
            },
            {
                id: 5,
                feature: "AI Chatbot Integration",
                available: false
            },
            {
                id: 6,
                feature: "24/7 Dedicated Support",
                available: false
            },
        ]
    },
    {
        id: 2,
        title: "Scale",
        description: "Comprehensive solutions for market dominance.",
        price: "Custom",
        features: [
            {
                id: 1,
                feature: "Advanced Revenue Strategies",
                available: true
            },
            {
                id: 2,
                feature: "Full-Stack Digital Marketing",
                available: true
            },
            {
                id: 3,
                feature: "Social Media Management",
                available: true
            },
            {
                id: 4,
                feature: "Weekly Performance Calls",
                available: true
            },
            {
                id: 5,
                feature: "AI Chatbot & Automation",
                available: true
            },
            {
                id: 6,
                feature: "24/7 Dedicated Support",
                available: true
            },
        ]

    },
]