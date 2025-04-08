import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="neo-container">
          <div className="neo-card mb-8">
            <h1 className="text-3xl md:text-4xl font-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Last Updated: April 7, 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  1. Introduction
                </h2>
                <p className="mb-4">
                  Welcome to Ship it Digital ("we," "our," or "us"). We respect
                  your privacy and are committed to protecting your personal
                  data. This privacy policy will inform you about how we look
                  after your personal data when you use our Chrome extension and
                  tell you about your privacy rights.
                </p>
                <p>
                  This privacy policy applies to all users of the Bulk Delete
                  Google Photos Chrome extension, which helps users select and
                  delete multiple photos in Google Photos.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  2. Data We Collect
                </h2>
                <p className="mb-4">
                  Our extension is designed to operate locally in your browser
                  and does not collect or store your personal data on our
                  servers. However, to provide our service, we process the
                  following data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Browser Information:</strong> Basic information
                    about your browser version to ensure compatibility.
                  </li>
                  <li>
                    <strong>Extension Usage Data:</strong> Anonymous analytics
                    about how you use the extension, such as feature usage and
                    performance metrics.
                  </li>
                </ul>
                <p className="mt-4">We do NOT collect or access:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your Google Photos or any image content</li>
                  <li>Your Google account credentials</li>
                  <li>
                    Your browsing history outside of the Google Photos site
                  </li>
                  <li>Any personally identifiable information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  3. How We Use Your Data
                </h2>
                <p className="mb-4">
                  We use the limited data we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To maintain, improve, and enhance our extension</li>
                  <li>To diagnose and fix technical issues</li>
                  <li>
                    To analyze usage patterns and optimize user experience
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  4. Third-Party Services
                </h2>
                <p className="mb-4">
                  Our extension operates within Google Chrome and interacts with
                  Google Photos. Please be aware that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Our extension does not alter Google's access to your data
                  </li>
                  <li>
                    Google's own privacy policy applies to your use of Google
                    Photos
                  </li>
                  <li>
                    We may use third-party analytics tools to improve our
                    service
                  </li>
                </ul>
                <p className="mt-4">
                  We recommend reviewing Google's privacy policy to understand
                  how they handle your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  5. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your
                  data. However, no method of transmission over the Internet or
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal
                  information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  6. Your Data Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights
                  regarding your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access information we hold about you</li>
                  <li>The right to request correction of your personal data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the
                  information provided in the "Contact Us" section.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  7. Children's Privacy
                </h2>
                <p>
                  Our extension is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page and updating the "Last Updated" date. You are
                  advised to review this privacy policy periodically for any
                  changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about this privacy policy or our
                  data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-neo-gray border-2 border-black">
                  <p>
                    <strong>Email:</strong> support@shipit.digital
                  </p>
                  <p className="mt-2">
                    <strong>Address:</strong> Ship it Digital, 7420 Guadalupe St
                    apt 305 <br />
                    Austin, TX 78752 US{" "}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
