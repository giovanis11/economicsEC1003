(() => {
  const q = (text, options, answer, extra = {}) => ({
    text,
    options,
    answer,
    explanation: `Correct answer: ${options[answer]}`,
    ...extra
  });

  const chapter6CpiTable = {
    caption: "Table 6.1: CPI 1982-1984 = 100",
    headers: ["Year", "CPI", "Year", "CPI", "Year", "CPI"],
    rows: [
      ["1920", "19.4", "1986", "110.5", "1999", "168.3"],
      ["1930", "16.1", "1987", "115.4", "2000", "174.0"],
      ["1940", "14.1", "1988", "120.5", "2001", "176.7"],
      ["1950", "25.0", "1989", "126.1", "2002", "180.9"],
      ["1960", "29.8", "1990", "133.8", "2003", "184.3"],
      ["1970", "39.8", "1991", "137.9", "2004", "190.3"],
      ["1979", "76.7", "1992", "141.9", "2005", "196.8"],
      ["1980", "86.3", "1993", "145.8", "2006", "201.8"],
      ["1981", "94.0", "1994", "149.7", "2007", "210.0"],
      ["1982", "97.6", "1995", "153.5", "2008", "210.2"],
      ["1983", "101.3", "1996", "158.6", "2009", "217.2"],
      ["1984", "105.3", "1997", "161.3", "2010", "221.1"],
      ["1985", "109.3", "1998", "163.9", "", ""]
    ]
  };

  const chapter6RealGdpTable = {
    caption: "Data for a Nation",
    headers: ["Year", "Nominal GDP", "Price Index"],
    rows: [
      ["1", "$35", "90"],
      ["2", "$40", "100"],
      ["3", "$45", "110"],
      ["4", "$48", "120"],
      ["5", "$56", "140"]
    ]
  };

  const chapter6NationalIncomeTable = {
    caption: "National income data, in billions of dollars",
    headers: ["Item", "Amount"],
    rows: [
      ["Consumption of fixed capital", "$25"],
      ["Government purchases", "$315"],
      ["U.S. imports", "$260"],
      ["Personal taxes", "$45"],
      ["Transfer payments", "$247"],
      ["U.S. exports", "$249"],
      ["Personal consumption expenditures", "$475"],
      ["Net foreign factor income", "$5"],
      ["Gross private domestic investment", "$300"],
      ["Taxes on production and imports", "$245"],
      ["Undistributed corporate profits", "$60"],
      ["Social Security contributions", "$240"],
      ["Corporate income taxes", "$65"],
      ["Statistical discrepancy", "$40"]
    ]
  };

  const chapter6GdpPriceTable = {
    caption: "GDP figures are in billions of dollars",
    headers: ["Year", "Nominal GDP", "Real GDP", "Price Index"],
    rows: [
      ["1", "$5,200", "$4,800", ""],
      ["2", "$5,500", "", "112"],
      ["3", "$5,750", "$5,000", ""]
    ]
  };

  const chapter9Figure = {
    image: "assets/ch9-figure-7-1.jpeg",
    imageAlt: "Figure 7.1 market for money with demand and supply curves, axis labels, and equilibrium boxes.",
    caption: "Figure 7.1"
  };

  const chapter6Questions = [
    q("The reason that only final sales are counted in GDP is", [
      "to avoid double counting goods that are sold so as to be resold.",
      "to not count production in other countries.",
      "because the government can't get records on intermediate sales.",
      "to simplify the computation and no other reason."
    ], 0),
    q("In measuring Gross Domestic Product of United States, goods produced by foreign firms in the United States are", [
      "counted, and so are goods produced by American firms in foreign countries.",
      "counted, but goods produced by American firms in foreign countries are not counted.",
      "not counted, but goods produced by American firms in foreign countries.",
      "not counted, and goods produced by American firms in foreign countries are also not counted."
    ], 1),
    q("Gross Domestic Product is counted using two methods: one which counts all the ways people ________ money and another which counts all the ways people ________ money.", [
      "earn; spend",
      "spend; save",
      "earn; save",
      "loan; borrow"
    ], 0),
    q("How does GDP of United States deal with a Ford produced in Mexico?", [
      "It is fully counted.",
      "It is not counted at all.",
      "It is partially counted.",
      "Is counted at twice the value."
    ], 1),
    q("How does GDP account for something that was produced for sale in one year and sold in the next year?", [
      "It is counted in the first year, and anything that happens later does not count.",
      "It is counted in the second year.",
      "It is counted as an addition to inventory (which is in business investment) in the year it was produced, and the markup is counted in the year in which it is sold.",
      "It is counted twice."
    ], 2),
    q("Suppose a DVR is bought from China for $200 by US and then sold for $250. GDP of US will count this", [
      "as nothing.",
      "as a net of $50 ($250 sale minus $200 import).",
      "as $200.",
      "as $250."
    ], 1),
    q("Suppose a Boeing 777, produced in the United States, is sold to a Chinese company for $250 million and resells it to a Hong Kong airline for $251 million. GDP of United States will count this as", [
      "nothing.",
      "$250 million.",
      "$251 million.",
      "$451 million."
    ], 1),
    q("The reason that only final sales count in GDP is to", [
      "make it easier to do the accounting.",
      "avoid double counting.",
      "undervalue labor.",
      "overvalue capital."
    ], 1),
    q("The expenditures approach to GDP equals", [
      "Employee Compensation + Profit + Net Property Income + Indirect Business Taxes + Depreciation - Income Earned Abroad.",
      "Consumption + Gross Investment + Government Purchases + Net Exports.",
      "Consumption + Net Investment (Gross Investment-Depreciation) + Government Purchases + Net Exports.",
      "Employee Compensation - Profit - Net Property Income - Indirect Business Taxes-Depreciation - Income Earned Abroad."
    ], 1),
    q("The income approach to GDP equals", [
      "Employee Compensation + Profit + Net Property Income + Indirect Business Taxes + Depreciation - Income Earned Abroad.",
      "Consumption + Gross Investment + Government Purchases + Net Exports.",
      "Consumption + Net Investment (Gross Investment-Depreciation) + Government Purchases + Net Exports.",
      "Employee Compensation - Profit - Net Property Income - Indirect Business Taxes - Depreciation - Income Earned Abroad."
    ], 0),
    q("Inflation is measured using ________ in a price index.", [
      "the absolute increase",
      "a multi-year weighted average increase",
      "the percentage year-to-year increase",
      "logarithm adjusted absolute increase"
    ], 2),
    q("If a market basket was defined in 2018 and it cost $10,000 to purchase the items in that basket in 2018 (base year), while it cost $11,000 to purchase those identical goods in 2019, then the price index for 2019 is", [
      "100.",
      "(10000/11000)*100=90.9.",
      "(11000/10000)*100=110.",
      "unknown given this data."
    ], 2),
    q("If a market basket was defined in 2018 and it cost $10,000 to purchase the items in that basket in 2018 (base year), while it cost $11,000 to purchase those identical goods in 2019, then the inflation rate from 2018 to 2019 is", [
      "(100-100)/100*100%=0%.",
      "(100-90.9)/100*100%=9.1%.",
      "(110-100)/100*100%=10%.",
      "unknown given this data."
    ], 2),
    q("If a market basket was defined in 2018 and it cost $10,000 to purchase the items in that basket in 2018, while it cost $12,000 to purchase those identical goods in 2019, then the price index for the base year is", [
      "100.",
      "(10000/12000)*100=83.33.",
      "(12000/10000)*100=120.",
      "unknown given this data."
    ], 0),
    q("If a market basket was defined in 2018 (base year) and it cost $10,000 to purchase the items in that basket in 2018, while it cost $12,000 to purchase those identical goods in 2019, then the price index for 2019 is", [
      "100.",
      "(10000/12000)*100=83.33.",
      "(12000/10000)*100=120.",
      "unknown given this data."
    ], 2),
    q("If a market basket was defined in 2018 and it cost $10,000 to purchase the items in that basket in 2018, while it cost $12,000 to purchase those identical goods in 2019, then the inflation rate from 2017 to 2018 is", [
      "(100-100)/100*100%=0%.",
      "(100-83.3)/100*100%=16.7%.",
      "(120-100)/100*100%=20%.",
      "unknown given this data."
    ], 3),
    q("Using Table 6.1, the inflation rate for 1999 would be", [
      "68.3% (168.3-100).",
      "2.7% (((168.3-163.9)/163.9)*100 %).",
      "4.4% (168.3-163.9).",
      "3.0% (174-163.9)/(2*163.9)*100%)."
    ], 1, { table: chapter6CpiTable }),
    q("Using Table 6.1, the inflation rate for 2000 would be", [
      "74.0% (174.0-100).",
      "3.3% (((174.0-168.3)/168.3)*100 %).",
      "5.7% (174.0-168.3).",
      "3.1% (174-163.9)/(2*163.9)*100%)."
    ], 1, { table: chapter6CpiTable }),
    q("Using Table 6.1, were there to have been deflation during this time period, you would have seen", [
      "a slower rate of increase in the CPI.",
      "a stationary CPI.",
      "a more rapid rate of increase in the CPI.",
      "a decrease in the CPI."
    ], 3, { table: chapter6CpiTable }),
    q("Suppose there are only two goods (Good A and Good B) and the average person buys 4 of Good A in a year and 3 of Good B. If the Price of Good A is $5 and the Price of Good B is $10, the price of the market basket", [
      "is 100.",
      "is 20.",
      "is 30.",
      "is 50."
    ], 3),
    q("Suppose this is the base year and there are only two goods (Good A and Good B) and the average person buys 4 of Good A in a year and 3 of Good B. If the Price of Good A is $5 and the Price of Good B is $10, the price index", [
      "is 100.",
      "is 20.",
      "is 30.",
      "is 50."
    ], 0),
    q("Suppose there are only two goods (Good A and Good B) and the average person buys 4 of Good A in a year and 3 of Good B. If, in the base year, the Price of Good A is $5 and the Price of Good B is $10, and in the next year the Price of Good A is $6 and the Price of Good B is $9, the inflation that occurred in the second year is", [
      "51%.",
      "100%.",
      "1%.",
      "2%."
    ], 3),
    q("Deflation occurs only when", [
      "some prices fall, but average prices still rise.",
      "all prices for all goods fall.",
      "the average price level (CPI) falls.",
      "the average price level increases but at a slower rate than before."
    ], 2),
    q("With deflation, people will", [
      "buy goods earlier than they had originally planned.",
      "feel compelled to borrow money.",
      "delay their purchases of goods in hopes prices will fall further.",
      "see their paycheck rise as bosses seek to reward high performers."
    ], 2),
    q("A reason why the CPI overstates the cost of living is it", [
      "only measures the effects of inflation on the poor.",
      "makes no attempt to ascertain what average people buy.",
      "makes no attempt to update the market basket.",
      "makes no attempt to control for substitution to cheaper goods."
    ], 3),
    q("If the inflation rate turns out to be greater than was is expected to be, the clear winners are", [
      "lenders.",
      "borrowers.",
      "people on fixed incomes.",
      "businesses."
    ], 1),
    q("The \"core rate\" of inflation", [
      "adds in food and energy to the price index.",
      "removes food and energy from the price index.",
      "only includes the price of food and energy in the price index.",
      "is a price index associated with the important things people buy."
    ], 1),
    q("The annualized monthly CPI numbers are", [
      "more volatile than the Core CPI.",
      "less volatile than the Core CPI.",
      "different, but no more or less volatile than the Core CPI."
    ], 0),
    q("One problem with using Real Gross Domestic Product as a measure of social welfare is that", [
      "it fails to count home production.",
      "it fails to count services, a growing part of the economy.",
      "it double, triple, and sometimes quadruple counts goods that are produced in stages.",
      "it fails to account for imports, a growing part of the economy."
    ], 0),
    q("Which of the following can make the unemployment rate fall?", [
      "An increase in the number of people who are looking for work.",
      "A decrease in the number of people who are looking for work.",
      "An increase in the number of people with jobs.",
      "A decrease in the number of people who are looking for work and an increase in the number of people with jobs."
    ], 3),
    q("Which of the following can make the unemployment rate rise?", [
      "A decrease in the number of people who are looking for work.",
      "An increase in the number of people who are looking for work.",
      "A decrease in the number of people with jobs.",
      "An increase in the number of people who are looking for work and a decrease in the number of people with jobs."
    ], 3),
    q("If the unemployment rate falls because the number of people not working but searching for work falls, economists would attribute this to the", [
      "fallacy of composition.",
      "encouraged worker effect.",
      "discouraged worker effect.",
      "None of these options are correct."
    ], 2),
    q("If a person is laid-off from a job and told that they will be brought back as soon as the economy picks up and demand for their product rises, then economists call this person", [
      "underemployed.",
      "structurally unemployed.",
      "frictionally unemployed.",
      "cyclically unemployed."
    ], 3),
    q("If a person is unemployed because their industry has moved to another country, economists refer to the person as", [
      "underemployed.",
      "structurally unemployed.",
      "frictionally unemployed.",
      "cyclically unemployed."
    ], 1),
    q("A 15-year-old that wants a job but can't find one is", [
      "underemployed.",
      "unemployed.",
      "not counted at all.",
      "cyclically unemployed."
    ], 2),
    q("In 2005, General Motors announced a 20% reduction in its staffing levels and the closure of many assembly plants. Those laid off as a result would likely be classified as", [
      "seasonally unemployed.",
      "frictionally unemployed.",
      "cyclically unemployed.",
      "structurally unemployed."
    ], 3),
    q("With 125 million people working, 8 million out of work and looking for work, and 147 million neither working nor looking for work, the unemployment rate would be", [
      "6.4% (8/125)*100%.",
      "2.9% (8/(125+8+147)*100%).",
      "6.0% (8/(125+8)*100%).",
      "55.5% (8+147)/(125+8+147)*100%."
    ], 2),
    q("With 125 million people working, 8 million out of work and looking for work, and 147 million neither working nor looking for work, the \"discouraged worker effect\" would be illustrated by people in the", [
      "125 million losing their jobs.",
      "8 million giving up in their search for work.",
      "147 million seeking and attaining employment.",
      "147 million seeking but not attaining employment."
    ], 1),
    q("To an economist, a \"market basket\" is made up of", [
      "the goods average people buy and the quantities in which they buy them.",
      "the goods people should buy and the quantities they should buy them in.",
      "only things, like cars, and not services, like cell phone service.",
      "the goods and services people will buy next year."
    ], 0),
    q("The inflation rate is", [
      "the percentage increase in the price index from one year to the next.",
      "the percentage increase in the price index from the base year.",
      "the price index in one year minus the price index in the previous year.",
      "the percentage increase in the price index from one year to the next as well as the price index in one year minus the price index in the previous year."
    ], 0),
    q("Real Gross Domestic Product is Gross Domestic Product", [
      "after eliminating sales of intangible things, like services.",
      "adjusted for inflation.",
      "adjusted for changes in interest rates.",
      "adjusted for the impact of pollution."
    ], 1),
    q("A price index based upon the items purchased by firms is the", [
      "PCE.",
      "CPI.",
      "core PCE.",
      "Producer Price Index."
    ], 3),
    q("When recent college graduates begin looking for their first professional work in June, the unemployment rate", [
      "decreases as the labor force increases.",
      "increases as the labor force increases.",
      "decreases as the labor force decreases.",
      "increases as the labor force decreases."
    ], 1),
    q("Traditionally, a recession defined by declining Real GDP lasts over a period of at least", [
      "one calendar quarter.",
      "one calendar year.",
      "two consecutive calendar quarters.",
      "two consecutive calendar years."
    ], 2),
    q("If GDP is $10 trillion, Personal Consumption Expenditure is $6.5 trillion, Gross Private Investment is $2.0 trillion, and Government Consumption and Investment Expenditures together are $2.0 trillion,", [
      "Net Exports are $0.5 trillion.",
      "Depreciation is $0.5 trillion.",
      "Indirect Business Taxes are $0.5 trillion.",
      "Net Exports are -$0.5 trillion."
    ], 3),
    q("One of the reasons that Real Gross Domestic Product is not synonymous with social welfare is", [
      "people substitute between goods.",
      "things produced by people under 18 are not counted.",
      "the underground economy (unreported and illegal income and sales) is not counted.",
      "quality has remained steady."
    ], 2),
    q("The percentage of the population over 16 that is employed or seeking employment is called the", [
      "Labor Force Participation Rate.",
      "Employment Rate.",
      "Employment-Population Ratio.",
      "Unemployment Rate."
    ], 0),
    q("If a society has 100 million people over the age of 16, 58 million who are working, and 2 million who are looking for work, with 40 million others neither working nor looking for work, the labor force participation rate is", [
      "40% (40/100).",
      "58% (58/100).",
      "60% (60/100).",
      "42% ((2+40)/100)."
    ], 2),
    q("If a society has 250 million people over the age of 16, 145 million who are working, and 5 million who are looking for work, with 100 million others neither working nor looking for work, the labor force participation rate is", [
      "40% (145/250).",
      "58% (145/250).",
      "60% (150/250).",
      "42% ((5+100)/250)."
    ], 2),
    q("One of the reasons that Real Gross Domestic Product is not synonymous with social welfare is", [
      "people substitute between goods.",
      "things produced by people under 18 are not counted.",
      "environmental quality is ignored.",
      "quality has remained steady."
    ], 2),
    q("Consider the following data for a nation. The country's real GDP declined between years:", [
      "1 and 2",
      "2 and 3",
      "3 and 4",
      "4 and 5"
    ], 2, { table: chapter6RealGdpTable }),
    q("The following are examples of final goods in national income accounting, except:", [
      "Lumber and steel beams purchased by a construction company",
      "Tractor purchased by a construction company",
      "Laptop computer purchased by an executive for personal use",
      "Desktop computer purchased by an executive for business use"
    ], 0),
    q("Which would be considered an investment according to economists?", [
      "A fishing-company owner buys Google shares",
      "A fishing-company buys a few boats from another fishing company that was closing out",
      "A fishing-company owner buys new fishing gear",
      "A fishing-company owner buys fuel to run the boats"
    ], 2),
    q("Gross domestic private investment, as defined in national income accounts, would include:", [
      "Additions to business inventories",
      "Personal consumption expenditures on durable goods",
      "Government construction of new highways and dams",
      "Purchases of shares of stock in corporate businesses"
    ], 0),
    q("Refer to the above data. Gross domestic product is:", [
      "$1,049 billion",
      "$1,079 billion",
      "$1,090 billion",
      "$1,101 billion"
    ], 1, { table: chapter6NationalIncomeTable }),
    q("Refer to the above table. What is the GDP price index in Year 1?", [
      "105.2",
      "108.3",
      "109.6",
      "111.5"
    ], 1, { table: chapter6GdpPriceTable }),
    q("A nation has a population of 260 million people. Of these, 60 million are retired, in the military, in institutions, or under 16 years old. There are 188 million who are employed and 12 million who are unemployed. What is the unemployment rate?", [
      "4 percent",
      "6 percent",
      "9 percent",
      "27 percent"
    ], 1),
    q("Kevin has lost his job in an automobile plant because of the use of robots for welding on the assembly line. Kevin plans to go to technical school to learn how to repair microcomputers. The type of unemployment Kevin is faced with is:", [
      "Cyclical",
      "Frictional",
      "Structural",
      "Natural"
    ], 2),
    q("Which statement is correct?", [
      "All sectors of the economy are affected to similar degrees by business fluctuations",
      "Real output and employment generally show little variance over the business cycle",
      "The production of nondurable consumer goods is more stable than the production of durable consumer goods over the business cycle",
      "Recessions have not been severe because economists and statisticians have been able to predict their occurrence and intensity with high accuracy"
    ], 2),
    q("If the Consumer Price Index was 90 in one year and 100 in the following year, then the rate of inflation is about:", [
      "9 percent",
      "10 percent",
      "11 percent",
      "12 percent"
    ], 2),
    q("A worker who loses a job at a call center because business firms switch the call center to another country is an example of:", [
      "Frictional unemployment",
      "Structural unemployment",
      "Cyclical unemployment",
      "Disguised unemployment"
    ], 1)
  ];

  const chapter7Questions = [
    q("Any event that creates a \"crisis in confidence\" is likely to lead to", [
      "higher aggregate prices.",
      "lower aggregate prices.",
      "higher aggregate output.",
      "inflation."
    ], 1),
    q("An increase in consumers' taxes will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 1),
    q("An increase in government spending will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 0),
    q("An increase in interest rates will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 1),
    q("An increase in input prices will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 3),
    q("An increase in productivity will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 2),
    q("An increase in regulation will cause", [
      "AD to increase (move to the right).",
      "AD to decrease (move to the left).",
      "AS to increase (move down and to the right).",
      "AS to decrease (move up and to the left)."
    ], 3),
    q("An increase in worker productivity will", [
      "increase aggregate supply.",
      "increase aggregate demand.",
      "decrease aggregate supply.",
      "decrease aggregate demand."
    ], 0),
    q("Use the aggregate supply-aggregate demand model to determine which of the following will lead to higher prices.", [
      "A tax increase",
      "An increase in interest rates",
      "A fall in world oil prices",
      "An increase in government spending"
    ], 3),
    q("Use the aggregate supply-aggregate demand model to determine which of the following will lead to higher aggregate output.", [
      "A tax increase",
      "A cut in interest rates",
      "A spike in world oil prices",
      "A cut in government spending"
    ], 1),
    q("If a supply-side economist were to make a suggestion to stimulate economic activity, which of the following policies would she NOT suggest?", [
      "An increase in the minimum wage",
      "A repeal of regulations on business",
      "A repeal of employer-mandated benefits",
      "An elimination of the corporate income tax"
    ], 0),
    q("If a supply-side economist were to make a suggestion to stimulate economic activity, which of the following policies would she NOT suggest?", [
      "An elimination of the minimum wage",
      "A repeal of regulations on business",
      "The creation of employer-mandated benefits",
      "An elimination of the corporate income tax"
    ], 2),
    q("Which of the following policies might create demand-pull inflation?", [
      "An increase government spending",
      "A decrease in interest rates",
      "A cut in taxes",
      "All of these policies could create demand-pull inflation."
    ], 3),
    q("Which of the following policies might create demand-pull inflation?", [
      "A decrease government spending",
      "A decrease in interest rates",
      "An increase in taxes",
      "All of these policies could create demand-pull inflation."
    ], 1),
    q("Which of the following might create cost-push inflation?", [
      "A decrease government spending",
      "An increase in oil prices",
      "A decrease in government regulation",
      "An increase in taxes"
    ], 1),
    q("Which of the following might create cost-push inflation?", [
      "A decrease government spending",
      "A decrease in oil prices",
      "An increase in government regulation",
      "An increase in taxes"
    ], 2),
    q("Which of the following might create cost-push inflation", [
      "A decrease government spending",
      "A decrease in oil prices",
      "A decrease in government regulation",
      "The imposition of a 35-hour work week"
    ], 3),
    q("When the general price level in our economy increases, the following effects occur except:", [
      "The purchasing power of people's savings will increase",
      "The interest rate will also tend to increase",
      "Foreign buyers will buy less of our output, and we tend to import more",
      "Our net exports will tend to decrease"
    ], 0),
    q("A decrease in expected returns on investment will most likely shift the AD curve to the:", [
      "Right because C will increase",
      "Left because C will decrease",
      "Right because Ig will increase",
      "Left because Ig will decrease"
    ], 3),
    q("The slope of the immediate-short-run aggregate supply curve is based on the assumption that:", [
      "Both input and output prices are fixed",
      "Neither input nor output prices are fixed",
      "Input prices are flexible but output prices are fixed",
      "Input prices are fixed but output prices are flexible"
    ], 0),
    q("The long-run aggregate supply analysis assumes that:", [
      "Input prices are fixed while product prices are variable",
      "Input prices are variable while product prices are fixed",
      "Both input and product prices are variable",
      "Both input and product prices are fixed"
    ], 2),
    q("If personal income taxes and business taxes increase, then this will:", [
      "Increase aggregate demand and aggregate supply",
      "Decrease aggregate demand and aggregate supply",
      "Decrease aggregate demand and increase aggregate supply",
      "Increase aggregate demand and decrease aggregate supply"
    ], 1)
  ];

  const chapter8Questions = [
    q("Replacement of a progressive income tax system with a single income tax rate would be an example of", [
      "nondiscretionary fiscal policy.",
      "discretionary fiscal policy.",
      "mandatory spending policy.",
      "interest rate policy."
    ], 1),
    q("An example of discretionary fiscal policy would be", [
      "the operation of the welfare state.",
      "the operation of the progressive federal income tax.",
      "a tax cut adopted to stimulate consumption.",
      "an interest rate cut implemented to stimulate consumption."
    ], 2),
    q("An example of discretionary fiscal policy would be", [
      "the existence of the welfare state.",
      "the existence of the progressive federal income tax.",
      "a federal jobs program adopted to stimulate consumption.",
      "an interest rate cut implemented to stimulate consumption."
    ], 2),
    q("An example of nondiscretionary fiscal policy would be", [
      "the operation of the welfare state.",
      "a federal jobs program adopted to stimulate consumption.",
      "a tax cut adopted to stimulate consumption.",
      "an interest rate cut implemented to stimulate consumption."
    ], 0),
    q("Nondiscretionary Fiscal Policy works by having", [
      "progressive income tax rates take a portion of increased income thereby dampening periods of growth.",
      "Congress and the President agree upon a tax cut to stimulate growth.",
      "welfare programs reduce spending on people when they have increased incomes, thereby dampening periods of economic growth.",
      "both progressive income tax rates take a portion of increased income and welfare programs reduce spending on people when they have increased incomes thereby dampening periods of economic growth."
    ], 3),
    q("The tax cuts of 2001 and 2003 that came in the form of tax rebate checks are good examples of", [
      "fiscal policy.",
      "monetary policy.",
      "the fallacy of composition.",
      "the fallacy that causation and correlation are the same."
    ], 0),
    q("Using the aggregate supply-aggregate demand model, the tax cuts of 2001 and 2003 that came in the form of tax rebate checks would cause", [
      "aggregate demand to shift to the right.",
      "aggregate supply to shift to the right.",
      "aggregate demand to shift to the left.",
      "aggregate supply to shift to the left."
    ], 0),
    q("Short-run expansionary Fiscal Policy would result in", [
      "aggregate demand moving to the right.",
      "aggregate supply moving to the right.",
      "aggregate demand moving to the left.",
      "aggregate supply moving to the left."
    ], 0),
    q("Which of the following would qualify as an aggregate supply shock?", [
      "An unexpected increase in oil prices",
      "A seasonally expected increase in oil prices",
      "An unexpected reduction in consumer confidence",
      "An anticipated tax cut"
    ], 0),
    q("Which of the following would qualify as an aggregate demand shock?", [
      "An unexpected increase in oil prices",
      "A seasonally expected increase in oil prices",
      "An unexpected reduction in consumer confidence",
      "An anticipated tax cut"
    ], 2),
    q("A significant adverse supply-side shock to the U.S. economy in mid-2008 came from", [
      "a tripling of world crude oil prices.",
      "the plummeting world price of crude oil.",
      "increased federal spending on \"shovel-ready\" infrastructure projects.",
      "All of these options are correct."
    ], 0),
    q("A political problem with discretionary fiscal policy is the", [
      "contractionary bias.",
      "expansionary bias.",
      "big-state bias.",
      "overreaction bias."
    ], 1),
    q("A political problem with discretionary fiscal policy is the", [
      "ability of powerful politicians to direct government spending to their favored causes.",
      "split control of the legislative and judicial branches of government.",
      "business cycle.",
      "Federal Reserve."
    ], 0),
    q("A political problem with discretionary fiscal policy is the", [
      "political business cycle.",
      "split control of the legislative and judicial branches of government.",
      "business cycle.",
      "Federal Reserve."
    ], 0),
    q("The late-1960's era Johnson 10% tax surcharge designed to curb inflation is an example of", [
      "nondiscretionary fiscal policy.",
      "discretionary (and expansionary) fiscal policy.",
      "discretionary (and contractionary) fiscal policy.",
      "monetary policy."
    ], 2),
    q("The portion of the Obama stimulus package that provided more money (a $25 per week increase) to those who were unemployed is best thought of as", [
      "nondiscretionary fiscal policy.",
      "discretionary (and expansionary) fiscal policy.",
      "discretionary (and contractionary) fiscal policy.",
      "monetary policy."
    ], 1),
    q("The portion of the Obama stimulus package that bolstered state unemployment plans is best thought of as", [
      "nondiscretionary fiscal policy.",
      "discretionary (and expansionary) fiscal policy.",
      "discretionary (and contractionary) fiscal policy.",
      "monetary policy."
    ], 1),
    q("The portion of the Obama stimulus package that cut taxes is best thought of as", [
      "nondiscretionary fiscal policy.",
      "discretionary (and expansionary) fiscal policy.",
      "discretionary (and contractionary) fiscal policy.",
      "monetary policy."
    ], 1),
    q("The critical elements of nondiscretionary fiscal policy are", [
      "tax policy and spending policy.",
      "a progressive income tax and a welfare state.",
      "interest rates and the money supply.",
      "interest rates and tax rates."
    ], 1),
    q("The critical elements of discretionary fiscal policy are", [
      "tax policy and spending policy.",
      "a progressive income tax and a welfare state.",
      "interest rates and the money supply.",
      "interest rates and tax rates."
    ], 0),
    q("A political leader suggesting that an economic downturn will be cushioned automatically is referring to the automatic actions resulting from", [
      "tax policy and spending policy.",
      "a progressive income tax and a welfare state.",
      "interest rates and the money supply.",
      "interest rates and tax rates."
    ], 1),
    q("A political leader suggesting that an economic downturn will be cushioned automatically is referring to", [
      "Monetary policy.",
      "Discretionary Fiscal Policy.",
      "Nondiscretionary Fiscal Policy.",
      "Tax policy changes."
    ], 2),
    q("A political leader suggesting that an economic downturn will be better dealt with actively changing tax and spending policies is advocating", [
      "Monetary policy.",
      "Discretionary Fiscal Policy.",
      "Nondiscretionary Fiscal Policy.",
      "Regulatory changes."
    ], 1),
    q("A political leader suggesting that the country \"stay the course\" in the face of an economic downturn because things will be potentially made worse if tax and spending policies are adopted, is, by implication, suggesting ________ is better.", [
      "Trade policy",
      "Discretionary Fiscal Policy",
      "Nondiscretionary Fiscal Policy",
      "Regulatory changes"
    ], 2)
  ];

  const chapter9Questions = [
    q("Savers are motivated by the", [
      "nominal interest rate.",
      "real interest rate.",
      "expected rate of inflation.",
      "advertised interest rate."
    ], 1),
    q("Assuming that Figure 7.1 is a market for money that can be borrowed or saved, Box 1 is", [
      "\"$\" for the amount borrowed/saved.",
      "\"$*\" for the equilibrium amount borrowed/saved.",
      "\"r\" for interest rate.",
      "\"r*\" for equilibrium interest rate."
    ], 2, chapter9Figure),
    q("A higher interest rate", [
      "increases the motivation to delay consumption and, therefore, save.",
      "increases the motivation to delay consumption and, therefore, borrow.",
      "decreases the motivation to delay consumption and, therefore, save.",
      "decreases the motivation to delay consumption and, therefore, borrow."
    ], 0),
    q("When evaluating a business decision, an economist will often resort to the use of present value because", [
      "the profits may not be large enough to warrant the time and attention of the investor.",
      "the investment occurs in one time period and the profits in another.",
      "the investment is often in one currency and the profits in another.",
      "the investment is often under one set of managers and the profits under another."
    ], 1),
    q("The interest rate at which the present value of costs equals the present value benefits is the", [
      "coupon interest rate.",
      "yield to maturity.",
      "internal rate of return.",
      "market interest rate."
    ], 2),
    q("The possibility that an investor will not receive full payment is called", [
      "an advance.",
      "credit.",
      "the index problem.",
      "risk."
    ], 3),
    q("In a market for money, it is typically the case that we use the ________ in a supply and demand model.", [
      "inflation rate",
      "interest rate",
      "wage rate",
      "monetary index"
    ], 1),
    q("If you are anticipating having to pay $100,000 to a lender 10 years from now and the interest rate rises, the present value of this sum", [
      "falls.",
      "rises.",
      "remains unchanged.",
      "first rises, then falls."
    ], 0),
    q("If you have a business opportunity that is pretty much a sure thing that will require you to borrow $1,000,000, but will return to you $200,000 a year in profit for ten years, this is", [
      "a wise investment regardless of interest rates.",
      "an unwise investment regardless of interest rates.",
      "an investment which depends on the interest rate that must be paid on the loan.",
      "an investment which will be more attractive when the interest rate is high."
    ], 2),
    q("If your grandmother gives you a high school graduation gift of $5,000, and you do not spend the gift, but invest it to earn an interest rate of 6% per year compounded annually, upon your graduation from college after exactly four years, your gift will be worth", [
      "$5,000.",
      "$5,000 x (1.06)4.",
      "$5,000 / (1.04)4.",
      "$5,000 / (1+.24)."
    ], 1),
    q("Suppose your grandmother told you (today) that she had set aside an amount of money in a savings account bearing 3% interest that was sufficient to give you a $5,000 graduation present in exactly four years. How much would she have had to set aside?", [
      "$5,000",
      "$5,000 x (1.03)4",
      "$5,000 / (1.03)4",
      "$5,000 / (1+.034)"
    ], 2),
    q("The difference between the nominal rate of interest and the real rate of interest is the", [
      "interest rate.",
      "expected interest rate.",
      "expected rate of inflation.",
      "advertised interest rate."
    ], 2),
    q("If a business makes the determination that an investment makes sense at the current interest rate, but before they can act, the interest rates rises,", [
      "they will have to recalculate whether it still makes sense.",
      "it will only make the situation better, so they will clearly make the investment.",
      "it will cause them to not make the investment regardless of the increase.",
      "they will go ahead with the investment because interest rates have nothing to do with whether an investment makes sense."
    ], 0),
    q("If people (who used to neither borrow nor save) are now saving for their retirement, then this will cause the", [
      "supply for loanable funds to increase.",
      "demand for loanable funds to increase.",
      "supply for loanable funds to decrease.",
      "demand for loanable funds to decrease."
    ], 0),
    q("If the inflation rate is 3% and the nominal interest rate is 4%, then the real interest rate is around", [
      "1%.",
      "3%.",
      "7%.",
      "12%."
    ], 0),
    q("In the market for money, the price is", [
      "the interest rate.",
      "the wage rate.",
      "the exchange rate.",
      "the premium."
    ], 0),
    q("In a market for money,", [
      "borrowers are the suppliers and lenders are the consumers.",
      "borrowers are the consumers and lenders are the suppliers.",
      "both borrowers and lenders are the consumers.",
      "both borrowers and lenders are the suppliers."
    ], 1),
    q("Without money, society would", [
      "have no economy.",
      "have to resort to barter.",
      "have more efficient transactions.",
      "have more debt."
    ], 1),
    q("An increase in the interest rate will", [
      "increase the demand for money alone.",
      "decrease the demand for money and increase the supply of money.",
      "increase the demand for money and decrease the supply of money.",
      "change neither the demand nor the supply of money; rather it will only affect the quantity demanded and quantity supplied."
    ], 3),
    q("If the interest rate is positive, the present value of a stream of payments is", [
      "greater than the sum of the actual payments over time.",
      "less than the sum of the actual payments over time.",
      "equal to the sum of the actual payments over time.",
      "unrelated to the stream of actual payments over time."
    ], 1),
    q("Assuming that Figure 7.1 is a market for money that can be borrowed or saved, Box 3 is", [
      "\"$\" for the amount borrowed/saved.",
      "\"$*\" for the equilibrium amount borrowed/saved.",
      "\"r\" for interest rate.",
      "\"r*\" for equilibrium interest rate."
    ], 3, chapter9Figure),
    q("Assuming that Figure 7.1 is a market for money that can be borrowed or saved, Box 4 is", [
      "\"$\" for the amount borrowed/saved.",
      "\"$*\" for the equilibrium amount borrowed/saved.",
      "\"r\" for interest rate.",
      "\"r*\" for equilibrium interest rate."
    ], 1, chapter9Figure),
    q("If the inflation rate is 2% and the real interest rate is 1%, then the nominal interest rate is around", [
      "-1%.",
      "1%.",
      "2%.",
      "3%."
    ], 3),
    q("Using the Rule of 72, how long will it take something growing at 1% per year to double?", [
      "100 years",
      "72 years",
      "50 years",
      "720 years"
    ], 1),
    q("Using the Rule of 72, how long will it take something growing at 2% per year to double?", [
      "100 years",
      "50 years",
      "36 years",
      "144 years"
    ], 2)
  ];

  const chapter10Questions = [
    q("Open Market Operations refer to the buying and selling of", [
      "corporate equities.",
      "gold.",
      "government securities.",
      "commodities."
    ], 2),
    q("If the Federal Reserve wished to increase interest rates using open market operations, it would", [
      "buy US government securities.",
      "sell US government securities.",
      "buy gold.",
      "buy corporate stocks."
    ], 1),
    q("If the Federal Reserve wished to decrease interest rates using open market operations, it would", [
      "buy U.S. government securities.",
      "sell U.S. government securities.",
      "buy gold.",
      "buy corporate stocks."
    ], 0),
    q("Prior to 2003, the Federal Reserve charged the ________ when loaning money directly to banks, and thereby, to signal its intentions.", [
      "discount rate",
      "real interest rate",
      "exchange rate",
      "primary credit rate"
    ], 0),
    q("When the Federal Reserve loans money to banks, the rate it charges banks with excellent credit is the", [
      "real interest rate.",
      "discount rate.",
      "primary credit rate.",
      "exchange rate."
    ], 2),
    q("If the reserve ratio is .05, the money multiplier can be as high", [
      "as 50.",
      "as 20.",
      "as 10.",
      "as 5."
    ], 1),
    q("If the reserve ratio is .10, the money multiplier can be as high as", [
      "50.",
      "20.",
      "10.",
      "5."
    ], 2),
    q("If the reserve ratio is .02, the money multiplier can be as high as", [
      "50.",
      "20.",
      "10.",
      "5."
    ], 0),
    q("If the reserve ratio is .20, the money multiplier can be as high as", [
      "50.",
      "20.",
      "10.",
      "5."
    ], 3),
    q("The amount of money that a bank must keep on reserve at the Federal Reserve is the", [
      "reserve amount.",
      "reserve ratio.",
      "portfolio portion.",
      "cash reserve portion."
    ], 0),
    q("The money multiplier can be as ________ as the reciprocal of the reserve ratio but is usually ________.", [
      "high; lower",
      "high; constant",
      "low; higher",
      "low; constant"
    ], 0),
    q("Banks with excellent credit can borrow ________ from the Federal Reserve.", [
      "$1,000,000 per year",
      "$1,000,000 per day",
      "only an amount equal to their deposits",
      "an unlimited amount"
    ], 3),
    q("To signal its intention to restrict credit availability, the Federal Reserve could", [
      "increase the discount rate.",
      "push the discount rate below the Federal Funds rate.",
      "keep the discount rate equal to the Federal Funds rate.",
      "reduce the discount rate by 1/4 of a percentage point."
    ], 0),
    q("The primary credit rate refers to the rate at which", [
      "banks lend to one another to meet reserve requirements.",
      "the Federal Reserve charges banks (with excellent credit) for loans.",
      "banks lend to their best customers.",
      "None of these options are correct."
    ], 1),
    q("The primary credit rate is", [
      "determined directly by the Federal Reserve.",
      "determined by market forces but targeted by the Federal Reserve.",
      "determined by market forces alone, without Federal Reserve influence.",
      "determined by Congress."
    ], 0),
    q("The Federal Funds rate is", [
      "directly determined by the Federal Reserve.",
      "determined by market forces but targeted by the Federal Reserve.",
      "determined by market forces alone, without Federal Reserve influence.",
      "determined by Congress."
    ], 1),
    q("The reserve ratio is", [
      "the percentage of every dollar deposited in a checking account that a bank must maintain in reserves.",
      "the percentage of every dollar deposited in a checking account that a bank may loan out.",
      "the ratio of loans to available reserves.",
      "the ratio of available reserves to loans made."
    ], 0),
    q("With a reserve ratio of 10%, the banking system can create ________ with each dollar of deposits.", [
      "$1",
      "$2",
      "$5",
      "$10"
    ], 3),
    q("The institution that governs monetary policy is", [
      "the Congress.",
      "the President.",
      "the Treasury Department.",
      "the Federal Reserve."
    ], 3),
    q("The Federal Reserve has", [
      "direct control over macroeconomic variables, such as unemployment and inflation.",
      "indirect influence over macroeconomic variables, such as unemployment and inflation through the use of intermediate targets.",
      "no control or influence over any significant macroeconomic variables.",
      "oversight on issues of the environment."
    ], 1),
    q("The target for the Federal Reserve is", [
      "the Federal Funds rate, though it has been a monetary aggregate.",
      "and always has been a monetary aggregate.",
      "and always has been the Federal Funds rate.",
      "and always has been inflation."
    ], 0),
    q("The Federal Open Market Committee", [
      "decides what mortgage interest rates will be.",
      "decides what the Federal Funds rate target will be.",
      "submits recommendations on Federal Funds Rates to Congress.",
      "submits recommendations on Federal Funds Rates to the President."
    ], 1),
    q("The ________ decides monetary policy.", [
      "chairperson of the Federal Reserve Board",
      "Federal Open Market Committee",
      "President",
      "Congress"
    ], 1),
    q("Between 2001 and 2003, the Federal Reserve cut interest rates 12 times. This is an example of", [
      "discretionary fiscal policy.",
      "nondiscretionary fiscal policy.",
      "expansionary monetary policy.",
      "contractionary monetary policy."
    ], 2),
    q("Between 2004 and 2005, the Federal Reserve raised interest rates 11 times. This is an example of", [
      "discretionary fiscal policy.",
      "nondiscretionary fiscal policy.",
      "expansionary monetary policy.",
      "contractionary monetary policy."
    ], 3),
    q("Which of the following would likely have the greatest effect on the banking system and its ability to loan money?", [
      "A change in the target for the federal funds rate by .25 percentage points.",
      "A change in the discount rate by .25 percentage points.",
      "The purchase of $1,000,000 of federal debt.",
      "A change in the reserve ratio by 5 percentage points."
    ], 3),
    q("During 2003, the Federal Reserve began to openly discuss deflation. Their comments suggested they", [
      "were enthusiastic about the possibility.",
      "were neutral about whether deflation would be a good thing.",
      "knew it was something to watch because of the Japanese experience of the 1990s, but did not alter policy significantly to combat it.",
      "knew it would be a disaster, so they immediately cut the target federal funds rate by 5 percentage points to avoid the possibility."
    ], 2),
    q("From the early 1980's through 2000, the Federal Reserve's primary focus was on", [
      "ensuring rapid growth.",
      "controlled inflation and stable growth.",
      "stable employment through monetary expansion.",
      "keeping gold prices stable."
    ], 1),
    q("One factor limiting the Federal Reserve's ability to use monetary policy to stimulate the economy is that the Federal Reserve has", [
      "no tools at its disposal to lower interest rates.",
      "tools to lower interest rates, but they do not work at interest rates above 10%.",
      "tools to lower interest rates, but they do not work at interest rates below 10%.",
      "tools to lower interest rates, but they do not work at interest rates below 0%."
    ], 3),
    q("In 2003, the Federal Reserve had used its control over the federal funds rate to such a degree that", [
      "the federal funds rate was the highest it had been in 15 years.",
      "the federal funds rate was driven below zero.",
      "the federal funds rate was the lowest it had been in 15 years.",
      "Congress stripped the Federal Reserve of this authority."
    ], 2),
    q("If money is moved from a consumer checking account into a consumer savings account,", [
      "M1 and M2 both increase.",
      "M1 increases and M2 decreases.",
      "M1 decreases and M2 remains unchanged.",
      "M1 and M2 both remain unchanged."
    ], 2),
    q("If money is moved from a consumer savings account into a consumer checking account,", [
      "M1 and M2 both decrease.",
      "M1 increases and M2 remains unchanged.",
      "M1 decreases and M2 increases.",
      "M1 and M2 both increase."
    ], 1),
    q("The fundamental objective of monetary policy is to assist the economy in achieving:", [
      "A rapid pace of economic growth",
      "A money supply which is based on the gold standard",
      "A full-employment, noninflationary level of total output",
      "A balanced-budget consistent with full-employment"
    ], 2),
    q("The traditional tools of monetary policy", [
      "seek to influence an \"intermediate\" target variable.",
      "directly impact the economy.",
      "can only be utilized after obtaining the approval of Congress.",
      "rely heavily upon changes in individual income tax rates."
    ], 0),
    q("If the Fed wants banks to have more money to lend, it can", [
      "raise its discount rate.",
      "sell government securities.",
      "raise the reserve ratio.",
      "lower the reserve ratio."
    ], 3),
    q("The \"monetary policy transmission mechanism\" connects", [
      "individual income tax rates to aggregate demand.",
      "individual income tax rates to aggregate supply.",
      "short-term interest rates to aggregate demand.",
      "open market purchases to the Fed's balance sheet."
    ], 2),
    q("The Federal Reserve alters the amount of the nation's money supply by:", [
      "Reducing the liabilities of the banking system",
      "Controlling the assets of the nation's largest banks",
      "Minting coins and printing currency that is distributed to banks",
      "Manipulating the size of excess reserves held by commercial banks"
    ], 3),
    q("If interest rates near zero fail to stimulate borrowing, the economy is in a", [
      "money pit.",
      "liquidity trap.",
      "hyperinflation.",
      "housing bubble."
    ], 1),
    q("A commercial bank has checkable-deposit liabilities of $500,000, reserves of $150,000, and a required reserve ratio of 20 percent. The amount by which a single commercial bank and the amount by which the banking system can increase loans are respectively:", [
      "$30,000 and $150,000",
      "$50,000 and $250,000",
      "$50,000 and $500,000",
      "$100,000 and $500,000"
    ], 1),
    q("Which of the following is the most accurate description of events when monetary authorities increase the size of commercial banks' excess reserves?", [
      "A fall in interest rates decreases the money supply, causing an increase in investment spending, output, and employment",
      "A rise in interest rates increases the money supply, causing a decrease in investment spending, output, and employment",
      "The money supply is decreased, which increases the interest rate, and causes investment spending, output, and employment to decrease",
      "The money supply is increased, which decreases the interest rate, and causes investment spending, output, and employment to increase"
    ], 3),
    q("The evidence is that central bank decision makers", [
      "should be elected.",
      "should have Congress dictate their actions to them.",
      "should be independent of and insulated from political pressures.",
      "are corrupt."
    ], 2),
    q("Central banks around the world that are ________ are most effective.", [
      "independent of political influence",
      "controlled by political parties",
      "run by those elected by popular vote",
      "run by those appointed for life"
    ], 0),
    q("Central banks around the world that are ________ are least effective.", [
      "independent of political influence",
      "subject to directives from elected (or dictatorial) officials",
      "run by those appointed by elected officials",
      "run by those appointed for extended terms"
    ], 1),
    q("The Federal Reserve, the Bank of England, the European Central Bank, and the Bank of Japan are largely", [
      "independent of political influence.",
      "controlled by political parties.",
      "corrupt.",
      "run by those appointed for life."
    ], 0),
    q("A common criticism of central banks in developing nations led by despotic dictatorships is that they lack", [
      "independence of political influence.",
      "control by political parties.",
      "corruption.",
      "an understanding of economics."
    ], 0)
  ];

  window.finalBuiltInChapters = [
    {
      id: "final-gdp-business-cycle-unemployment-inflation",
      kicker: "Final Chapter 6",
      title: "GDP, Business Cycle, Unemployment and Inflation",
      subtitle: "All review questions with correct answers",
      questions: chapter6Questions
    },
    {
      id: "final-ad-as",
      kicker: "Final Chapter 7",
      title: "Aggregate Demand and Aggregate Supply",
      subtitle: "All review questions with correct answers",
      questions: chapter7Questions
    },
    {
      id: "final-fiscal-policy",
      kicker: "Final Chapter 8",
      title: "Fiscal Policy",
      subtitle: "All review questions with correct answers",
      questions: chapter8Questions
    },
    {
      id: "final-money-interest-present-value",
      kicker: "Final Chapter 9",
      title: "Money, Interest Rates and Present Value",
      subtitle: "All review questions with correct answers",
      questions: chapter9Questions
    },
    {
      id: "final-monetary-policy",
      kicker: "Final Chapter 10",
      title: "Monetary Policy",
      subtitle: "All review questions with correct answers",
      questions: chapter10Questions
    }
  ];
})();
