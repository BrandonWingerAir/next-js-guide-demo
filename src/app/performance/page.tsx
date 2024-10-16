import performanceImage from '/public/images/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
    return (
        <Hero
            imgData={performanceImage}
            imgAlt="machine welding"
            title="High Performance Applications"
        />
    )
}