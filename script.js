const STORAGE_KEY = "economics-quiz-imports";

const builtInChapters = [
  {
    id: "scarcity-choice",
    kicker: "Chapter 1",
    title: "Scarcity and Choice",
    subtitle: "Economics and Opportunity Cost",
    questions: [
      {
        text: "Economics is the study of",
        options: [
          "how much people should buy and the prices they should be willing to pay.",
          "how much people should sell and the prices they should be willing to accept.",
          "the allocation of the world's freely available resources and who should get them.",
          "the allocation and use of scarce resources to satisfy unlimited human wants."
        ],
        answer: 3,
        explanation: "Economics studies how scarce resources are allocated to satisfy unlimited wants."
      },
      {
        text: "The one word in the definition of economics that focuses on the fact that it is impossible to provide all of the goods and services that everyone wants is",
        options: ["scarcity.", "resources.", "study.", "allocation."],
        answer: 0,
        explanation: "Scarcity means wants exceed the resources available to satisfy them."
      },
      {
        text: "The one word in the definition of economics that focuses on the fact that we have to make choices about who gets what and how much is",
        options: ["scarcity.", "resources.", "study.", "allocation."],
        answer: 3,
        explanation: "Allocation is the process of deciding how resources and goods are distributed."
      },
      {
        text: "Scarcity implies that the allocation scheme chosen by society can",
        options: [
          "not make more of any one good.",
          "typically make more of a good but at the expense of making less of another.",
          "always make more of all goods, simultaneously."
        ],
        answer: 1,
        explanation: "With scarce resources, producing more of one thing usually requires giving up something else."
      },
      {
        text: "Production possibilities frontier models",
        options: [
          "the choices we make in setting prices.",
          "the choices we make in setting output alternatives.",
          "the choices we make in setting wages.",
          "the choices we make in setting incomes."
        ],
        answer: 1,
        explanation: "A PPF shows the output combinations an economy can produce with available resources and technology."
      },
      {
        text: "A resource",
        options: [
          "must come from the earth.",
          "only includes physical things.",
          "is anything that we consume directly or use to make things we will ultimately consume.",
          "must come from the earth and is anything that we consume directly or use to make things we will ultimately consume."
        ],
        answer: 2,
        explanation: "Resources include physical inputs, labor, capital, time, and other things used to produce or consume goods."
      },
      {
        text: "The underlying reason that there are unattainable points on a production possibilities frontier diagram is that there",
        options: [
          "is government.",
          "are always choices that have to be made.",
          "is a scarcity of resources within a fixed level of technology.",
          "is unemployment of resources."
        ],
        answer: 2,
        explanation: "Points beyond the frontier require more resources or better technology than currently available."
      },
      {
        text: "The underlying reason production possibilities frontiers are likely to be bowed out (rather than linear) is",
        options: [
          "choices have consequences.",
          "there is always opportunity costs.",
          "some resources and people can be better used producing one good rather than another.",
          "there is always some level of unemployment."
        ],
        answer: 2,
        explanation: "Bowed PPFs reflect increasing opportunity cost because resources are not equally suited to every use."
      },
      {
        text: "The optimization assumption suggests that people make",
        options: [
          "irrational decisions.",
          "unpredictable decisions.",
          "decisions to make themselves as well off as possible.",
          "decisions without thinking very hard."
        ],
        answer: 2,
        explanation: "Optimization assumes people choose the option that gives them the best attainable outcome."
      },
      {
        text: "The fact that we are operating at a point inside a bowed out production possibilities frontier indicates there is",
        options: ["scarcity.", "constant opportunity cost.", "unemployment.", "increasing opportunity cost."],
        answer: 2,
        explanation: "A point inside the PPF means available resources are not being fully used."
      },
      {
        text: "If the production possibilities frontier is not bowed out, but is a line, there is",
        options: ["scarcity.", "constant opportunity cost.", "unemployment.", "increasing opportunity cost."],
        answer: 1,
        explanation: "A straight-line PPF means the opportunity cost stays the same along the frontier."
      },
      {
        text: "The fact that the production possibilities frontier is bowed out indicates there is",
        options: ["scarcity.", "constant opportunity cost.", "unemployment.", "increasing opportunity cost."],
        answer: 3,
        explanation: "A bowed-out PPF shows increasing opportunity cost."
      },
      {
        text: "In Figure 1.1, which labeled point indicates that there are sufficient resources and technology to produce the combination of goods represented by that point?",
        image: "assets/image1.jpeg",
        imageAlt: "Figure 1.1 production possibilities frontier with points A, B, C, and D.",
        caption: "Figure 1.1",
        options: ["only A", "only B and C", "only D", "A, B, and C"],
        answer: 3,
        explanation: "Points on or inside the PPF are attainable. A is inside, while B and C are on the frontier."
      },
      {
        text: "In Figure 1.3, A, B, and C, which depicts the existence of constant opportunity cost?",
        image: "assets/image2.jpeg",
        imageAlt: "Figure 1.3 showing three production possibilities frontiers labeled Figure A, Figure B, and Figure C.",
        caption: "Figure 1.3 A, B, and C",
        options: ["Figure A", "Figure B", "Figure C", "All three figures show the existence of constant opportunity cost."],
        answer: 1,
        explanation: "Constant opportunity cost is shown by a straight-line PPF, which is Figure B."
      },
      {
        text: "Using Figure 1.4, you can tell that",
        image: "assets/image3.jpeg",
        imageAlt: "Figure 1.4 bowed production possibilities frontier for soda and pizza.",
        caption: "Figure 1.4",
        options: [
          "the technology does not exist to produce 6 units of soda and 2 units of pizza.",
          "there is unemployment.",
          "there is constant opportunity cost.",
          "the technology does not exist to produce 9 units of soda and 3 units of pizza."
        ],
        answer: 3,
        explanation: "At 3 pizzas the frontier allows 0 soda, so 9 soda and 3 pizzas is beyond the frontier."
      },
      {
        text: "Using Figure 1.4, we know the production of 6 units of soda and 2 units of pizza is",
        image: "assets/image3.jpeg",
        imageAlt: "Figure 1.4 bowed production possibilities frontier for soda and pizza.",
        caption: "Figure 1.4",
        options: [
          "possible, but there would be unemployment.",
          "possible, but only if all resources were fully employed.",
          "impossible because we have the resources but do not have the technology.",
          "impossible because we have the technology but do not have the resources."
        ],
        answer: 1,
        explanation: "The point 2 pizzas and 6 soda lies on the frontier, so it is efficient and uses all resources."
      },
      {
        text: "Referring to Figure 1.4, the opportunity cost of producing the first unit of pizza is",
        image: "assets/image3.jpeg",
        imageAlt: "Figure 1.4 bowed production possibilities frontier for soda and pizza.",
        caption: "Figure 1.4",
        options: ["one unit of soda.", "three units of soda.", "six units of soda.", "the same as the opportunity cost of producing the second unit of pizza."],
        answer: 0,
        explanation: "Moving from 0 to 1 pizza reduces soda from 10 to 9, so the cost is 1 soda."
      },
      {
        text: "Referring to Figure 1.4, the opportunity cost of producing the second unit of pizza is",
        image: "assets/image3.jpeg",
        imageAlt: "Figure 1.4 bowed production possibilities frontier for soda and pizza.",
        caption: "Figure 1.4",
        options: ["one unit of soda.", "three units of soda.", "six units of soda.", "the same as the opportunity cost of producing the first unit of pizza."],
        answer: 1,
        explanation: "Moving from 1 to 2 pizzas reduces soda from 9 to 6, so the cost is 3 soda."
      },
      {
        text: "Using Figure 1.5 above, we know the production of 3 units of soda and 2 units of pizza is",
        image: "assets/image4.jpeg",
        imageAlt: "Figure 1.5 straight production possibilities frontier for soda and pizza.",
        caption: "Figure 1.5",
        options: [
          "possible, but there would be unemployed.",
          "possible, but only if all resources were fully employed.",
          "impossible because we have the resources but do not have the technology.",
          "impossible because we have the technology but do not have the resources."
        ],
        answer: 1,
        explanation: "The point 2 pizzas and 3 soda lies on the straight-line frontier."
      },
      {
        text: "Referring to Figure 1.5, the opportunity cost of producing the second unit of pizza is",
        image: "assets/image4.jpeg",
        imageAlt: "Figure 1.5 straight production possibilities frontier for soda and pizza.",
        caption: "Figure 1.5",
        options: ["one unit of soda.", "three units of soda.", "six units of soda."],
        answer: 1,
        explanation: "On this straight PPF, each extra pizza costs 3 soda."
      },
      {
        text: "Referring to Figure 1.5, the opportunity cost of producing the third unit of pizza is",
        image: "assets/image4.jpeg",
        imageAlt: "Figure 1.5 straight production possibilities frontier for soda and pizza.",
        caption: "Figure 1.5",
        options: ["one unit of soda.", "three units of soda.", "six units of soda."],
        answer: 1,
        explanation: "The opportunity cost remains constant at 3 soda per pizza."
      },
      {
        text: "Using Figure 1.6, you can tell that",
        image: "assets/image5.jpeg",
        imageAlt: "Figure 1.6 bowed production possibilities frontier for soda and pizza.",
        caption: "Figure 1.6",
        options: [
          "the technology does not exist to produce 130 units of soda and 1 unit of pizza.",
          "there is unemployment.",
          "there is constant opportunity cost.",
          "the technology does not exist to produce 90 units of soda and 3 units of pizza."
        ],
        answer: 3,
        explanation: "At 3 pizzas the frontier allows 0 soda, so 90 soda and 3 pizzas is unattainable."
      },
      {
        text: "Referring to Figure 1.8, if a point is attainable, it is in",
        image: "assets/image6.jpeg",
        imageAlt: "Figure 1.8 with Area #1 inside the PPF and Area #2 outside the PPF.",
        caption: "Figure 1.8",
        options: ["AREA #1 but not on the curve.", "AREA #1 or is on the curve.", "AREA #2 but not on the curve.", "AREA #2 or is on the curve."],
        answer: 1,
        explanation: "Attainable points are inside the PPF or on the PPF."
      },
      {
        text: "Referring to Figure 1.8, if a point represents unemployment, it is in",
        image: "assets/image6.jpeg",
        imageAlt: "Figure 1.8 with Area #1 inside the PPF and Area #2 outside the PPF.",
        caption: "Figure 1.8",
        options: ["AREA #1 but not on the curve.", "AREA #1 or is on the curve.", "AREA #2 but not on the curve.", "AREA #2 or is on the curve."],
        answer: 0,
        explanation: "Unemployment is represented by points inside the PPF, not points on the efficient frontier."
      },
      {
        text: 'Chapter 1 entitled "Economics: The Study of Opportunity Cost" makes the point that we',
        options: [
          "can produce all we want of everything we want if we just work harder.",
          "face tradeoffs because we have limited resources.",
          "can avoid tradeoffs if we simply make the right decisions.",
          "do not face tradeoffs because we have limited resources."
        ],
        answer: 1,
        explanation: "Limited resources force tradeoffs and opportunity costs."
      },
      {
        text: "Imagine an economist ordering pizza by the slice. When deciding how many slices to order, she would pick that number where the enjoyment of the ________ equals the enjoyment she could get from using the money on another good.",
        options: ["first slice", "last slice", "average slice", "total number of slices"],
        answer: 1,
        explanation: "Economists compare marginal benefit and marginal cost, so the relevant slice is the last one."
      },
      {
        text: "When analyzing a problem, an economist will compare the ________ and choose the outcome where they are equal.",
        options: ["average benefits to the average costs", "marginal benefits to the marginal costs", "total benefits to the total costs", "fixed benefits to the fixed costs"],
        answer: 1,
        explanation: "The optimal choice occurs where marginal benefit equals marginal cost."
      },
      {
        text: "When analyzing a problem, an economist will attempt to",
        options: [
          "maximize the net benefit of an action, and this occurs where the marginal benefit equals the marginal cost.",
          "maximize the total benefit of an action.",
          "minimize the total cost of an action.",
          "maximize the net benefit of an action, and this occurs where the average benefit equals the average cost."
        ],
        answer: 0,
        explanation: "Net benefit is maximized at the point where marginal benefit equals marginal cost."
      },
      {
        text: "In Figure 1.1, which labeled points are attainable?",
        image: "assets/image1.jpeg",
        imageAlt: "Figure 1.1 production possibilities frontier with points A, B, C, and D.",
        caption: "Figure 1.1",
        options: ["only A", "only B and C", "only D", "A, B, and C"],
        answer: 3,
        explanation: "A is inside the frontier, and B and C are on it. D is outside and unattainable."
      },
      {
        text: "Economics is the study of",
        options: [
          "how much people should buy and the prices they should be willing to pay.",
          "how much people should sell and the prices they should be willing to accept.",
          "the allocation of the world's freely available resources and who should get them.",
          "the allocation and use of scarce resources to satisfy unlimited human wants."
        ],
        answer: 3,
        explanation: "This repeats the core definition: economics studies scarce resources and unlimited wants."
      },
      {
        text: 'The statement that "since a farmer will make more money if he has a bumper crop means that all farmers would make more money if they all had bumper crops" would be an example of which of the following?',
        options: [
          "the fallacy that correlation is the same as causation",
          "the fallacy of composition",
          "truth in an obvious form",
          "the fallacy that correlation is the same as causation and the fallacy of composition"
        ],
        answer: 1,
        explanation: "What is true for one farmer may not be true for all farmers at once because market price can change."
      },
      {
        text: "Every worker is better off making more money and having better benefits. If you concluded from that fact that all workers would be better off if a law were passed requiring a 25% increase in wages and benefits, then you would be",
        options: [
          "right.",
          "wrong because causation and correlation are not the same.",
          "wrong and have fallen victim to the fallacy of composition.",
          "wrong because workers operate on jealousy."
        ],
        answer: 2,
        explanation: "A conclusion about all workers does not automatically follow from a statement about each individual worker."
      },
      {
        text: "The fact that when the temperature rises, snow shovel sales fall, suggests the two are",
        options: ["directly correlated.", "inversely correlated.", "neither directly correlated nor inversely correlated.", "both directly correlated and inversely correlated."],
        answer: 1,
        explanation: "One variable rises while the other falls, so the relationship is inverse."
      },
      {
        text: "The fact that when temperature rises, snow cone sales rise, suggests the two are",
        options: ["directly correlated.", "inversely correlated.", "neither directly correlated nor inversely correlated.", "both directly correlated and inversely correlated."],
        answer: 0,
        explanation: "Both variables move in the same direction, so they are directly correlated."
      },
      {
        text: "Any mechanism by which buyers and sellers negotiate an exchange is a",
        options: ["corporation.", "market.", "negotiable instrument.", "brokerage."],
        answer: 1,
        explanation: "A market is any setting or mechanism where buyers and sellers negotiate exchange."
      },
      {
        text: "A mechanism by which buyers and sellers of labor and financial capital negotiate an exchange is a",
        options: ["stock market.", "bond market.", "factor market.", "brokerage."],
        answer: 2,
        explanation: "Factor markets are markets for inputs such as labor, capital, and land."
      },
      {
        text: "Buyers and sellers in the foreign exchange market negotiate an exchange of",
        options: ["foreign stocks.", "foreign banks.", "foreign government bonds.", "currencies of various countries."],
        answer: 3,
        explanation: "Foreign exchange markets trade currencies."
      },
      {
        text: "If the steadily increasing marginal cost of another day spent in the hospital exceeds the steadily decreasing marginal benefit of an additional day spent in the hospital, the rational consumer of health care services would be predicted to",
        options: [
          "choose not to stay in the hospital for that additional day.",
          "stay in the hospital for at least that additional day.",
          "demand a private hospital room.",
          "regret having ever entered that hospital."
        ],
        answer: 0,
        explanation: "When marginal cost exceeds marginal benefit, the additional day is not worth choosing."
      },
      {
        text: "If the steadily decreasing marginal benefit of another day spent in the hospital is smaller than the steadily increasing marginal cost of an additional day spent in the hospital, the",
        options: [
          "net benefit from the hospital stay must be negative.",
          "net benefit from the hospital stay must be decreasing.",
          "net benefit from the hospital stay must be increasing.",
          "net benefit from the hospital stay is maximized."
        ],
        answer: 1,
        explanation: "If marginal cost is greater than marginal benefit, the extra day reduces total net benefit."
      },
      {
        text: "Generalized growth is typically the result of an increase in the ability of resources to",
        options: ["produce all goods.", "produce certain goods.", "produce exported goods.", "compete with imported goods."],
        answer: 0,
        explanation: "Generalized growth expands the economy's ability to produce broadly across goods."
      },
      {
        text: "Specialized growth is typically the result of an increase in the ability of resources to",
        options: ["produce all goods.", "produce certain goods.", "produce exported goods.", "compete with imported goods."],
        answer: 1,
        explanation: "Specialized growth improves production ability for particular goods."
      },
      {
        text: "The development of a new energy source that could be used to produce or transport any good would be a source of",
        options: ["generalized growth.", "specialized growth.", "concentrated growth.", "import competing growth."],
        answer: 0,
        explanation: "A broad-use energy source can improve production across the whole economy."
      },
      {
        text: "Referring to the Production Possibilities Frontiers in Figure 1.10 A, B, C, and D, which depicts specialized growth in soda when there is increasing opportunity cost?",
        image: "assets/image7.jpeg",
        imageAlt: "Figure 1.10 with four PPF diagrams labeled Fig. A, Fig. B, Fig. C, and Fig. D.",
        caption: "Figure 1.10",
        options: ["Fig. A", "Fig. B", "Fig. C", "Fig. D"],
        answer: 0,
        explanation: "Increasing opportunity cost is bowed, and specialized growth in soda shifts the soda intercept outward."
      },
      {
        text: "Referring to the Production Possibilities Frontiers in Figure 1.10 A, B, C, and D, which depicts specialized growth in soda when there is constant opportunity cost.",
        image: "assets/image7.jpeg",
        imageAlt: "Figure 1.10 with four PPF diagrams labeled Fig. A, Fig. B, Fig. C, and Fig. D.",
        caption: "Figure 1.10",
        options: ["Fig. A", "Fig. B", "Fig. C", "Fig. D"],
        answer: 2,
        explanation: "Constant opportunity cost is linear, and Fig. C shifts the soda intercept outward."
      },
      {
        text: "Referring to the Production Possibilities Frontiers in Figure 1.11 A and B, which depicts generalized growth when there is increasing opportunity cost?",
        image: "assets/image8.jpeg",
        imageAlt: "Figure 1.11 with Fig. A bowed outward shift and Fig. B linear outward shift.",
        caption: "Figure 1.11",
        options: ["Fig. A", "Fig. B", "Either Fig. A or Fig. B", "Neither Fig. A nor Fig. B"],
        answer: 0,
        explanation: "Fig. A shows a bowed PPF shifting outward overall, which is generalized growth with increasing opportunity cost."
      }
    ]
  }
];

