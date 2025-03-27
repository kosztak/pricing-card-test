import CardsPanel from "@/components/CardsPanel";

import { getBenefits, getPlans } from "@/database/methods";

export default async function Home() {
  // get gata from firebase database
  //const plans = await getPlans();
  //const benefits = await getBenefits();
  const plans = [
    {
      type: 'free',
      price: 0,
      duration: 'per month',
      benefits: [
        true,
        false,
        false
      ]
    },
    {
      type: 'premium',
      price: 99,
      duration: 'per month',
      benefits: [
        true,
        true,
        false
      ]
    },
    {
      type: 'pro',
      price: 199,
      duration: 'per month',
      benefits: [
        true,
        true,
        true
      ]
    },
  ];

  const benefits = [
    'PNG fsdfs',
    'Figma afasdfs',
    'dfsdgffs'
  ]

  return (
    <CardsPanel plans={plans} benefits={benefits} />
  );
}
