import MainSection from "@/components/insights/MainSection";
import CardsSection from "@/components/insights/CardsSection";
import SubscriptionSection from "@/components/insights/SubscriptionSection"

export const metadata = {
  title: "Insights",
  description: "learn more about software company",
};

export default function InsightsPage() {
  return (
    <>
      <MainSection />
      <CardsSection/>
      <SubscriptionSection/>
    </>
  );
}