builtInChapters.push({
  id: "demand-supply-analysis",
  kicker: "Chapter 2",
  title: "Market Transactions",
  subtitle: "Demand and Supply Analysis",
  questions: [
    {
      text: "eBay does not qualify as a market for the good being sold because it is not a specific, physical location.",
      options: ["True", "False"],
      answer: 1,
      explanation: "A market is any mechanism where buyers and sellers negotiate exchange; it does not need to be a physical place."
    },
    {
      text: "The mechanism by which buyers and sellers negotiate an exchange is called a/an",
      options: ["equilibrium.", "model.", "market.", "meeting."],
      answer: 2,
      explanation: "A market is the mechanism through which buyers and sellers interact."
    },
    {
      text: "The quantity demanded is the amount households wish to purchase",
      options: [
        "at all possible prices during a specified period of time.",
        "at a particular price during a specified period of time.",
        "at a particular price (the timeframe is irrelevant).",
        "at all possible prices (the timeframe is irrelevant)."
      ],
      answer: 1,
      explanation: "Quantity demanded is tied to one price and a specific time period."
    },
    {
      text: "Economists argue that markets serve the interests of society primarily because",
      options: [
        "consumers are made better off (regardless of whether producers are made better off).",
        "producers are made better off (regardless of whether consumers are made better off).",
        "both consumers and producers are made better off.",
        "money is made available for government."
      ],
      answer: 2,
      explanation: "Voluntary exchange can create gains for both sides of the transaction."
    },
    {
      text: "The group of people who are willing to provide goods and services in exchange for money is called",
      options: ["profiteers.", "benefactors.", "consumers.", "producers."],
      answer: 3,
      explanation: "Producers supply goods and services to the market."
    },
    {
      text: "The price at which the amount consumers wish to purchase equals the amount firms wish to sell is called the",
      options: ["equilibrium quantity.", "equilibrium price.", "optimal quantity.", "optimal result."],
      answer: 1,
      explanation: "The equilibrium price is where quantity demanded equals quantity supplied."
    },
    {
      text: "The amount consumers are willing and able to buy at a particular price during a specified period of time is the",
      options: ["demand.", "supply.", "quantity demanded.", "quantity supplied."],
      answer: 2,
      explanation: "Quantity demanded refers to the amount buyers want at one particular price."
    },
    {
      text: "The amount that firms are willing and able to sell at a particular price during a particular period of time is the",
      options: ["demand.", "supply.", "quantity demanded.", "quantity supplied."],
      answer: 3,
      explanation: "Quantity supplied is the amount sellers offer at one particular price."
    },
    {
      text: "The underlying reason for the upward sloping nature of the supply curve is that",
      options: [
        "the production of most goods comes with increasing marginal benefits.",
        "the production of most goods comes with increasing marginal costs.",
        "the consumption of most goods comes with decreasing marginal utility.",
        "the consumption of most goods comes with increasing marginal utility."
      ],
      answer: 1,
      explanation: "As production expands, marginal cost often rises, so sellers require higher prices."
    },
    {
      text: "When an economics student draws a supply and demand diagram to model an increase in the income, she is assuming this change happens",
      options: ["semper fidelis.", "ceteris paribus.", "ipso facto.", "de facto."],
      answer: 1,
      explanation: "Ceteris paribus means holding other relevant factors constant."
    },
    {
      text: "The relationship between price and quantity demanded, ceteris paribus, is",
      options: ["demand.", "supply.", "equilibrium.", "quantity supplied."],
      answer: 0,
      explanation: "Demand describes the relationship between price and quantity demanded."
    },
    {
      text: "Unless circumstances are quite out of the ordinary, a demand curve will be",
      options: ["vertical.", "horizontal.", "downward sloping.", "upward sloping."],
      answer: 2,
      explanation: "Demand usually slopes downward because higher prices reduce quantity demanded."
    },
    {
      text: "If the price of a typical good rises, the quantity demanded for that good will",
      options: ["decrease.", "increase.", "remain the same.", "automatically decrease to zero."],
      answer: 0,
      explanation: "The law of demand says price and quantity demanded move in opposite directions."
    },
    {
        text: "From Table 2.1, which column is likely to be the one for quantity demanded?",
        table: {
          caption: "Table 2.1",
          headers: ["Price", "Column A", "Column B"],
          rows: [["$1", "5", "1"], ["$2", "4", "2"], ["$3", "3", "3"], ["$4", "2", "4"], ["$5", "1", "5"]]
        },
        options: ["column A", "neither A nor B", "column B", "either A or B are equally likely"],
        answer: 0,
        explanation: "Column A falls as price rises, which matches the law of demand."
      },
      {
        text: "From Table 2.1, and under the most likely scenario where columns A and B are assigned to represent quantity demanded and quantity supplied, which is the equilibrium price?",
        table: {
          caption: "Table 2.1",
          headers: ["Price", "Column A", "Column B"],
          rows: [["$1", "5", "1"], ["$2", "4", "2"], ["$3", "3", "3"], ["$4", "2", "4"], ["$5", "1", "5"]]
        },
        options: ["$1", "$2", "$3", "$4"],
        answer: 2,
        explanation: "At $3, quantity demanded and quantity supplied are both 3."
    },
    {
      text: "If the supply and demand curves cross at a price of $2, at any price above that, there will be",
      options: ["an equilibrium.", "a surplus.", "a shortage.", "a crisis."],
      answer: 1,
      explanation: "Above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus."
    },
    {
        text: "From Table 2.2, which column is the one for shortage?",
        table: {
          caption: "Table 2.2",
          headers: ["Price", "Quantity Demanded", "Quantity Supplied", "Column A", "Column B"],
          rows: [["$1", "5", "1", "", "4"], ["$2", "4", "2", "", "2"], ["$3", "3", "3", "0", "0"], ["$4", "2", "4", "2", ""], ["$5", "1", "5", "4", ""]]
        },
        options: ["column A", "neither A nor B", "column B", "either A or B are equally likely"],
        answer: 2,
        explanation: "A shortage occurs when quantity demanded exceeds quantity supplied; Column B lists those gaps at low prices."
    },
    {
      text: "The Law of Demand indicates that",
      options: [
        "there is a negative relationship between quantity demanded and quantity supplied.",
        "there is a negative relationship between quantity demanded and price.",
        "there is a positive relationship between quantity demanded and quantity supplied.",
        "there is a positive relationship between quantity demanded and price."
      ],
      answer: 1,
      explanation: "The law of demand says price and quantity demanded are negatively related."
    },
    {
      text: "The notion that the money in your possession will buy less when the price rises is provided as the explanation for",
      options: ["the substitution effect.", "the real-balances effect.", "diminishing marginal utility."],
      answer: 1,
      explanation: "The real-balances effect focuses on reduced purchasing power when prices rise."
    },
    {
      text: "The substitution effect suggests that",
      options: [
        "when prices are higher, your buying power is less, so you buy less.",
        "when prices are higher, you buy less of what you originally wanted and use something else instead.",
        "when prices are higher, you buy fewer because the marginal utility of a good is diminishing.",
        "when prices are higher, you buy more."
      ],
      answer: 1,
      explanation: "When a good becomes more expensive, buyers tend to switch toward substitutes."
    },
    {
      text: "The Law of Diminishing Marginal Utility suggests that",
      options: [
        "when you consume more, you are less happy.",
        "when you consume more, society is less well off.",
        "the more you consume, the less extra enjoyment you get out of each additional unit.",
        "when prices are higher, you buy more."
      ],
      answer: 2,
      explanation: "Marginal utility is the extra satisfaction from one more unit, and it generally falls as consumption increases."
    },
    {
      text: "The reason that the supply curve is upward sloping is",
      options: ["diminishing marginal costs.", "diminishing average costs.", "increasing marginal costs.", "increasing average costs."],
      answer: 2,
      explanation: "Increasing marginal cost is the standard reason supply slopes upward."
    },
    {
      text: "If you overheard a farmer discussing his planting plans for the upcoming season, and he said \"The price of corn has gone way up. I know I'll have to put some money into fertilizer on that field on the hill that's been idle all these years, but it will be worth it this year.\" This would be consistent with which justification for an upward sloping supply curve?",
      options: ["increasing marginal cost", "the need for higher prices in one good to motivate a shift in production from another", "the real-balance effect", "diminishing marginal utility"],
      answer: 0,
      explanation: "Using less productive land requires extra cost, so higher prices are needed to justify more output."
    },
    {
      text: "An increase in which of the following determinants of demand will have an ambiguous (uncertain) effect on price?",
      options: ["taste", "price of a complement", "income", "price of a substitute"],
      answer: 2,
      explanation: "Higher income raises demand for normal goods but lowers demand for inferior goods, so the price effect depends on the good."
    },
    {
      text: "The increase in the price of a good would",
      options: [
        "move its demand curve to the right.",
        "move its demand curve to the left.",
        "cause a movement along the demand curve to a (higher price, lower quantity) point.",
        "cause a movement along the demand curve to a (lower price, higher quantity) point."
      ],
      answer: 2,
      explanation: "A good's own price changes quantity demanded, so the movement is along the existing demand curve."
    },
    {
      text: "An increase in household income for a good that is considered inferior would",
      options: [
        "move its demand curve to the right.",
        "move its demand curve to the left.",
        "cause a movement along the demand curve to a (higher price, lower quantity) point.",
        "cause a movement along the demand curve to a (lower price, higher quantity) point."
      ],
      answer: 1,
      explanation: "Demand for an inferior good falls when income rises."
    },
    {
      text: "If goods A and B are considered substitutes, an increase in the price of A would cause",
      options: [
        "the demand curve for B to shift to the right.",
        "the demand curve for B to shift to the left.",
        "a movement along the demand curve for B to a (higher price, lower quantity) point.",
        "a movement along the demand curve for B to a (lower price, higher quantity) point."
      ],
      answer: 0,
      explanation: "If A becomes more expensive, buyers switch toward substitute B, increasing demand for B."
    },
    {
      text: "If there is a good that is consumed almost entirely by children, a significant reduction in the birth rate would",
      options: [
        "move its demand curve to the right.",
        "move its demand curve to the left.",
        "cause a movement along the demand curve to a (higher price, lower quantity) point.",
        "cause a movement along the demand curve to a (lower price, higher quantity) point."
      ],
      answer: 1,
      explanation: "Fewer children means fewer buyers, so demand shifts left."
    },
    {
      text: "The increase in the price of a good would",
      options: [
        "move its supply curve to the right.",
        "move its supply curve to the left.",
        "cause a movement along the supply curve to a (higher price, higher quantity) point.",
        "cause a movement along the supply curve to a (lower price, lower quantity) point."
      ],
      answer: 2,
      explanation: "A good's own price changes quantity supplied, so the movement is along the existing supply curve."
    },
    {
      text: "If technology decreases, then",
      options: [
        "the demand curve will shift to the right.",
        "the demand curve will shift to the left.",
        "the supply curve will shift to the right.",
        "the supply curve will shift to the left."
      ],
      answer: 3,
      explanation: "Worse technology makes production harder or more costly, reducing supply."
    },
    {
      text: "If a good is normal and income decreases, then",
      options: [
        "the demand curve will shift to the right.",
        "the demand curve will shift to the left.",
        "the supply curve will shift to the right.",
        "the supply curve will shift to the left."
      ],
      answer: 1,
      explanation: "For normal goods, lower income reduces demand."
    },
    {
      text: "If a firm has two production alternatives and the price of one decreases, this will cause the other good's",
      options: [
        "demand curve to shift to the right.",
        "supply curve to shift to the right.",
        "demand curve to shift to the left.",
        "supply curve to shift to the left."
      ],
      answer: 1,
      explanation: "If one production option becomes less attractive, producers shift resources toward the alternative, increasing its supply."
    },
    {
      text: "If the price of a good is expected to rise in the future, its",
      options: [
        "demand curve will shift to the right.",
        "supply curve will shift to the left.",
        "demand curve will shift to the left.",
        "demand curve will shift to the right and supply curve will shift to the left."
      ],
      answer: 3,
      explanation: "Buyers want more before the price rises, while sellers may hold goods back for the future."
    },
    {
      text: "If the price of inputs increases, the",
      options: [
        "demand curve will shift to the right.",
        "supply curve will shift to the right.",
        "demand curve will shift to the left.",
        "supply curve will shift to the left."
      ],
      answer: 3,
      explanation: "Higher input costs make production more expensive, reducing supply."
    },
    {
      text: "If two goods are considered complements and the price of one decreases then the other good's",
      options: [
        "demand curve will shift to the right.",
        "supply curve will shift to the right.",
        "demand curve will shift to the left.",
        "supply curve will shift to the left."
      ],
      answer: 0,
      explanation: "A lower price for one complement increases demand for the other complement."
    },
    {
      text: "The increase in the price of a good that is used as an input for a second good would (for the second good)",
      options: [
        "move its supply curve to the right.",
        "move its supply curve to the left.",
        "cause a movement along the supply curve to a (higher price, higher quantity) point.",
        "cause a movement along the supply curve to a (lower price, lower quantity) point."
      ],
      answer: 1,
      explanation: "A higher input price raises production cost and shifts supply left."
    },
    {
      text: "If a tax (paid by producers) on a good is reduced, this would",
      options: [
        "move its supply curve to the right.",
        "move its supply curve to the left.",
        "cause a movement along the supply curve to a (higher price, higher quantity) point.",
        "cause a movement along the supply curve to a (lower price, lower quantity) point."
      ],
      answer: 0,
      explanation: "A lower producer tax reduces production cost, increasing supply."
    },
    {
      text: "If a subsidy (going to producers) is created for a good, this would",
      options: [
        "move its supply curve to the right.",
        "move its supply curve to the left.",
        "cause a movement along the supply curve to a (higher price, higher quantity) point.",
        "cause a movement along the supply curve to a (lower price, lower quantity) point."
      ],
      answer: 0,
      explanation: "A producer subsidy lowers effective production cost, increasing supply."
    },
    {
      text: "If supply increases and the price doesn't change, there will be",
      options: ["a surplus.", "both a shortage and a surplus.", "a shortage.", "neither a shortage nor a surplus."],
      answer: 0,
      explanation: "At the old price, sellers now offer more than buyers want, so there is a surplus."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one(s) could show the result of an increase in income?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figures 1 and 2"],
      answer: 3,
      explanation: "Income can increase demand for normal goods or decrease demand for inferior goods, so either demand shift can apply."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one shows the result of an increase in the taste for a good?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
      answer: 0,
      explanation: "A stronger taste for a good shifts demand to the right, shown in Figure 1."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one shows the result of an increase in the price of a complement for a good?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
      answer: 1,
      explanation: "If a complement becomes more expensive, demand for this good decreases, shown by Figure 2."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one shows the result of an increase in income if a good is considered normal?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
      answer: 0,
      explanation: "For a normal good, higher income shifts demand right, shown in Figure 1."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one shows the result of an increase in technology in the market for anything?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
      answer: 2,
      explanation: "Better technology increases supply, shown by the rightward supply shift in Figure 3."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one shows the result of an increase in the number of sellers in the market for anything?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
      answer: 2,
      explanation: "More sellers increase supply, shown by the rightward supply shift in Figure 3."
    },
    {
      text: "Of the collection of supply and demand diagrams in Figure 2.2, which one(s) show the result of an increase in the expected future price?",
      image: "assets/chapter2-figure-2-2.jpeg",
      imageAlt: "Figure 2.2 with four supply and demand diagrams showing demand and supply shifts.",
      caption: "Figure 2.2",
      options: ["Figure 1", "Figure 4", "Figures 2 and 3", "Figures 1 and 4"],
      answer: 3,
      explanation: "Expected higher future prices can increase current demand and reduce current supply."
    },
    {
      text: "The supply curve slopes upward because producers' cost per unit eventually",
      options: [
        "decreases as more units are sold.",
        "remains unchanged as more units are sold.",
        "increases as more units are sold.",
        "will be subsidized by the government."
      ],
      answer: 2,
      explanation: "As producers expand output, marginal cost eventually rises."
    },
    {
      text: "Since teachers are an input in the production of education, when teacher salaries increase,",
      options: [
        "the supply of education decreases.",
        "the supply of education increases.",
        "the demand for education decreases.",
        "the demand for teachers increases."
      ],
      answer: 0,
      explanation: "Higher teacher salaries raise the cost of producing education, reducing supply."
    },
    {
      text: "Improvements in technology tend to",
      options: [
        "increase supply.",
        "lower the cost of producing a given output.",
        "increase the output produced for a given cost.",
        "All of these are correct."
      ],
      answer: 3,
      explanation: "Better technology can do all three: lower cost, raise output for a given cost, and increase supply."
    },
    {
      text: "An increase in the excise tax imposed upon consumers of gasoline",
      options: [
        "shifts the demand for gasoline to the left.",
        "shifts the demand for gasoline to the right.",
        "shifts the supply of gasoline to the right.",
        "shifts the market price of gasoline."
      ],
      answer: 0,
      explanation: "A tax paid by consumers makes buying gasoline more expensive to them, reducing demand."
    }
  ]
});

