(() => {
  const chapter4Table1 = {
    caption: "Table 4.1",
    headers: ["Output", "Total Fixed Costs", "Total Variable Cost", "Total Cost"],
    rows: [
      ["0", "$100", "$0", "Box E"],
      ["1", "Box A", "$10", "Box F"],
      ["2", "Box B", "$15", "Box G"],
      ["3", "Box C", "$25", "Box H"],
      ["4", "Box D", "$50", "Box I"]
    ]
  };

  const chapter4Table2 = {
    caption: "Table 4.2",
    headers: ["Output", "Total Variable Cost", "Total Cost", "Marginal Cost", "Average Variable Cost", "Average Total Cost"],
    rows: [
      ["0", "$0", "$10", "Box A", "Box G", "Box M"],
      ["1", "$10", "$20", "Box B", "Box H", "Box N"],
      ["2", "$15", "$25", "Box C", "Box I", "Box O"],
      ["3", "$17", "$27", "Box D", "Box J", "Box P"],
      ["4", "$20", "$30", "Box E", "Box K", "Box Q"],
      ["5", "$30", "$40", "Box F", "Box L", "Box R"]
    ]
  };

  window.extraBuiltInChapters = [
    {
      id: "elasticity-applications",
      kicker: "Chapter 3",
      title: "Elasticity",
      subtitle: "Demand and Supply Applications",
      questions: [
        {
          text: "In Figure 3.1, which figure shows a situation that is perfectly elastic?",
          image: "assets/ch3-image1.jpeg",
          imageAlt: "Figure 3.1 showing four demand curves, including a horizontal demand curve in Figure 1.",
          caption: "Figure 3.1",
          options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
          answer: 0,
          explanation: "Perfect elasticity is shown by a horizontal demand curve."
        },
        {
          text: "If the price of a good increases by 10% and the quantity demanded decreases by 5%, then at that price, the good is",
          options: ["elastic.", "inelastic.", "perfectly inelastic.", "perfectly elastic."],
          answer: 1,
          explanation: "The quantity response is smaller than the price change, so demand is inelastic."
        },
        {
          text: "If the price of a good increases by 10% and the quantity demanded decreases by 10%, then at that price, the good is",
          options: ["elastic.", "inelastic.", "perfectly inelastic.", "unit elastic."],
          answer: 3,
          explanation: "Equal percentage changes in price and quantity mean unit elasticity."
        },
        {
          text: "If the price of a good increases by 10% and the quantity demanded remains unchanged, then at that price, the good is",
          options: ["elastic.", "inelastic.", "perfectly inelastic.", "perfectly elastic."],
          answer: 2,
          explanation: "Quantity does not respond to price, which is perfectly inelastic demand."
        },
        {
          text: "Which of the following is true?",
          options: [
            "On a linear demand curve, the higher the price, the more elastic is demand.",
            "On a linear demand curve, elasticity is constant.",
            "At the same price, demand is more elastic on the steeper demand curve.",
            "None are true."
          ],
          answer: 0,
          explanation: "Elasticity varies along a linear demand curve and is higher at higher prices."
        },
        {
          text: "Which of the following is true?",
          options: [
            "On a linear demand curve, the higher the price, the less elastic is demand.",
            "On a linear demand curve, elasticity is constant.",
            "At the same price, demand is less elastic on the steeper demand curve.",
            "All are true."
          ],
          answer: 2,
          explanation: "At the same price, a steeper demand curve has a smaller quantity response."
        },
        {
          text: "If the price of a good falls by 10% and the percentage increase in the total amount consumers spend on the good is 10%, then the good is",
          options: ["elastic.", "inelastic.", "unit elastic.", "perfectly inelastic."],
          answer: 0,
          explanation: "When a price cut raises total spending, quantity is responding elastically."
        },
        {
          text: "If the price falls and the total amount consumers spend on the good remains unchanged, then demand must be",
          options: ["elastic.", "inelastic.", "perfectly inelastic.", "unit elastic."],
          answer: 3,
          explanation: "Total revenue stays constant when demand is unit elastic."
        },
        {
          text: "Suppose a firm cannot figure out whether the demand for the good it sells is elastic or inelastic but discovers that every time it raises its price, its total revenue declines. Their",
          options: ["demand is unit elastic.", "demand is inelastic.", "demand is elastic.", "demand is perfectly inelastic."],
          answer: 2,
          explanation: "If a price increase reduces total revenue, demand is elastic."
        },
        {
          text: "For a given decrease in supply, the condition of demand that will result in no change in price is when demand is",
          options: ["elastic.", "inelastic.", "perfectly elastic.", "perfectly inelastic."],
          answer: 2,
          explanation: "A perfectly elastic demand curve is horizontal, so the price does not change."
        },
        {
          text: "For a given decrease in supply, the condition of demand that will result in the most significant change in quantity is when demand is",
          options: ["elastic.", "inelastic.", "perfectly elastic.", "perfectly inelastic."],
          answer: 2,
          explanation: "With perfectly elastic demand, the price stays fixed and the quantity absorbs the adjustment."
        },
        {
          text: "A decrease in demand will decrease prices most when supply is",
          options: ["elastic.", "unit elastic.", "inelastic (but not perfectly inelastic).", "perfectly inelastic."],
          answer: 3,
          explanation: "The more vertical supply is, the more a demand shift shows up as a price change."
        },
        {
          text: "Because most people spend a very small fraction of the income on tap water, it is likely to be",
          options: ["elastic.", "inelastic.", "perfectly elastic.", "unit elastic."],
          answer: 1,
          explanation: "Goods that take a small share of income tend to have inelastic demand."
        },
        {
          text: "A good like water has few substitutes and takes up little of our income to purchase. As a result, its demand is likely to be",
          options: ["elastic.", "perfectly elastic.", "inelastic.", "unit elastic."],
          answer: 2,
          explanation: "Few substitutes and a small budget share both make demand less responsive."
        },
        {
          text: "Suppose a new law makes illegal the sale of a good that had been legal. This will",
          options: ["increase consumer surplus.", "increase producer surplus.", "decrease producer surplus.", "eliminate deadweight loss."],
          answer: 2,
          explanation: "Producers lose surplus when they can no longer legally sell the good."
        },
        {
          text: "An increase in supply will always",
          options: ["increase producer surplus.", "decrease consumer surplus.", "decrease producer surplus.", "increase consumer surplus."],
          answer: 0,
          explanation: "An increase in supply raises producer surplus."
        },
        {
          text: "If the percentage change in quantity supplied is 5%, and the percentage change in price is 10%, then the supply for the good is",
          options: ["elastic.", "inelastic.", "unit elastic.", "perfectly inelastic."],
          answer: 1,
          explanation: "Supply elasticity is 5% divided by 10%, which is less than 1."
        },
        {
          text: "If there is no change in price that can alter the quantity supplied, then the supply for the good is",
          options: ["perfectly elastic.", "inelastic.", "perfectly unit elastic.", "perfectly inelastic."],
          answer: 3,
          explanation: "A fixed quantity supplied at every price is perfectly inelastic supply."
        },
        {
          text: "If there is no change in demand that will cause a change in the price, then the supply for the good is",
          options: ["perfectly elastic.", "inelastic.", "perfectly unit elastic.", "perfectly inelastic."],
          answer: 0,
          explanation: "A perfectly elastic supply curve is horizontal, so demand changes affect quantity, not price."
        },
        {
          text: "In Figure 3.2, what is the variable cost to the producer?",
          image: "assets/ch3-image2.jpeg",
          imageAlt: "Figure 3.2 supply and demand diagram with equilibrium point C at price P* and quantity Q*.",
          caption: "Figure 3.2",
          options: ["0PCQ*", "0BCQ*", "P*AC", "BP*C"],
          answer: 1,
          explanation: "Variable cost is the area under the supply curve up to Q*."
        },
        {
          text: "In Figure 3.2, what is the money the consumer pays the producer?",
          image: "assets/ch3-image2.jpeg",
          imageAlt: "Figure 3.2 supply and demand diagram with equilibrium point C at price P* and quantity Q*.",
          caption: "Figure 3.2",
          options: ["0P*CQ*", "0ACQ*", "P*AC", "BP*C"],
          answer: 0,
          explanation: "Total payment is price times quantity, the rectangle 0P*CQ*."
        },
        {
          text: "Without a belief that the market has failed, which of the following will result in deadweight loss?",
          options: ["a price below equilibrium", "a price at equilibrium", "a price above equilibrium", "a price below or above equilibrium"],
          answer: 3,
          explanation: "Either a binding price floor or a binding price ceiling prevents the efficient equilibrium quantity."
        },
        {
          text: "The fact that the demand for luxury cars is elastic is not surprising because",
          options: [
            "the supply of luxury cars is inelastic.",
            "there are few substitutes for true luxury cars.",
            "luxury cars are primarily a \"status symbol\".",
            "luxury cars are relatively expensive."
          ],
          answer: 3,
          explanation: "Goods that take a large share of income tend to have more elastic demand."
        },
        {
          text: "The difference between the value of a product enjoyed by consumers and the total variable costs incurred by producers in a competitive market for that product is",
          options: [
            "producer surplus.",
            "consumer surplus.",
            "the sum of consumer surplus and producer surplus.",
            "the difference between consumer surplus and producer surplus."
          ],
          answer: 2,
          explanation: "Total surplus is the value to consumers minus producers' variable costs."
        },
        {
          text: "The demand for electricity is more elastic in the long run than in the short run because",
          options: [
            "more electricity can be produced in the long run.",
            "consumers can shift to more efficient electrical appliances in the long run.",
            "government regulation of electricity producers is most effective in the long run.",
            "solar energy will eventually replace electricity in the long run."
          ],
          answer: 1,
          explanation: "Over time consumers have more ways to adjust electricity use."
        }
      ]
    },
    {
      id: "production-costs",
      kicker: "Chapter 4",
      title: "Production Costs",
      subtitle: "Production and the Costs of Production",
      questions: [
        {
          text: "Suppose you have a firm in which the owner pays $10,000 per month on rent of the plant and equipment and will pay that regardless of much output they produce. If they get going they need $10 in materials and $20 in labor for each unit they produce,",
          options: [
            "their variable costs are $10,000 plus $10 per unit.",
            "their fixed costs are $10,000 and variable costs are $20 per unit.",
            "their fixed costs are $10,000 and variable costs are $30 per unit.",
            "their fixed costs are $10,000 and $10 per unit."
          ],
          answer: 2,
          explanation: "Rent is fixed; materials plus labor are $30 in variable cost per unit."
        },
        {
          text: "Average Fixed Cost is",
          options: [
            "the addition to cost associated with one additional unit of output.",
            "the per unit cost of production.",
            "the per unit variable cost of production.",
            "the per unit fixed cost of production."
          ],
          answer: 3,
          explanation: "Average fixed cost is total fixed cost divided by output."
        },
        {
          text: "Which of the following algebraic expressions is inaccurate?",
          options: ["TC=TVC+TFC", "ATC=AFC+AVC", "MC=ATC-AVC", "AFC=ATC-AVC"],
          answer: 2,
          explanation: "ATC minus AVC equals AFC, not marginal cost."
        },
        {
          text: "Marginal Cost is",
          options: [
            "the addition to cost associated with one additional unit of output.",
            "the per unit cost of production.",
            "the per unit variable cost of production.",
            "the per unit fixed cost of production."
          ],
          answer: 0,
          explanation: "Marginal cost is the extra cost of producing one more unit."
        },
        {
          text: "Average Total Cost is",
          options: [
            "the addition to cost associated with one additional unit of output.",
            "the per unit cost of production.",
            "the per unit variable cost of production.",
            "the per unit fixed cost of production."
          ],
          answer: 1,
          explanation: "Average total cost is total cost divided by output."
        },
        {
          text: "Referring to Table 4.1, Box A should be filled with",
          table: chapter4Table1,
          options: ["$0.", "$10.", "$100.", "$200."],
          answer: 2,
          explanation: "Total fixed cost remains $100 at every output level."
        },
        {
          text: "Referring to Table 4.1, Box E should be filled with",
          table: chapter4Table1,
          options: ["$0.", "$10.", "$100.", "$200."],
          answer: 2,
          explanation: "At zero output, total cost equals fixed cost: $100."
        },
        {
          text: "Referring to Table 4.1, Box G should be filled with",
          table: chapter4Table1,
          options: ["$0.", "$110.", "$115.", "$125."],
          answer: 2,
          explanation: "Total cost is fixed cost plus variable cost: $100 + $15 = $115."
        },
        {
          text: "Referring to Table 4.2, Box A should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$10.", "$20.", "Nothing"],
          answer: 3,
          explanation: "Marginal cost for the first listed row is undefined because there is no prior output level."
        },
        {
          text: "Referring to Table 4.2, Box B should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$10.", "$20.", "$30."],
          answer: 1,
          explanation: "Total cost rises from $10 to $20, so marginal cost is $10."
        },
        {
          text: "Referring to Table 4.2, Box C should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$5.", "$1.", "$2."],
          answer: 1,
          explanation: "Total cost rises from $20 to $25, so marginal cost is $5."
        },
        {
          text: "Referring to Table 4.2, Box G should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$10.", "$20.", "Undefined."],
          answer: 3,
          explanation: "Average variable cost at zero output is undefined because it requires division by zero."
        },
        {
          text: "Referring to Table 4.2, Box H should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$10.", "$20.", "$30."],
          answer: 1,
          explanation: "Average variable cost is $10 divided by 1, or $10."
        },
        {
          text: "Referring to Table 4.2, Box N should be filled with",
          table: chapter4Table2,
          options: ["$0.", "$10.", "$20.", "$30."],
          answer: 2,
          explanation: "Average total cost is $20 divided by 1, or $20."
        },
        {
          text: "Supposing a firm is a price taker, the demand for that firm's product is",
          options: [
            "flat line at the market price.",
            "a downward sloping line with the negative of the market price as its slope.",
            "an upward sloping line with the market price as the slope.",
            "parabolic."
          ],
          answer: 0,
          explanation: "A price-taking firm can sell all it wants at the market price."
        },
        {
          text: "Supposing the market price for a price taking firm is known to be $5, the total revenue accruing to it if it sells 100 is ________ and the total revenue accruing to it if it sells 200 is ________.",
          options: ["$5; $5", "$100; $200", "$500; $1,000", "$500; $500"],
          answer: 2,
          explanation: "Total revenue equals price times quantity."
        },
        {
          text: "If the price is less than the average variable cost, then",
          options: [
            "the loss the firm makes from shutting down (its TFC) is less than the loss they make as a result of producing.",
            "the loss the firm makes from shutting down (its TFC) is greater than the loss they make as a result of producing.",
            "the firm should produce where MC=MR.",
            "the firm should produce where AVC is minimized."
          ],
          answer: 0,
          explanation: "When price is below AVC, producing adds to the loss, so shutdown loses less."
        },
        {
          text: "If the price is greater than the average variable cost, the firm should produce",
          options: [
            "the loss the firm makes from shutting down (its TFC) is less than the loss they make as a result of producing.",
            "the loss the firm makes from shutting down (its TFC) is greater than the loss they make as a result of producing.",
            "where MC=MR.",
            "where AVC is minimized."
          ],
          answer: 2,
          explanation: "A firm that covers AVC should produce where marginal cost equals marginal revenue."
        },
        {
          text: "If a firm can increase output by hiring more workers, then",
          options: [
            "it will always do so.",
            "it will never do so.",
            "it will do so only if the cost of hiring the workers (and purchasing the materials) is less than the increase in revenues associated with the increase in sales.",
            "it will do so only if the cost of hiring the workers (and purchasing the materials) is more than the increase in revenues associated with the increase in sales."
          ],
          answer: 2,
          explanation: "The firm expands output when marginal revenue exceeds the added cost."
        },
        {
          text: "When a firm shuts down because the market price of its product is less than the average variable cost of producing that product, the loss it suffers is",
          options: [
            "equal to its total revenue.",
            "equal to its total variable cost.",
            "equal to zero.",
            "less than the loss it would earn from continuing to operate."
          ],
          answer: 3,
          explanation: "Shutting down avoids variable losses, so the shutdown loss is smaller than operating at P below AVC."
        },
        {
          text: "If a firm's marginal cost is greater than its average total cost, its average total cost is",
          options: ["increasing.", "constant.", "decreasing.", "not U-shaped."],
          answer: 0,
          explanation: "When marginal cost is above average total cost, it pulls the average up."
        },
        {
          text: "If a firm's marginal cost is smaller than its average total cost, its average total cost is",
          options: ["increasing.", "constant.", "decreasing.", "not U-shaped."],
          answer: 2,
          explanation: "When marginal cost is below average total cost, it pulls the average down."
        },
        {
          text: "If a firm's average total cost is at its minimum possible value, its marginal cost is",
          options: ["constant.", "equal to its average total cost.", "decreasing.", "not U-shaped."],
          answer: 1,
          explanation: "Marginal cost crosses average total cost at the minimum of average total cost."
        },
        {
          text: "If the total cost of producing 19 wizzbies is $38,000 and the total cost of producing 20 wizzbies is $39,000, the marginal cost of producing the 20th wizzbie is approximately",
          options: ["$1,000.", "$2,000.", "$19,000.", "$38,000."],
          answer: 0,
          explanation: "Marginal cost is the change in total cost: $39,000 - $38,000 = $1,000."
        }
      ]
    },
    {
      id: "competition-monopoly-imperfect",
      kicker: "Chapters 5-6",
      title: "Competition and Monopoly",
      subtitle: "Virtues, Vices, and Imperfect Competition",
      questions: [
        {
          text: "In Figure 5.1, what output would a perfect competitor produce?",
          image: "assets/ch5-image1.jpeg",
          imageAlt: "Figure 5.1 firm cost curves with MR crossing MC.",
          caption: "Figure 5.1",
          options: ["Q1", "Q2", "Q3", "Q4"],
          answer: 1,
          explanation: "A perfect competitor produces where MR equals MC; in the figure that output is Q2."
        },
        {
          text: "In Figure 5.3, what output would a perfect competitor produce?",
          image: "assets/ch5-image2.jpeg",
          imageAlt: "Figure 5.3 firm cost curves with price below average variable cost.",
          caption: "Figure 5.3",
          options: ["Q1", "Q2", "Q3", "0"],
          answer: 3,
          explanation: "Price is below AVC, so the firm shuts down."
        },
        {
          text: "In Figure 5.4, a monopolist would charge which price?",
          image: "assets/ch5-image3.jpeg",
          imageAlt: "Figure 5.4 monopoly demand, marginal revenue, and cost curves.",
          caption: "Figure 5.4",
          options: ["P1", "P2", "P3", "P4"],
          answer: 3,
          explanation: "The monopolist chooses Q* from MR=MC and then charges the demand-curve price, P4."
        },
        {
          text: "In Figure 5.5, a monopolist would charge which price?",
          image: "assets/ch5-image4.jpeg",
          imageAlt: "Figure 5.5 monopoly demand, marginal revenue, and cost curves.",
          caption: "Figure 5.5",
          options: ["P1", "P2", "P3", "P4"],
          answer: 2,
          explanation: "At Q*, the demand curve indicates price P3."
        },
        {
          text: "In Figure 5.6, a monopolist would charge which price?",
          image: "assets/ch5-image5.jpeg",
          imageAlt: "Figure 5.6 monopoly demand, marginal revenue, and cost curves.",
          caption: "Figure 5.6",
          options: ["The monopolist would shut down, so no price would be charged.", "P2", "P3", "P4"],
          answer: 0,
          explanation: "The monopolist would shut down in this case, so no price would be charged."
        },
        {
          text: "Which of the following is not an assumption of perfect competition?",
          options: ["Branded products", "Many buyers", "Many sellers", "Identical (or indistinguishable) products"],
          answer: 0,
          explanation: "Perfect competition assumes identical products, not branded differentiation."
        },
        {
          text: "A firm that has a branded product is",
          options: ["likely in perfect competition.", "not likely to be in perfect competition.", "always in perfect competition.", "always a price taker."],
          answer: 1,
          explanation: "Branding differentiates a product, which conflicts with perfect competition."
        },
        {
          text: "The typical firm in perfect competition is",
          options: ["an airline.", "a farm.", "a fast food restaurant chain.", "an electrical power company."],
          answer: 1,
          explanation: "Farms are a common example because many producers sell similar products."
        },
        {
          text: "The key difference(s) between perfect competition and monopolistic competition is",
          options: [
            "the products sold are slightly different in perfect competition.",
            "the products sold are slightly different in monopolistic competition.",
            "there is poor information about prices in perfect competition.",
            "there is poor information about prices in monopolistic competition."
          ],
          answer: 1,
          explanation: "Monopolistic competition features product differentiation."
        },
        {
          text: "The key difference(s) between monopoly and oligopoly is",
          options: [
            "that there are a few firms in oligopoly but only one firm in monopoly.",
            "there are no barriers to entry with oligopoly.",
            "there must be product differences in oligopoly.",
            "there are no differences between oligopoly and a monopoly."
          ],
          answer: 0,
          explanation: "A monopoly has one seller; an oligopoly has a few large sellers."
        },
        {
          text: "There are hundreds of local water companies, but economists insist that in each community they are ________ because consumers have no other choices in the local market in which they live.",
          options: ["perfect competition", "monopolistic competition", "oligopoly", "monopoly"],
          answer: 3,
          explanation: "Each local water company is the only provider in its local market."
        },
        {
          text: "Suppose ten companies begin introducing new genetically engineered apples. Each has their own distinctive taste and brand name. This market would be described by",
          options: ["perfect competition.", "monopolistic competition.", "oligopoly.", "monopoly."],
          answer: 1,
          explanation: "The products are differentiated by taste and brand name."
        },
        {
          text: "In Figure 5.7, assuming perfect competition, which price(s) is associated with a loss?",
          image: "assets/ch5-image6.jpeg",
          imageAlt: "Figure 5.7 cost curves with horizontal marginal revenue levels MR1 through MR4.",
          caption: "Figure 5.7",
          options: ["MR1", "MR2", "MR3", "MR1 and MR2"],
          answer: 3,
          explanation: "At MR1 and MR2, price is below average total cost."
        },
        {
          text: "In Figure 5.7, assuming perfect competition, which price is associated with profit being exactly normal?",
          image: "assets/ch5-image6.jpeg",
          imageAlt: "Figure 5.7 cost curves with horizontal marginal revenue levels MR1 through MR4.",
          caption: "Figure 5.7",
          options: ["MR1", "MR2", "MR3", "MR4"],
          answer: 2,
          explanation: "Normal profit occurs where price equals average total cost."
        },
        {
          text: "In Figure 5.7, assuming perfect competition, which price is associated with positive economic profit?",
          image: "assets/ch5-image6.jpeg",
          imageAlt: "Figure 5.7 cost curves with horizontal marginal revenue levels MR1 through MR4.",
          caption: "Figure 5.7",
          options: ["MR1", "MR2", "MR3", "MR4"],
          answer: 3,
          explanation: "MR4 lies above average total cost at the profit-maximizing output."
        },
        {
          text: "In Figure 5.7, assuming perfect competition, at MR3 there will be",
          image: "assets/ch5-image6.jpeg",
          imageAlt: "Figure 5.7 cost curves with horizontal marginal revenue levels MR1 through MR4.",
          caption: "Figure 5.7",
          options: [
            "short-run pressure on the price to rise.",
            "long-run pressure on the price to rise.",
            "no pressure on the price to change.",
            "short and long-run pressure on the price to rise."
          ],
          answer: 2,
          explanation: "At normal profit, firms have no incentive to enter or leave."
        },
        {
          text: "In Figure 5.7, assuming perfect competition, at MR4 there will be",
          image: "assets/ch5-image6.jpeg",
          imageAlt: "Figure 5.7 cost curves with horizontal marginal revenue levels MR1 through MR4.",
          caption: "Figure 5.7",
          options: [
            "short-run pressure on the price to fall.",
            "long-run pressure on the price to fall.",
            "no pressure on the price to change.",
            "short and long-run pressure on the price to fall."
          ],
          answer: 3,
          explanation: "At MR4, positive economic profit creates downward pressure on price."
        },
        {
          text: "Under perfect competition, the supply curve is",
          options: [
            "the marginal cost curve for all price quantity combinations.",
            "the marginal cost curve, but only the portion that is downward sloping.",
            "the marginal cost curve, but only the portion that is upward sloping.",
            "the marginal cost curve, but only the portion that is above the minimum of average variable cost."
          ],
          answer: 3,
          explanation: "A competitive firm's short-run supply curve is MC above minimum AVC."
        },
        {
          text: "If a competitive firm routinely earns a larger profit than the \"normal profit\" for its industry,",
          options: [
            "the firm's owners are likely to withdraw from the industry in order to retire early.",
            "new firms are likely to enter the industry, pushing up the prevailing market price.",
            "new firms are likely to enter the industry, depressing the prevailing market price.",
            "the firm will continue to earn its \"normal profits\" far into the future."
          ],
          answer: 2,
          explanation: "Economic profit attracts entry, increasing market supply and lowering price."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S1 to S2,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making an economic profit to a loss.",
            "the firm will go from making normal profits to a loss."
          ],
          answer: 0,
          explanation: "The lower market price reduces, but does not eliminate, economic profit."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S1 to S3,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making an economic profit to a loss.",
            "the firm will go from making normal profits to a loss."
          ],
          answer: 1,
          explanation: "At S3, the corresponding price is where the firm earns normal profit."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S1 to S4,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making an economic profit to a loss but one that is not big enough to make it want to shutdown.",
            "the firm will go from making an economic profit to a loss that is big enough to make it want to shutdown."
          ],
          answer: 2,
          explanation: "At S4, price is below ATC but still above AVC, so the firm operates at a loss."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S1 to S5,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making an economic profit to a loss but one that is not big enough to make it want to shutdown.",
            "the firm will go from making an economic profit to a loss that is big enough to make it want to shutdown."
          ],
          answer: 3,
          explanation: "At S5, price is below AVC, so the firm would shut down."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S4 to S5,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making a loss to a bigger loss that is big enough to make it want to shutdown.",
            "the firm will go from making a loss to a bigger loss but one that is not big enough to make it want to shutdown."
          ],
          answer: 2,
          explanation: "The move from S4 to S5 drops price from an operating loss to a shutdown price."
        },
        {
          text: "In Figure 5.8, if the supply curve moves from S3 to S5,",
          image: "assets/ch5-image7.jpeg",
          imageAlt: "Figure 5.8 market supply shifts S1 through S5 and corresponding firm prices P1 through P5.",
          caption: "Figure 5.8",
          options: [
            "the firm will make a smaller economic profit than they used to.",
            "the firm will go from making an economic profit to a normal profit.",
            "the firm will go from making a normal profit to a loss but one that is not big enough to make it want to shutdown.",
            "the firm will go from making a normal profit to a loss that is big enough to make it want to shutdown."
          ],
          answer: 3,
          explanation: "The move from S3 to S5 takes the firm from normal profit to a price below AVC."
        }
      ]
    }
  ];
})();
