import BenefitItem from "./BenefitItem";
import Button from "./ui/Button";

export default function PricingCard({ plan, benefits }) {
    function getTierColor() {
        switch (plan.type) {
            case 'free':
                return "bg-[#3A4F39]";
            case 'premium':
                return 'bg-[#F8D254]';
            case 'pro':
                return 'bg-[#A0CD9E]';
            default:
                return 'bg-[#fff]'
        }
    }

    return (
        <div className="mx-[25px]">
            {/* tier label */}
            <div className={`${getTierColor()} w-[169px] h-[35px] rounded-t-[8px] pl-[28px] py-[6px]`}>
                <p className="text-white font-text-b">{plan.type.toUpperCase()}</p>
            </div>
            {/* main section */}
            <div className="bg-white w-[327px] h-[381px] py-[32px] px-[16px] rounded-b-[8px] flex flex-col gap-[16px]">
                {/* pricing panel */}
                <div>
                    <p className="text-center font-menu-title">{plan.price}$</p>
                    <p className="text-center font-subtext">{plan.duration}</p>
                </div>
                {/* aviable benefits list */}
                <div>
                    {
                        benefits.map((benefit, index) =>
                            <BenefitItem key={benefit} text={benefit} hasBenefit={plan.benefits[index]} hasBackground={index % 2 !== 0} />
                        )
                    }
                </div>
                <Button>Try now</Button>
            </div>
        </div>
    )
}