import RootLayout from "@/components/Layouts/RootLayout";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">PRIVACY POLICY</h1>
        <p>
          <strong>Your personal data and our promises to you</strong>
        </p>
        <p>
          We completely recognize how important your personal data is and it is
          our responsibility to keep them safe and confidential. Whenever you
          use our website, we’ll be absolutely clear about the personal data we
          use, how we use it, and – most importantly – why we need it.
        </p>
        <p>
          <strong>Personal data you give us</strong>
        </p>
        <p>
          You may need to give us your personal data to use our services and
          book tickets – please refer to more details below:
        </p>
        <p>
          Personal data could be anything which may help identify and contact
          any individual. For example:
        </p>
        <ul className="list-disc mt-2 ml-4">
          <li>Full Name.</li>
          <li>Contact Number or Email address or Social media account.</li>
          <li>
            NID/Passport/Birth Registration/License/Employee id/Student id
            (valid) number.
          </li>
          <li>
            Payment method details (like Credit/debit card or Internet/mobile
            banking).
          </li>
          <li>
            Details of any relevant discount or loyalty cards you may use (if
            applicable).
          </li>
        </ul>
        <p>
          <strong>Personal data you give us about others</strong>
        </p>
        <p>
          You may be booking a ticket for other guests or doing a trip with
          other guests whose details we may also need in order for them to
          travel.
        </p>
        <p>
          By entering someone else’s personal data, you confirm that you have
          their or parent/guardian’s (if the passenger is under 18) permission
          to share those data with us.
        </p>
        <p>
          <strong>How we use your information</strong>
        </p>
        <p>
          We use your information in a number of different ways — what we do
          depends on the information. This has been explained below in detail,
          showing what we do and why.
        </p>
        <p>
          <strong>Name, email address, phone number</strong>
        </p>
        <p>Your personal data may be used in the following ways:</p>
        <ul className="list-disc mt-2 ml-4">
          <li>
            Feedback: If you choose to give us feedback through our website,
            app, or any other social media such as Facebook/messenger, we may
            use your ‘constructive’ feedback or relevant comments to identify
            any gaps in our service and address those issues where possible or
            take remedial actions for improved service performance.
          </li>
          <li>
            Communicating with you: When you email us or use our chat option, we
            may use this info to communicate with you with processes or updates
            – for example- arranging refunds or resolving any ticketing issues.
          </li>
          <li>
            Customer Service: If you call us, we will process your data so that
            our Customer Service and Operations team can fix any issues you’ve
            raised, as well as for training and quality purposes.
          </li>
          <li>
            Marketing activities: We may send you our special offers or any
            product or service-related promotions or communications through
            marketing emails, web push, inbox messages, and push notifications
            in order to inform you about our great discounts, sales, offers, and
            many more from Vromon.
          </li>
        </ul>
        <p>
          <strong>Personal data tied to your journey details</strong>
        </p>
        <p>
          We may require your personal data (including your name, email address,
          identity card number, phone number, and journey details) to help
          arrange your travel.
        </p>
        <ul className="list-disc mt-2 ml-4">
          <li>To make sure you get your tickets.</li>
          <li>
            To contact you with essential info – booking confirmations,
            disruption messaging, refund info, compensation info for journey
            delays, and service message.
          </li>
          <li>
            Keeping your account up to date (only if you choose to set one up).
          </li>
          <li>
            The operator needs this info to create your tickets and may need to
            contact you if there is a service disruption.
          </li>
        </ul>
        <p>
          <strong>Personal data we collect automatically</strong>
        </p>
        <p>
          Whenever you use our website or app, we automatically collect certain
          information using cookies and device info.
        </p>
        <p>
          <strong>Social login</strong>
        </p>
        <p>
          By logging into your social media accounts like Facebook and Google,
          you drop cookies. These cookies can collect info about your IP address
          and the pages you visit.
        </p>
        <ul className="list-disc mt-2 ml-4">
          <li>IP address</li>
          <li>Other potentially identifying data</li>
        </ul>
        <p>
          <em>
            You may choose if you would like to register with us either using
            Google or Facebook.
          </em>
        </p>
        <p>
          <em>
            Note: We do not control Facebook or Google’s actions. If you choose
            to use your Google or Facebook account to log in with us, you will
            be subject to Google and Facebook’s privacy policies too.
          </em>
        </p>
        <p>
          <strong>Third parties</strong>
        </p>
        <p>
          We may share your personal data with the following types of third
          parties:
        </p>
        <p>
          <em>Travel operators (Launch, Coach/bus, and Hotel)</em>
        </p>
        <p>
          We work with travel operators who also need your data to create your
          tickets and provide services in relation to your journey as well as to
          deal with after-sales matters. Some travel operators may run your data
          through their own payment and e-ticket systems in order to issue your
          tickets or notify you of any travel-related news/offer or issues. We
          may also share your personal data with travel operators to prevent and
          detect fraud against you or Vromon or the travel operator. We only
          share what is necessary to meet this purpose, and we will notify them
          that they must keep your personal data safe.
        </p>
        <p>
          <em>The authorities</em>
        </p>
        <p>
          We may be asked by certain authorities, such as the law enforcement
          agencies, to share your personal data. Generally, this is to help them
          prevent or investigate fraud or crime. When we provide this data to
          the authorities, it will be their responsibility to ensure your
          personal data are safe and secure with them too. We will only share
          your data that are legally necessary.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

PrivacyPolicyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
