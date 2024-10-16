import reliabilityImage from '/public/images/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliabilityPage() {
    return (
        <Hero
            imgData={reliabilityImage}
            imgAlt="man welding"
            title="High Reliability Web Hosting"
        />
    )
}