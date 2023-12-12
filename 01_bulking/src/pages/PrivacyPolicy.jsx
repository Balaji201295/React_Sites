import React from "react";
import { PageHeading } from "../components";
import styles from "../styles";
const PrivacyPolicy = () => (
  <main className={`${styles.padding}`}>
    <PageHeading
      title="Privacy"
      titleSpan="Policy"
      content="Last updated November 28, 2022"
    />
    <div className="flex flex-col">
      <h3 className="font-sans text-xl sm:text-3xl font-semibold tracking-[.16] mb-4">
        What information do we collect?
      </h3>
      <p className="font-sans text-sm font-semibold tracking-[.16] mb-6">
        Personal information you disclose to us
      </p>
      <p className="font-sans text-sm font-semibold tracking-[.16]">
        In Short: We collect personal information that you provide to us.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16]">
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16]">
        Personal Information Provided by You. The personal information that we
        collect depends on the context of your interactions with us and the
        Services, the choices you make, and the products and features you use.
        The personal information we collect may include the following:
      </p>
      <ul className="font-sans text-sm font-normal tracking-[.16] list-disc pl-4 my-6">
        <li className="mb-1">names</li>
        <li className="mb-1">email addresses</li>
        <li className="mb-1">usernames</li>
        <li className="mb-1">passwords</li>
        <li className="mb-1">debit/credit card numbers</li>
        <li className="mb-1">billing addresses</li>
        <li>phone numbers</li>
      </ul>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        <span className="font-semibold">Sensitive Information:</span> We do not
        process sensitive information.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        <span className="font-semibold">Payment Data:</span> We may collect data
        necessary to process your payment if you make purchases, such as your
        payment instrument number (such as a credit card number), and the
        security code associated with your payment instrument. All payment data
        is stored by Stripe. You may find their privacy notice link(s)
        here:&nbsp;
        <a
          href="https://company.com/privacy"
          target="_blank"
          className="text-mainColor underline"
        >
          https://company.com/privacy
        </a>
        .
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        <span className="font-semibold">Social Media Login Data:</span> We may
        provide you with the option to register with us using your existing
        social media account details, like your Facebook, Twitter, or other
        social media account. If you choose to register in this way, we will
        collect the information described in the section called "HOW DO WE
        HANDLE YOUR SOCIAL LOGINS?" below.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <p className="font-sans text-sm font-semibold tracking-[.16] mb-6">
        Information automatically collected
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        <span className="font-semibold">In Short:</span> Some information — such
        as your Internet Protocol (IP) address and/or browser and device
        characteristics — is collected automatically when you visit our
        Services.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16]">
        Like many businesses, we also collect information through cookies and
        similar technologies.
      </p>
      <p className="font-sans text-sm font-normal tracking-[.16] mb-6">
        The information we collect includes:
      </p>
      <ul className="font-sans text-sm font-normal tracking-[.16] list-disc pl-4 mt-6">
        <li className="mb-2">
          <span className="font-semibold">Log and Usage Data.</span> Log and
          usage data is service-related, diagnostic, usage, and performance
          information our servers automatically collect when you access or use
          our Services and which we record in log files. Depending on how you
          interact with us, this log data may include your IP address, device
          information, browser type, and settings and information about your
          activity in the Services (such as the date/time stamps associated with
          your usage, pages and files viewed, searches, and other actions you
          take such as which features you use), device event information (such
          as system activity, error reports (sometimes called "crash dumps"),
          and hardware settings).
        </li>
        <li className="mb-2">
          <span className="font-semibold">Device Data.</span> We collect device
          data such as information about your computer, phone, tablet, or other
          device you use to access the Services. Depending on the device used,
          this device data may include information such as your IP address (or
          proxy server), device and application identification numbers,
          location, browser type, hardware model, Internet service provider
          and/or mobile carrier, operating system, and system configuration
          information.
        </li>
        <li>
          <span className="font-semibold">Location Data.</span> We collect
          location data such as information about your device's location, which
          can be either precise or imprecise. How much information we collect
          depends on the type and settings of the device you use to access the
          Services. For example, we may use GPS and other technologies to
          collect geolocation data that tells us your current location (based on
          your IP address). You can opt out of allowing us to collect this
          information either by refusing access to the information or by
          disabling your Location setting on your device. However, if you choose
          to opt out, you may not be able to use certain aspects of the
          Services.
        </li>
      </ul>
    </div>
  </main>
);
export default PrivacyPolicy;
