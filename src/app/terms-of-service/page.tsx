import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing and using Aminex Technical Services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services."
    },
    {
      title: "Service Scope",
      content: "Aminex Technical Services provides specialized technical services including ELV, ICT, AV, Software, and Automation. The scope of each project will be defined in a separate Statement of Work (SOW)."
    },
    {
      title: "Payment Terms",
      content: "Payment terms will be outlined in our proposals or project contracts. Generally, we require an upfront deposit before starting work, with progress payments based on milestones."
    },
    {
      title: "Intellectual Property",
      content: "Unless otherwise agreed, Aminex Technical Services retains ownership of all intellectual property created during the provision of services. Clients are granted a limited license to use the deliverables for their intended purposes."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, Aminex Technical Services shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services."
    },
    {
      title: "Governing Law",
      content: "These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction where Aminex Technical Services is headquartered."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Terms of <span className="font-instrument-serif italic text-orange-600">Services</span>
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
