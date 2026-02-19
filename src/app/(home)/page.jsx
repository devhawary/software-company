import HomeHeader from "@/components/home/HomeHeader";
import FeaturesSection from "@/components/home/HomeFeaturesSection";
import DetailsSection from "@/components/home/HomeDetailsSection";
import PricingSection from "@/components/home/HomePricingSection";
import FeedbackSection from "@/components/home/HomeFeedbackSection";
import QuestionSection from "@/components/home/HomeQuestionSection";
import TeamSection from "@/components/home/HomeTeamSection";
import InsightsSection from "@/components/home/HomeInsightsSection";

export const metadata = {
  title: "Software Company",
  description: "Welcome to software company",
};

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <main>
        <FeaturesSection />
        <DetailsSection />
        <PricingSection />
        <FeedbackSection />
        <QuestionSection />
        <TeamSection />
        <InsightsSection />
      </main>
    </>
  );
}
