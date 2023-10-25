import RootLayout from "@/components/Layouts/RootLayout";

const CancelRefundPolicyPage = () => {
  return (
    <div className="bg-gray-200  p-8">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">CANCEL & REFUND POLICY</h1>
        <p className="my-2">
          <strong>Cancel Procedure</strong>
        </p>
        <p className="mb-3">
          If you would like to cancel your journey, you must contact us at least
          72 hours before departure time. No cancellation and refund will be
          made after this time.
        </p>
        <p className="mb-3">
          <strong>
            Tickets cannot be changed or canceled on official Eid holidays or
            other special events.
          </strong>
        </p>
        <p className="mb-3">
          For canceling online booking, you must contact us on our online
          helpline +880-1770707610, +880-1770707610
        </p>
        <p>
          <strong>Refund Process</strong>
        </p>
        <p className="mb-3">
          For online booking, you will get your refund in your payee account
          (MOBILE BANKING/CARD BANKING/INTERNET BANKING) from which the payment
          was made within the next 7-10 working days.
        </p>
        <p className="mb-3">
          Please note that we do not have any control over the refund processing
          time between online payment gateways and banks. Therefore, once we
          have made the refund from our end, we will not have any control over
          further processing. We have to follow what the payment gateway
          instructs us.
        </p>
        <p className="mb-3">
          It will be entirely your responsibility to check with your bank (as
          you are the customer of your bank) after 7-10 working days of the
          refund made from our end.
        </p>
      </div>
    </div>
  );
};

export default CancelRefundPolicyPage;

CancelRefundPolicyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
