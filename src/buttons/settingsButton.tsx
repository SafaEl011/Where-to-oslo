import React, { useState } from "react";
import IconButton from "./iconsButton";
import "../css/iconStyles.css";

export const SettingsButton: React.FC = () => {
  const [isSettingsVisible, setSettingsVisible] = useState<boolean>(false);
  const [showUserAgreement, setShowUserAgreement] = useState<boolean>(false);

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  const toggleUserAgreement = () => {
    setShowUserAgreement(!showUserAgreement);
  };

  return (
    <div>
      <IconButton className="settings-button" onClick={toggleSettings}>
        <img
          src="images/SettingsBtn.svg"
          alt="Settings Icon"
          className="icon"
        />
      </IconButton>
      {isSettingsVisible && (
        <div>
          <h3 className="fw-bold text-center m-4">About</h3>
          <p className="fw-light text-center p-4">
            Welcome to Where To Oslo, When you need to know where to go!
          </p>
          <p className="fw-light mb-4 text-center p-4">
            This application helps you find the best cafes, restaurants, and
            activities that you might not find elsewhere. Our goal is to make
            your search for great places easy and enjoyable.
          </p>
          <p className="mb-0 text-center mt-5">
            <strong>Version:</strong> 1.0.0
          </p>

          <button onClick={toggleUserAgreement}>User Agreement</button>
          {showUserAgreement && (
            <div>
              <p>
                1. Introduction Welcome to our application. By using our app,
                you agree to comply with and be bound by the following terms and
                conditions of use, which together with our privacy policy govern
                our relationship with you in relation to this application. If
                you disagree with any part of these terms and conditions, please
                do not use our app.
              </p>
              <p>
                2. Usage of the App - You agree to use the app only for lawful
                purposes and in a manner that does not infringe the rights of,
                restrict, or inhibit anyone else's use and enjoyment of the app.
                - Unauthorized use of this app may give rise to a claim for
                damages and/or be a criminal offense.
              </p>
              <p>
                3. Intellectual Property - All content included in the app, such
                as text, graphics, logos, images, and software, is the property
                of our company and is protected by international copyright laws.
                - You may not reproduce, distribute, or create derivative works
                from any of the material on this app without our explicit
                consent
              </p>
              <p>
                4. Termination - We reserve the right to terminate your access
                to the app at any time, without notice, for conduct that we
                believe violates these terms or is harmful to other users of the
                app, us, or third parties
              </p>
              <p>
                {" "}
                Privacy Information 1. Data Collection We are committed to
                protecting your privacy. We collect and use personal information
                only as needed to deliver our app, its features, and services,
                and to communicate with you about your use of the app.
              </p>
              <p>
                2. Information We Collect - Location Data: We collect location
                data solely for the period of time you are using the app to
                provide relevant information about nearby places and activities.
                Once you stop using the app, your location data is deleted. - We
                do not collect personal details such as your name, email
                address, or contact information as the app does not support user
                account creation.
              </p>
              <p>
                3. Use of Information - We use the location data we collect to
                operate, maintain, and improve the app and our services. - Your
                location data will not be sold, exchanged, transferred, or given
                to any other company for any reason whatsoever, without your
                consent, other than for the express purpose of delivering the
                requested service during your use of the app.
              </p>
              <p>
                4. Data Security - We implement a variety of security measures
                to maintain the safety of your information. - However, please be
                aware that no method of transmission over the internet, or
                method of electronic storage, is 100% secure. Therefore, while
                we strive to use commercially acceptable means to protect your
                information, we cannot guarantee its absolute security.
              </p>
              <p>
                5. Third-Party Services - We may employ third-party companies
                and individuals to facilitate our app, to provide the app on our
                behalf, to perform app-related services, or to assist us in
                analyzing how our app is used. - These third parties have access
                to your information only to perform these tasks on our behalf
                and are obligated not to disclose or use it for any other
                purpose.
              </p>
              <p>
                6. Changes to This Privacy Policy - We may update our Privacy
                Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page. - You are advised
                to review this Privacy Policy periodically for any changes.
                Changes to this Privacy Policy are effective when they are
                posted on this page.
              </p>
              <p>
                By using our app, you consent to our User Agreement and Privacy
                Policy. If you have any questions about these policies, please
                contact us at [contact email].
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
