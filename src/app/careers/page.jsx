import BlogPostSection from "@/components/careers/BlogPostSection";
import CareerBenefitsSection from "@/components/careers/CareerBenefitsSection";
import CareerFeedbacksSection from "@/components/careers/CareerFeedbacksSection";
import CareerHeroSection from "@/components/careers/CareerHeroSection";
import CareerOpeningsSection from "@/components/careers/CareerOpeningsSection";
import TrustedBrandsSection from "@/components/careers/TrustedBrandsSection";

export const metadata = {
  title: "careers",
  description: "Join Our Dynamic Team at Software Company",
};

export default function CareersPage() {
  return (
    <>
      <CareerHeroSection />
      <CareerBenefitsSection />
      <TrustedBrandsSection />
      <CareerOpeningsSection />
      <CareerFeedbacksSection />
      <BlogPostSection />
    </>
  );
}
