import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundPolicy() {
  const sections = [
    {
      title: "Overview",
      content: "At Aminex Technical Services, we aim for total client satisfaction. We understand that project requirements may change, and we strive to provide fair solutions."
    },
    {
      title: "Service Refunds",
      content: "As we provide professional services and custom solutions, refunds are handled on a case-by-case basis. Initial deposits are generally non-refundable once work has commenced."
    },
    {
      title: "Cancellations",
      content: "If you need to cancel a project, please notify us in writing as soon as possible. You will be responsible for paying for all work completed up to the point of cancellation."
    },
    {
      title: "Product Returns",
      content: "For any hardware or software products sold by Aminex, returns are subject to the original manufacturer's warranty and return policies. We will assist you in managing these returns."
    },
    {
      title: "Dispute Resolution",
      content: "If you are unhappy with our services, please contact us at support@aminex.io. We will work with you to resolve any issues and reach a fair outcome."
    },
    {
      title: "Contact Information",
      content: "For questions about refunds or returns, please email hello@aminex.io or call us at our office line."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Refund <span className="font-instrument-serif italic text-orange-600">Policy</span>
            </h1>
            <p className="text-zinc-500 text-lg">
              Last updated: March 4, 2026
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="bg-zinc-50/50 p-8 rounded-[2.5rem] border border-zinc-100 transition-all hover:bg-[#FDF8F3] group">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-sm group-hover:bg-[#00D084] group-hover:text-white group-hover:border-transparent transition-all">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
