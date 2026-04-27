import HeroPhoneMockup from "@/components/home/HeroPhoneMockup";
import HeroMetaRow from "@/components/home/HeroMetaRow";

/**
 * Phone mockup is NOT inside HeroSection so grid/flex can never place it above the h1.
 * Renders only below `lg` (stacked layout). Meta row follows the mockup on small screens.
 */
export default function HeroMobilePhone() {
  return (
    <div className="relative overflow-x-clip lg:hidden hero-bg grid-pattern pb-10 pt-4">
      <div className="flex w-full justify-center px-4 sm:px-6" aria-hidden>
        <HeroPhoneMockup />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex justify-center sm:justify-start">
        <HeroMetaRow />
      </div>
    </div>
  );
}
