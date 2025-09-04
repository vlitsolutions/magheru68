import AboutEventSection from './sections/AboutEventSection';
import ArtisticMomentsSection from './sections/ArtisticMomentsSection';
import DonationsSection from './sections/DonationsSection';
import AuctionsSection from './sections/AuctionsSection';
import RaffleSection from './sections/RaffleSection';
import SponsorsSection from './sections/SponsorsSection';

export default function EventSections() {
  return (
    <div>
      <AboutEventSection />
      <ArtisticMomentsSection />
      <AuctionsSection />
      <RaffleSection />
      <SponsorsSection />
      <DonationsSection />
    </div>
  );
}