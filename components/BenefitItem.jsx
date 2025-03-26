export default function BenefitItem({ text, hasBenefit, hasBackground }) {
    return(
        <div className={`px-[16px] py-[12px] rounded-[4px] flex gap-[8px] ${hasBackground ? 'bg-[#F6F6F6]' : ''}`}>
            <p>{hasBenefit ? '+' : '-'}</p>
            <p className="font-text">{text}</p>
        </div>
    )
}