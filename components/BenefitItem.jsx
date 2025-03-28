import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";


export default function BenefitItem({ text, hasBenefit, hasBackground }) {
    return(
        <div className={`px-[16px] py-[12px] rounded-[4px] text-base flex gap-[8px] ${hasBackground ? 'bg-light-gray' : ''}`}>
            {hasBenefit ? 
                <CheckIcon width={24} height={24} /> : 
                <CrossIcon width={24} height={24} />
            }
            <p>{text}</p>
        </div>
    )
}