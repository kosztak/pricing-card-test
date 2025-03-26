import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";


export default function BenefitItem({ text, hasBenefit, hasBackground }) {
    return(
        <div className={`px-[16px] py-[12px] rounded-[4px] flex gap-[8px] ${hasBackground ? 'bg-[#F6F6F6]' : ''}`}>
            {hasBenefit ? 
                <CheckIcon width={24} height={24} /> : 
                <CrossIcon width={24} height={24} />
            }
            <p className="font-text">{text}</p>
        </div>
    )
}