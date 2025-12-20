export default function RecruitmentPortal() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[25vh] w-full bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/manowar-bg.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            THE NIGERIAN ARMY CADET CORPS
            <br />
            RECRUITMENT PORTAL
          </h1>
          <p className="text-sm md:text-base max-w-3xl">
            Welcome to the official recruitment portal for the Nigerian Army
            Cadet Corps.
          </p>
        </div>
      </div>

      {/* Unified Styled Section */}
      <section className="bg-white text-gray-800 px-6 py-10 space-y-8 max-w-5xl mx-auto">
        {/* Application Guidelines Notice */}
        <div>
          <h2 className="font-bold text-lg mb-2">Application Guidelines</h2>
          <p className="text-base">
            Please read the instructions carefully before proceeding with your
            application.
          </p>
        </div>
        {/* Eligibility Criteria */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-bold text-lg mb-2">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Age:</strong> Regular Applicants must not be younger than
              18 years old.
            </li>
            <li>
              <strong>Nationality:</strong> Nigerian citizens.
            </li>
            <li>
              <strong>Minimum Educational Qualification:</strong>
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>NCO Cadre: SSCE or equivalent.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Required Documents */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-bold text-lg mb-2">Required Documents</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Passport-sized photograph</li>
            <li>
              Valid National ID (e.g. NIN, Driver License, Voters Card,
              International Passport)
            </li>
            <li>Educational certificates</li>
            <li>Proof of residence</li>
          </ul>
        </div>

        {/* Registration Process */}
        <div>
          <h2 className="font-bold text-lg mb-2">Registration Process</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Account Creation: Click "Register" to create an account.</li>
            <li>Email Verification: Verify your email via the link sent.</li>
            <li>Login: Log in with your email and password.</li>
          </ul>
        </div>

        {/* Completing the Application Form */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-bold text-lg mb-2">
            Completing the Application Form
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Fill in personal information, educational background, employment
              history, and skills.
            </li>
            <li>
              You are to provide a recent passport of yourself in JPG, PNG, or
              JPEG format.
            </li>
            <li>Upload the required documents.</li>
            <li>
              Confirm all details are accurate and submit your application.
            </li>
          </ul>
        </div>

        {/* Submission and Confirmation */}
        <div>
          <h2 className="font-bold text-lg mb-2">
            Submission and Confirmation
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Review and submit your application.</li>
            <li>Receive a confirmation email.</li>
          </ul>
        </div>

        {/* Application Status */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-bold text-lg mb-2">Application Status</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Check your application status in your account.</li>
            <li>Successful applicants will be notified via email and SMS.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
