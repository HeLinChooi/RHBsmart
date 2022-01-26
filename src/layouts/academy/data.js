// prettier-ignore
const academyResource =
    [
        {
            id: 'aaklfnak',
            category: 'stock',
            image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Investing 101",
            title: "A Guide to Investing vs. Trading",
            description: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
            content: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
            action: {
                type: "internal",
                route: "/academy/detail?id=aaklfnak",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'afetvasf',
            category: 'stock',
            image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            label: "Investing 101",
            title: "What Is an ETF? Learn How to Trade and Invest in ETFs",
            description: "Exchange-traded funds (ETFs) have become extremely popular with traders and investors in recent years for good reason...",
            content: "Exchange-traded funds (ETFs) have become extremely popular with traders and investors in recent years for good reason...",
            action: {
                type: "internal",
                route: "/academy/detail?id=afetvasf",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'rrggvvr',
            category: 'stock',
            image: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Investing 101",
            title: "Structured Product Investments",
            description: "Structured Investment (or Structured Product) is a hybrid financial instrument whose performance is linked to the your choice of underlying asset...",
            content: "Structured Investment (or Structured Product) is a hybrid financial instrument whose performance is linked to the your choice of underlying asset...",
            action: {
                type: "internal",
                route: "/academy/detail?id=rrggvvr",
                color: "info",
                label: "view article",
            }
        },

        {
            id: 'gdfdfd',
            category: 'loan',
            image: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            label: "Loan 101",
            title: "Financial Management & Resilience Programme (URUS)",
            description: "URUS is a holistic assistance package to assist vulnerable borrowers/customers with prolonged cash flow difficulties due to COVID-19...",
            content: "URUS is a holistic assistance package to assist vulnerable borrowers/customers with prolonged cash flow difficulties due to COVID-19...",
            action: {
                type: "internal",
                route: "/academy/detail?id=gdfdfd",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'vadead',
            category: 'loan',
            image: "https://bit.ly/3FlXb4f",
            label: "Loan 101",
            title: "RHB Housing Loan",
            description: "Our RHB Housing Loan, with flexible options, is the key to quickly own your dream house. Get the home of your dreams and enjoy these benefits",
            content: "Our RHB Housing Loan, with flexible options, is the key to quickly own your dream house. Get the home of your dreams and enjoy these benefits",
            action: {
                type: "internal",
                route: "/academy/detail?id=vadead",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'vajiun',
            category: 'loan',
            image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            label: "Loan 101",
            title: "9 Best Personal Loan Tips",
            description: "Are you contemplating taking a personal loan to fund a large payment? A personal loan can definitely help you...",
            content: "Are you contemplating taking a personal loan to fund a large payment? A personal loan can definitely help you...",
            action: {
                type: "internal",
                route: "/academy/detail?id=vajiun",
                color: "info",
                label: "view article",
            }
        },

        {
            id: 'cchjbh',
            category: 'credit_card',
            image: "https://images.pexels.com/photos/5835274/pexels-photo-5835274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Credit Cards 101",
            title: "Credit Card Tips and Advice",
            description: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
            content: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
            action: {
                type: "internal",
                route: "/academy/detail?id=cchjbh",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'asdava',
            category: 'credit_card',
            image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            label: "Credit Cards 101",
            title: "Find & Apply for a Credit Card Online",
            description: "You know you have a great cashback credit card when you get rewarded for purchasing food and groceries online...",
            content: "You know you have a great cashback credit card when you get rewarded for purchasing food and groceries online...",
            action: {
                type: "internal",
                route: "/academy/detail?id=asdava",
                color: "info",
                label: "view article",
            }
        },
        {
            id: 'wwsava',
            category: 'credit_card',
            image: "https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            label: "Credit Cards 101",
            title: "Credit Card Limits: How To Manage",
            description: "Credit card limits are unique, but how to manage them isn’t...",
            content: "Credit card limits are unique, but how to manage them isn’t...",
            action: {
                type: "internal",
                route: "/academy/detail?id=wwsava",
                color: "info",
                label: "view article",
            }
        }
    ]

export default academyResource;
// // prettier-ignore
// const academyResource = {
//     invest: {
//         title: "Investing 101",
//         resource: [
//             {
//                 id: 'aaklfnak',
//                 image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 label: "Investing 101",
//                 title: "A Guide to Investing vs. Trading",
//                 description: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=aaklfnak",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'afetvasf',
//                 image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 label: "Investing 101",
//                 title: "What Is an ETF? Learn How to Trade and Invest in ETFs",
//                 description: "Exchange-traded funds (ETFs) have become extremely popular with traders and investors in recent years for good reason...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=afetvasf",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'rrggvvr',
//                 image: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 label: "Investing 101",
//                 title: "Structured Product Investments",
//                 description: "Structured Investment (or Structured Product) is a hybrid financial instrument whose performance is linked to the your choice of underlying asset...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=rrggvvr",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//         ]
//     },
//     loan: {
//         title: "Loan 101",
//         resource: [
//             {
//                 id: 'gdfdfd',
//                 image: "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 label: "Loan 101",
//                 title: "Financial Management & Resilience Programme (URUS)",
//                 description: "URUS is a holistic assistance package to assist vulnerable borrowers/customers with prolonged cash flow difficulties due to COVID-19...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=gdfdfd",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'vadead',
//                 image: "https://bit.ly/3FlXb4f",
//                 label: "Loan 101",
//                 title: "RHB Housing Loan",
//                 description: "Our RHB Housing Loan, with flexible options, is the key to quickly own your dream house. Get the home of your dreams and enjoy these benefits",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=vadead",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'vajiun',
//                 image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 label: "Loan 101",
//                 title: "9 Best Personal Loan Tips",
//                 description: "Are you contemplating taking a personal loan to fund a large payment? A personal loan can definitely help you...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=vajiun",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//         ]
//     },
//     credit_card: {
//         title: "Credit Cards 101",
//         resource: [
//             {
//                 id: 'cchjbh',
//                 image: "https://images.pexels.com/photos/5835274/pexels-photo-5835274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 label: "Credit Cards 101",
//                 title: "Credit Card Tips and Advice",
//                 description: "The terms ‘investing’ and ‘trading’ are often used interchangeably...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=cchjbh",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'asdava',
//                 image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 label: "Credit Cards 101",
//                 title: "Find & Apply for a Credit Card Online",
//                 description: "You know you have a great cashback credit card when you get rewarded for purchasing food and groceries online...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=asdava",
//                     color: "info",
//                     label: "view article",
//                 }
//             },
//             {
//                 id: 'wwsava',
//                 image: "https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 label: "Credit Cards 101",
//                 title: "Credit Card Limits: How To Manage",
//                 description: "Credit card limits are unique, but how to manage them isn’t...",
//                 action: {
//                     type: "internal",
//                     route: "/academy/detail?id=wwsava",
//                     color: "info",
//                     label: "view article",
//                 }
//             }
//         ]
//     },
// }

// export default academyResource;