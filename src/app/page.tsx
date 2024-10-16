import homeImage from '/public/images/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero
      imgData={homeImage}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}