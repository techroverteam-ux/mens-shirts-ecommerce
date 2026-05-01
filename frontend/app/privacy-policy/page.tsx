import Breadcrumb from '../../components/ui/Breadcrumb'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Privacy Policy For Online And Offline Stores' }]} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">PRIVACY POLICY FOR ONLINE AND OFFLINE STORES</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              WROGN ("WROGN" or "we" or "us" or "our") is committed to protecting your personal identifiable Information (the "Personal Information"). This privacy policy ("Policy") details how WROGN gathers and handles the personal information obtained through:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>websites owned, operated or controlled by us from which you are accessing this Privacy Policy (individually, a "Website", and collectively, the "Websites");</li>
              <li>the software applications made available by us for use on or through computers and mobile devices (collectively, the "Software");</li>
              <li>our social media pages that we control from which you are accessing this Privacy Policy (collectively, our "Social Media Pages")</li>
              <li>your communications with us or through other offline activities and interactions (e.g., customer visit to physical stores for shopping, service inquiries and engagements, user conferences, etc.)</li>
            </ul>

            <p>
              (Collectively, we refer to the Websites, Social Media Page and Software as the 'Online Services' and together with offline channels the "Services").
            </p>

            <p>
              By visiting our physical store and using wrogn.com, you are accepting and consenting to the practices described in this Policy, so please read this Policy carefully before using our Services.
            </p>

            <p>
              We understand that you care about how your personal information is obtained and used, and we appreciate your faith in our ability to uphold the highest standards of care and sensibility in handling your data. WROGN is committed to respecting and upholding your privacy, and if you have any further questions in this regard please feel free to contact us at the coordinates listed below.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal Information</h2>
            <p>
              Personal information, for the purposes of this Policy, refers to information that can be used to specifically identify any individual customer of ours, such as the customer's name, address, email address, payment data, telephone number etc. This would also include information about a customer's activities with regard to the usage of our Services, and demographic information such as nationality, date of birth, gender, geographic area, and preferences, whenever any such information is linked to the personal information that identifies an individual.
            </p>

            <p>
              Accordingly, we collect personal information from customers to help us personalise and continually improve their shopping experience at wrogn.com. We use the information we gather from you to assist us in:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Handling orders.</li>
              <li>Delivering products and services.</li>
              <li>Processing payments.</li>
              <li>Communicating with you about orders, products, services and promotional offers.</li>
              <li>Updating our records and generally maintaining your account with us.</li>
              <li>Displaying content such as wishlists and customer reviews.</li>
              <li>Recommending merchandise and services relevant to your interests.</li>
            </ul>

            <p>
              We also use this information to improve our platform, prevent or detect fraud or abuses of our Services and enable third parties to carry out technical, logistical or other such functions on our behalf.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of information gathered:</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide at Online Services:</h3>
            <p>
              We receive and store any information submitted by the customer on our website, mobile applications, or through any other platform or medium of communication. Customers retain the right not to provide certain information, however, this may interfere with their ability to avail full advantage of several of our features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide at Offline Physical Stores:</h3>
            <p>
              We receive and store any information submitted by the customer at our offline physical stores, i.e, name, contact number, date of birth, age. Customers retain the right not to provide certain information, however, this may interfere with their ability to avail full advantage of several of our features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatic Information:</h3>
            <p>
              We receive and store certain types of information at each instance of your interaction with us. For example, like many websites, we use cookies to obtain certain types of information when you access wrogn.com, or advertisements and other content served on other websites by or on behalf of wrogn.com, through your web-browser.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Use of cookies</h3>
            <p>
              Cookies are alphanumeric identifiers that we transfer to your device's hard drive through your Web browser. This enables our systems to recognize your browser and to provide features such as personalized recommendations, personalized advertisements on other Websites and storage of items in your Shopping Cart between visits. You can read more about how the cookies are used by referring to our cookie policy here: <a href="https://www.wrogn.com/cookie-policy/" className="text-blue-600 hover:underline">https://www.wrogn.com/cookie-policy/</a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Securing Information & Retention</h2>
            <p>
              We guarantee to protect the security of your information during the purchase of any product on WROGN. For all our online payments we use a Secure Sockets Layer (SSL) software, which encrypts information you input in addition to maintaining the security of your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Grievance Officer</h2>
            <p>
              In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
            </p>
            <p className="font-semibold">
              Sakshi Upadhyay<br />
              Compliance Officer<br />
              Email id: compliance1@wrogn.com
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Queries</h2>
            <p>
              If you have a query, issue, concern, or complaint in relation to collection or usage of your personal information under this Privacy Policy, please contact us at the contact information provided above.
            </p>

            <p>
              By accessing the Website (www.wrogn.com) and WROGN Apps (Android & iOS), You have agreed to the terms set out in this Policy. This Policy should be read at all times along with the Terms of Use of the Website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}