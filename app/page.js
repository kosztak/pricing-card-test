import PricingCard from "@/components/PricingCard";
import { getBenefits, getPlans } from "@/database/methods";

export default async function Home() {
  // get gata from firebase database
  const plans = await getPlans();
  const benefits = await getBenefits();
  
  return (
    <div className="flex gap-[50px]">
      {
        plans.map(plan => <PricingCard key={plan.type} plan={plan} benefits={benefits} />)
      }
    </div>
  );
}
