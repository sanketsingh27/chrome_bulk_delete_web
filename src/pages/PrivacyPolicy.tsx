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
                  servers.
                </p>

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
                  3. Third-Party Services
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
                </ul>
                <p className="mt-4">
                  We recommend reviewing Google's privacy policy to understand
                  how they handle your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  4. Changes to This Privacy Policy
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
                  5. Chrome Extension Permissions Justification
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>host_permissions</strong> - Required to access and
                    interact with photo elements on Google Photos
                    (https://photos.google.com/*) for selecting and deleting
                    them.
                  </li>
                  <li>
                    <strong>activeTab</strong> - Used to run scripts only on the
                    currently active Google Photos tab when the user clicks the
                    extension, ensuring minimal access and better privacy.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about this privacy policy or our
                  data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-neo-gray border-2 border-black">
                  <p>
                    <strong>Email:</strong> shipit.digital@gmail.com
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
