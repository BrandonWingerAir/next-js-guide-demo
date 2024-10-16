import scaleImage from '/public/images/scale.jpg';
import Hero from '@/components/hero';

export default function ScalePage() {
    return (
        <Hero
            imgData={scaleImage}
            imgAlt="metal factory"
            title="High Scale Mobile Apps"
        />
    )
}