import BenefitItem from "./BenefitItem";
import Button from "./ui/Button";

export default function PricingCard({ plan, benefits }) {
    function getTierColor() {
        switch (plan.type) {
            case 'free':
                return "bg-dark-green";
            case 'premium':
                return 'bg-yellow';
            case 'pro':
                return 'bg-green';
            default:
                return 'bg-forground';
        }
    }

    return (
        <div className='h-full flex flex-col'>
            {/* tier label */}
            <div className={`${getTierColor()} w-[60%] rounded-t-[8px] pl-[28px] py-[6px]`}>
                <p className="text-white font-semibold">{plan.type.toUpperCase()}</p>
            </div>
            {/* main section */}
            <div className="bg-white py-[32px] px-[16px] rounded-b-[8px] flex flex-col gap-[16px] grow">
                {/* pricing panel */}
                <div>
                    <p className="text-center font-semibold text-[32px]">{plan.price}$</p>
                    <p className="text-center font-subtext text-xs">{plan.duration}</p>
                </div>
                {/* aviable benefits list */}
                <div className="my-auto">
                    {
                        benefits.map((benefit, index) =>
                            <BenefitItem key={benefit} text={benefit} hasBenefit={plan.benefits[index]} hasBackground={index % 2 === 0} />
                        )
                    }
                </div>
                <Button>Try now</Button>
            </div>
        </div>
    )
}