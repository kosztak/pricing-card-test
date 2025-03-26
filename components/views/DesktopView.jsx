import PricingCard from "../PricingCard";

export default function DesktopView({plans, benefits}) {
    return(
        <div className='flex gap-[50px]'>
            {
                plans.map(plan => <PricingCard key={plan.type} plan={plan} benefits={benefits} isDesktopView={true} />)
            }
        </div>
    )
}