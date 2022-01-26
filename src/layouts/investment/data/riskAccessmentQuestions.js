const riskAccessmentQuestions = [
    {
        question: "1. How much do you know about investing?",
        options: [
            { value: 0, label: "Just learning the ropes" },
            { value: 6, label: "Somewhat knowledgeable" },
            { value: 12, label: "An expert" },
        ]
    },
    {
        question: "2. When you are planning for your retirement and want to invest some money, what is your main goal?",
        options: [
            { value: 0, label: "Not losing money" },
            { value: 8, label: "Keeping your money and making more money" },
            { value: 17, label: "Making as much money as possible" },
        ]
    },
    {
        question: "3. How likely are you to put money in investments that earn stable, but lower returns?",
        options: [
            { value: 0, label: "Very likely" },
            { value: 5, label: "Likely" },
            { value: 9, label: "Unlikely" },
            { value: 14, label: "Very unlikely" },
        ]
    },
    {
        question: "4. How comfortable are you with the value of your investments rising and falling over time?",
        options: [
            { value: 0, label: "Not comfortable" },
            { value: 6, label: "Neutral" },
            { value: 12, label: "Comfortable" },
        ]
    }, {
        question: "5. One of your investments is suddenly underperforming and you are showing a loss — what would you do?",
        options: [
            { value: 0, label: "Not comfortable" },
            { value: 6, label: "Neutral" },
            { value: 12, label: "Comfortable" },
        ]
    }, {
        question: "6. You were given RM20,000 to invest in one of the four scenarios shown below. How would you invest your money?",
        options: [
            { value: 0, label: "Possible Gain in 3 Years: RM1000(5%), Possible Loss in 3 Years: -RM900(-4.5%)" },
            { value: 5, label: "Possible Gain in 3 Years: RM1200(6%), Possible Loss in 3 Years: -RM1600(-8%)" },
            { value: 9, label: "Possible Gain in 3 Years: RM1400(7%), Possible Loss in 3 Years: -RM2200(-11%)" },
            { value: 14, label: "Possible Gain in 3 Years: RM1600(8%), Possible Loss in 3 Years: RM3200(-16%)" },
        ]
    }
    , {
        question: "7. You put RM5,000 in one of your investments and plan to keep it for 10 years. During the first year, the overall stock market loses value — including the money you invested. Are you more likely to:",
        options: [
            { value: 0, label: "Sell all of your investment" },
            { value: 6, label: "Sell some of your investment" },
            { value: 12, label: "Leave your investment alone" },
            { value: 17, label: "Buy more of your investment" },
        ]
    }
    , {
        question: "8. When do you plan to begin taking money out of your account?",
        options: [
            { value: 0, label: "16 years or more" },
            { value: 1, label: "11-15 years" },
            { value: 2, label: "6-10 years" },
            { value: 3, label: "5 years or less" },
        ]
    }
];

export default riskAccessmentQuestions;