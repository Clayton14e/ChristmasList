import Image from 'next/image';

export function GiftLogo() {
    return (
        <Image
        src="/giftwrap-icon.png"
        alt="Application Icon" 
        min-width="26"
        min-height="32"
        width="36"
        height="44"
        />
    )
}