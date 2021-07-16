const chapterQuizzes = {
  chptOne: [
    // One
    {
      question: "Cynthia paid a $700 annual premium for a business overhead expense policy that paid a monthly benefit of up to $4,000 for a benefit period of 6 months. When Evelyn became disabled she used the entire benefit for 3 months, which covered $8,000 of employee salaries, as well as $3,000 in rent and utilities. This means that the amount of the benefits which was reported as income equaled: ",
      correct_answer: "$12,000",
      incorrect_answers: [
        "$3,000",
        "$0",
        "$8,000"
      ]
    },
    // Two
    {
      question: "Cynthia paid a $700 annual premium for a business overhead expense policy that paid a monthly benefit of up to $4,000 for a benefit period of 6 months. When Evelyn became disabled she used the entire benefit for 3 months, which covered $8,000 of employee salaries, as well as $3,000 in rent and utilities. This means that the amount of the benefits which was reported as income equaled: ",
      correct_answer: "$2,500 Monthly",
      incorrect_answers: [
        "$4,000 Monthly",
        "$1,000 Monthly",
        "$2,000 Monthly"
      ]
    },
    // Three
    {
      question: "The Smith family has a $1,000 annual family deductible with a coinsurance provision of 80/20. The family's claims for the year are $200, $300, $400, $500, $300, and $300, totaling $2,000. The insurer is responsible for paying: ",
      correct_answer: "$800",
      incorrect_answers: [
        "$2,200",
        "$1,200",
        "$1,600"
      ]
    },
    // Four
    {
      question: "Regarding Social Security Disability Insurance, the Primary Insurance Amount (PIA) is: ",
      correct_answer: "Based on the employee’s average indexed monthly earnings on which Social Security taxes have been paid",
      incorrect_answers: [
        "Based on the employees average annual income in the three highest of the last 5 years",
        "Based on 50% of the employees income in her/his last full year of employment",
        "Based on the employee's income at the time of loss"
      ]
    },
    // Five
    {
      question: "When a disability buyout is funded by the partners, the premiums are: ",
      correct_answer: "Not deductible and the value of the benefit is not taxable as income",
      incorrect_answers: [
        "Tax deductible and the value of the benefit is taxable as income",
        "Tax deductible and the value of the benefit is not taxable",
        "Not tax deductible and the value of the benefit is taxable as income"
      ]
    },
    // Six
    {
      question: "When is subrogation used?",
      correct_answer: "When a 3rd party is at fault",
      incorrect_answers: [
        "When workers compensation pays first",
        "When MAC provides the outline of coverage",
        "At the policy delivery"
      ]
    },
    // Seven
    {
      question: "After having Medigap for years, Ben was recently treated for a heart disease 4 months ago and then tried to get a new policy. They can deny him because…",
      correct_answer: "They can’t",
      incorrect_answers: [
        "Pre-existing",
        "Not allowed to switch Medigap coverage",
        "Heart disease isn’t covered"
      ]
    },
    // Eight
    {
      question: "Billy could have enrolled in Medicare Part D but his employer plan was better, he is allowed to do this because of the _____ option.",
      correct_answer: "Retiree Employer",
      incorrect_answers: [
        "Medicare Advantage",
        "Part A Deductible",
        "Voluntary"
      ]
    },
    // Nine
    {
      question: "All of the Following are provisions to Medicare Part B Except…",
      correct_answer: "Normal chiropractic services",
      incorrect_answers: [
        "Medically necessary cosmetic surgery",
        "Ambulance transportation",
        "Outpatient"
      ]
    },
    // Ten
    {
      question: "Which of the following constitutes legal delivery, assuming 1st premium is paid and application is approved as written by underwriting?",
      correct_answer: "Producer delivers it to the policy owner",
      incorrect_answers: [
        "Offer – Submit application & pay 1st premium",
        "Acceptance – Insurer decides it will take the risk and issues policy",
        "Policy mailed to producer"
      ]
    },
    // Eleven
    {
      question: " In which ONE of the following situations would an insurance company most likely use an impairment rider?",
      correct_answer: "George is looking to obtain a health insurance policy, but is concerned about a current heart condition",
      incorrect_answers: [
        "Sarah is looking to buy a disability income policy, but is unemployed",
        "Frank has cancer and is looking to buy a cancer only policy to help with the cost of treatment",
        "Trent, age 70, wants to buy an individual disability income policy but is retired and receiving home health care"
      ]
    },
    // Twelve
    {
      question: "Regarding a Health Insurance Application, what is the First thing FCRA requires insurers to do? The Insurer must…",
      correct_answer: "Pre-notify applicant that credit report may be requested",
      incorrect_answers: [
        "Give reasons for adverse action & explain how to request credit report",
        "If adverse action taken, insurer must notify the applicant",
        "Preauthorize: Get the applicants written consent to request report"
      ]
    },
    // Thirteen
    {
      question: "Basic health care expense plans are frequently referred to as “first dollar” plans. This means…",
      correct_answer: "Coverage is provided, often at 100% of the expense, from the first day of the plan year, up to a stated maximum benefit and without a deductible",
      incorrect_answers: [
        "The insurance company pays the first dollar of every claim, the insured pays the rest",
        "Beneficiaries receive the first dollar of refund when an insured dies and passes the claim to the insurance company",
        "The insured pays the first dollar of every claim, and the insurer pays 80% after that"
      ]
    },
    // Fourteen
    {
      question: "What two deductibles does a comprehensive Major Medical policy have?",
      correct_answer: "A and C",
      incorrect_answers: [
        "An initial Flat Deductible paid before the Basic plan pays benefits",
        "Major Medical benefits are paid only after an additional deductible",
        "A and B",
        "A family deductible which must be met before the corridor deductible"
      ]
    },
    // Fifteen
    {
      question: "A person may not fund an HSA unless they also do which of these?",
      correct_answer: "Purchase a High Deductible Health Plan",
      incorrect_answers: [
        "Assign a person up to $2,500 of pre-tax income be withheld to pay medical costs",
        "Purchase basic health insurance through an Exchange",
        "Fully fund their 401k, 403b, or Roth IRA"
      ]
    },
    // Three
    {
      question: "Federal Tax Considerations for Personal Medical Expense Insurance for someone under the age of 65 are…",
      correct_answer: "Premiums, unreimbursed medical/dental expenses exceeding 10% of AGI may be tax deductible; but, Medical expense benefits received are not taxable",
      incorrect_answers: [
        "Premiums, unreimbursed medical/dental expenses exceeding 10% of AGI are not tax deductible; and, Medical expense benefits received are taxable",
        "Neither of the above"
      ]
    },
    // Seventeen
    {
      question: "Orthodontic care, if provided, may require a probationary period of reduced benefits. The plan may cover orthodontics…",
      correct_answer: "All of the above",
      incorrect_answers: [
        "80% after 3 or more years",
        "50% after 2 years ",
        "At 30% after the policy has been in force for 1 year"
      ]
    },
    // Eighteen
    {
      question: "Noncontributory speaking, are the benefits taxable to the employee?",
      correct_answer: "Yes, 100% of the benefit received is taxable to the employee",
      incorrect_answers: [
        "No, Benefits are never taxed"
      ]
    },
    // Nineteen
    {
      question: "Let's say the employee pays 61% of the premium… How much of the benefit is taxable?",
      correct_answer: "39%",
      incorrect_answers: [
        "61%",
        "0%",
        "100%"
      ]
    },
    // Twenty
    {
      question: "Choose the tax treatment that applies to individual disability income premiums and benefits: ",
      correct_answer: "Premiums are not tax deductible/Benefits are not taxable as income",
      incorrect_answers: [
        "Premiums are tax deductible/ Benefits are taxable as income"
      ]
    },
    // Twenty-one 
    {
      question: "Sharon, age 64 is getting ready to file her taxes. Which of the following statements regarding the deductibility of her various, personally-owned health insurance policies is true?",
      correct_answer: "If her deductible long-term care insurance premiums, her medical expense premiums, and her after-tax, out-of-pocket expenses total at least 10% of her income, the excess amount is tax deductible",
      incorrect_answers: [
        "If her medical expense premiums and out-of-pocket expenses total at least 7.5% of her income, the excess amount is tax deductible",
        "If her disability income premiums and long-term care insurance costs total at least 10% of her income, the excess amount is tax deductible",
        "If her medical expense premiums and out-of-pocket expenses total at least 10% of her income, they are all tax deductible"
      ]
    },
    // Twenty-two
    {
      question: "Victoria, age 62, calculated last year's gross income to be $60,000. When she totaled up the cost of individual Medical and Long-term Care insurance, as well as her various out-of-pocket medical costs, she discovered the total was $7,500, which meant she could deduct _______ from her taxable income.",
      correct_answer: "$1,500",
      incorrect_answers: [
        "$7,500",
        "$6,000",
        "$3,000"
      ]
    },
    // Twenty-three
    {
      question: "Harry was hospitalized and in a coma for 6 months. When does proof of loss for this claim have to be submitted?",
      correct_answer: "Within 2 years, covered under the contestable period",
      incorrect_answers: [
        "Anytime, since he was in a coma and obviously could not submit a claim",
        "Within 1 year, unless he suffers legal incapacity",
        "An executor would be appointed by the courts to handle the necessary paperwork"
      ]
    },
    // Twenty-four
    {
      question: "A disability policy may contain a cash value benefit if it provides for a return of what percent of all premiums paid, less the claims incurred, by the time the insured attains age 65?",
      correct_answer: "100%",
      incorrect_answers: [
        "50%",
        "51%",
        "75%"
      ]
    },
    // Twenty-five
    {
      question: "Under the Legal Actions Mandatory Uniform Provision, an insured must wait at least _____ days after providing proof of loss before he or she can take legal action against the insurer.",
      correct_answer: "60 Days",
      incorrect_answers: [
        "90 Days",
        "180 Days",
        "45 Days"
      ]
    }
  ],
  chptTwo: [
    // One
    {
      question: "lorem ipsum",
      correct_answer: "answer",
      incorrect_answers: [
        "wrongA",
        "wrongB",
        "wrongC"
      ]
    },
  ]
};
