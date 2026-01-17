import { Hero3D } from '@/app/components/Hero3D';
import { ImpactTicker } from '@/app/components/ImpactTicker';
import { FeatureDeck } from '@/app/components/FeatureDeck';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Hero3D />
      <ImpactTicker />
      <FeatureDeck onNavigate={onNavigate} />
    </div>
  );
}
