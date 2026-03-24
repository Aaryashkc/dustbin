import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-[#f5f1e8] w-full py-16 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-360 mx-auto text-center space-y-8">
        <h2 className="font-['Outfit'] font-bold text-primarytext-4xl md:text-5xl">
          Start managing waste today
        </h2>
        <p className="text-primaryfont-['Outfit'] text-lg max-w-2xl mx-auto">
          Log in to the dashboard and start tracking your waste collection operations in minutes
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primarytext-[#f5f1e8] px-10 py-5 rounded-[20px] font-['Inter'] font-medium text-xl flex items-center gap-3 hover:bg-opacity-90 transition-all">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-primarytext-primarypx-10 py-5 rounded-[20px] font-['Inter'] font-medium text-xl hover:bg-primaryhover:text-white transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
