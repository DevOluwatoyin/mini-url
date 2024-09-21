import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Price = () => {
  return (
    <div id="pricing" className="w-full">
      <h2 className="font-bold text-4xl text-center text-main-text mb-3">
        A <span className="text-primary-400">price perfect</span> for your
        needs.
      </h2>
      <p className="mx-auto text-center px-2 md:px-0 md:w-2/3 lg:w-1/2">
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>
      <div className="flex flex-col justify-between items-center space-y-8 px-4 mt-10 w-full max-w-5xl mx-auto mb-8 md:mb-16 md:flex-row md:flex-wrap lg:justify-center lg:space-y-0">
        <div className="w-full flex flex-col justify-center items-center  border border-primary-400 rounded-2xl lg:hover:scale-110 lg:w-1/3">
          <div className="space-y-4 px-10 pb-8 pt-4">
            <span className="text-2xl">Basic</span>
            <h4 className="font-bold text-3xl">Free</h4>
            <p className="text-xl">Free plan for all users</p>
            <p className="flex items-center">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Free plan for all users
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Unlimited URL Shortening
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Basic Link Analytics
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Customizable Short Links
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              FStandard Support
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Ad-supported
            </p>
          </div>
        </div>
        <div className="relative z-[2] w-full flex flex-col justify-center items-center rounded bg-gradient-to-b from-[#1E3448] to-primary-400 text-white lg:scale-110 group lg:w-1/3">
          <div className="space-y-4 p-10">
            <span className="text-2xl">Professional</span>
            <h4 className="font-bold text-3xl">$15/month</h4>
            <p className="text-xl">Ideal for business creators</p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" /> Ideal
              for business creators
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />
              Enhanced Link Analytics
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" /> Custom
              Branded Domains
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />
              Advanced Link Customization
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />
              Priority Support
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" /> Ad-free
              Experience
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center  border border-primary-400 rounded-2xl lg:hover:scale-110 lg:w-1/3">
          <div className="space-y-4 px-10 pb-8 pt-4">
            <span className="text-2xl">Teams</span>
            <h4 className="font-bold text-3xl">$25/month</h4>
            <p className="text-xl">Share with up to 10 users</p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Share with up to 10 users
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Team Collaboration
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              User Roles and Permissions
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Enhanced Security
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              API Access
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2" />
              Dedicated Account Manager
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mb-8 flex items-center flex-col space-y-4 max-w-md mx-auto md:space-y-0 md:space-x-4 md:flex-row">
        <button className="text-primary-300 border border-primary-300 hover:border-0 hover:bg-primary-300 hover:text-white py-2 rounded-full w-1/2 text-base">
          Get Custom Pricing
        </button>
        <button className="text-white bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2 text-base">
          Select Pricing
        </button>
      </div>
    </div>
  );
};

export default Price;
