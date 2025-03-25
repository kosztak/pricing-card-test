import { getBenefits, getPlans } from "@/database/methods";

export default async function Home() {
  // get gata from firebase database
  const plans = await getPlans();
  const benefits = await getBenefits();
  
  return (
    <div className="">

    </div>
  );
}
