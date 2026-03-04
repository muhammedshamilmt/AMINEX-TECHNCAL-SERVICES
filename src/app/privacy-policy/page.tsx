import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "At Aminex Technical Services, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information such as your name, email address, phone number, and company details when you contact us or request a quote. We also collect technical data like IP addresses and browsing behavior through cookies to improve our services."
    },
    {
      title: "How We Use Your Information",
      content: "Your information is used to provide and improve our services, communicate with you regarding project updates, and for marketing purposes (with your consent). We do not sell your personal data to third parties."
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. Our technical infrastructure is regularly monitored for vulnerabilities."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal data. You can also object to the processing of your information for marketing purposes at any time by contacting us."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy or how we handle your data, please contact us at hello@aminex.io."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Privacy <span className="font-instrument-serif italic text-orange-600">Policy</span>
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