let chapters = loadChapters();
let chapterIndex = 0;
let questionIndex = 0;
let answers = {};
let flagged = {};

const els = {
  chapterSelect: document.querySelector("#chapter-select"),
  chapterSubtitle: document.querySelector("#chapter-subtitle"),
  chapterKicker: document.querySelector("#chapter-kicker"),
  scoreValue: document.querySelector("#score-value"),
  answeredValue: document.querySelector("#answered-value"),
  progressFill: document.querySelector("#progress-fill"),
  questionMap: document.querySelector("#question-map"),
  questionTitle: document.querySelector("#question-title"),
  questionText: document.querySelector("#question-text"),
  table: document.querySelector("#question-table"),
  figure: document.querySelector("#question-figure"),
  image: document.querySelector("#question-image"),
  caption: document.querySelector("#question-caption"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  prevBtn: document.querySelector("#prev-btn"),
  nextBtn: document.querySelector("#next-btn"),
  resetBtn: document.querySelector("#reset-btn"),
  importBtn: document.querySelector("#import-btn"),
  importInput: document.querySelector("#import-input"),
  flagBtn: document.querySelector("#flag-btn")
};

function loadChapters() {
  try {
    const imported = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return [...builtInChapters, ...imported];
  } catch {
    return [...builtInChapters];
  }
}

function saveImportedChapters() {
  const imported = chapters.filter((chapter) => !builtInChapters.some((builtIn) => builtIn.id === chapter.id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
}

function chapter() {
  return chapters[chapterIndex];
}

function question() {
  return chapter().questions[questionIndex];
}

function answerKey() {
  return `${chapter().id}:${questionIndex}`;
}

function renderChapterSelect() {
  els.chapterSelect.innerHTML = chapters
    .map((item, index) => `<option value="${index}">${escapeHtml(item.kicker || `Chapter ${index + 1}`)} - ${escapeHtml(item.title)}</option>`)
    .join("");
  els.chapterSelect.value = String(chapterIndex);
}

function render() {
  const currentChapter = chapter();
  const currentQuestion = question();
  const key = answerKey();
  const selected = answers[key];
  const isFlagged = Boolean(flagged[key]);

  els.chapterSubtitle.textContent = currentChapter.subtitle || "Chapter review";
  els.chapterKicker.textContent = currentChapter.kicker || `Chapter ${chapterIndex + 1}`;
  els.questionTitle.textContent = `Question ${questionIndex + 1}`;
  els.questionText.textContent = currentQuestion.text;

  if (currentQuestion.table) {
    els.table.hidden = false;
    els.table.innerHTML = renderTable(currentQuestion.table);
  } else {
    els.table.hidden = true;
    els.table.innerHTML = "";
  }

  if (currentQuestion.image) {
    els.figure.hidden = false;
    els.image.src = currentQuestion.image;
    els.image.alt = currentQuestion.imageAlt || currentQuestion.caption || "Question figure";
    els.caption.textContent = currentQuestion.caption || "";
  } else {
    els.figure.hidden = true;
    els.image.removeAttribute("src");
    els.image.alt = "";
    els.caption.textContent = "";
  }

  els.answers.innerHTML = currentQuestion.options
    .map((option, index) => {
      const letter = String.fromCharCode(65 + index);
      const stateClass = selected === undefined
        ? ""
        : index === currentQuestion.answer
          ? " correct"
          : index === selected
            ? " incorrect"
            : "";
      return `
        <button class="answer-btn${stateClass}" type="button" data-answer="${index}">
          <span class="answer-letter">${letter}</span>
          <span>${escapeHtml(option)}</span>
        </button>
      `;
    })
    .join("");

  if (selected === undefined) {
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
  } else {
    const correct = selected === currentQuestion.answer;
    const letter = String.fromCharCode(65 + currentQuestion.answer);
    els.feedback.hidden = false;
    els.feedback.className = correct ? "feedback" : "feedback missed";
    els.feedback.textContent = `${correct ? "Correct." : `Not quite. Correct answer: ${letter}.`} ${currentQuestion.explanation}`;
  }

  els.prevBtn.disabled = questionIndex === 0;
  els.nextBtn.textContent = questionIndex === currentChapter.questions.length - 1 ? "Finish" : "Next";
  els.flagBtn.setAttribute("aria-pressed", String(isFlagged));
  renderProgress();
  renderQuestionMap();
}

function renderProgress() {
  const currentChapter = chapter();
  const chapterPrefix = `${currentChapter.id}:`;
  const answeredEntries = Object.entries(answers).filter(([key]) => key.startsWith(chapterPrefix));
  const correctCount = answeredEntries.filter(([key, value]) => {
    const index = Number(key.slice(chapterPrefix.length));
    return currentChapter.questions[index]?.answer === value;
  }).length;
  const answeredCount = answeredEntries.length;
  const pct = currentChapter.questions.length ? (answeredCount / currentChapter.questions.length) * 100 : 0;

  els.scoreValue.textContent = String(correctCount);
  els.answeredValue.textContent = `${answeredCount}/${currentChapter.questions.length}`;
  els.progressFill.style.width = `${pct}%`;
}

function renderQuestionMap() {
  const currentChapter = chapter();
  els.questionMap.innerHTML = currentChapter.questions
    .map((item, index) => {
      const key = `${currentChapter.id}:${index}`;
      const selected = answers[key];
      const status = selected === undefined ? "" : selected === item.answer ? " correct" : " incorrect";
      const current = index === questionIndex ? " current" : "";
      const isFlagged = flagged[key] ? " flagged" : "";
      return `<button class="map-btn${status}${current}${isFlagged}" type="button" data-question="${index}" aria-label="Question ${index + 1}">${index + 1}</button>`;
    })
    .join("");
}

function selectAnswer(index) {
  answers[answerKey()] = index;
  render();
}

function renderTable(table) {
  const header = table.headers.map((item) => `<th scope="col">${escapeHtml(item)}</th>`).join("");
  const rows = table.rows
    .map((row) => `<tr>${row.map((item) => `<td>${escapeHtml(item)}</td>`).join("")}</tr>`)
    .join("");
  const caption = table.caption ? `<caption>${escapeHtml(table.caption)}</caption>` : "";
  return `<table class="question-table">${caption}<thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
}

function resetChapter() {
  const prefix = `${chapter().id}:`;
  Object.keys(answers).forEach((key) => {
    if (key.startsWith(prefix)) delete answers[key];
  });
  Object.keys(flagged).forEach((key) => {
    if (key.startsWith(prefix)) delete flagged[key];
  });
  questionIndex = 0;
  render();
}

function validateChapter(data) {
  if (!data || !Array.isArray(data.questions) || !data.questions.length) {
    throw new Error("Chapter JSON needs a questions array.");
  }
  data.questions.forEach((item, index) => {
    if (!item.text || !Array.isArray(item.options) || item.answer === undefined) {
      throw new Error(`Question ${index + 1} needs text, options, and answer.`);
    }
  });
  return {
    id: data.id || `imported-${Date.now()}`,
    kicker: data.kicker || "Imported",
    title: data.title || "Imported Chapter",
    subtitle: data.subtitle || "Custom review",
    questions: data.questions
  };
}

function importChapter(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = validateChapter(JSON.parse(reader.result));
      chapters.push(imported);
      chapterIndex = chapters.length - 1;
      questionIndex = 0;
      saveImportedChapters();
      renderChapterSelect();
      render();
    } catch (error) {
      window.alert(error.message);
    }
  });
  reader.readAsText(file);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.answers.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;
  selectAnswer(Number(button.dataset.answer));
});

els.questionMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-question]");
  if (!button) return;
  questionIndex = Number(button.dataset.question);
  render();
});

els.prevBtn.addEventListener("click", () => {
  questionIndex = Math.max(0, questionIndex - 1);
  render();
});

els.nextBtn.addEventListener("click", () => {
  if (questionIndex < chapter().questions.length - 1) {
    questionIndex += 1;
  }
  render();
});

els.resetBtn.addEventListener("click", resetChapter);

els.importBtn.addEventListener("click", () => els.importInput.click());

els.importInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importChapter(file);
  event.target.value = "";
});

els.chapterSelect.addEventListener("change", (event) => {
  chapterIndex = Number(event.target.value);
  questionIndex = 0;
  render();
});

els.flagBtn.addEventListener("click", () => {
  const key = answerKey();
  flagged[key] = !flagged[key];
  render();
});

renderChapterSelect();
render();
