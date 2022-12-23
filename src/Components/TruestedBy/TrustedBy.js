import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section class='px-4 py-24 mx-auto max-w-7xl'>
        <h1 class='mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl'>
          Trusted and loved by the world’s best teams
        </h1>

        <div class='grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4'>
          <div class='flex items-center justify-center'>
            <img
              class='h-4 mx-auto lg:h-12'
              src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
              alt=''
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              class='h-4 mx-auto lg:h-12'
              src='https://res.cloudinary.com/hilnmyskv/image/upload/q_70/v1669902575/Algolia_com_Website_assets/images/shared/algolia_logo/algolia_logo_full_blue.svg'
              alt='Slack Logo'
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              src='https://1000logos.net/wp-content/uploads/2021/06/Slack-Logo-2013.png'
              alt='Typeform Logo'
              class='h-4 mx-auto lg:h-20'
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              src='https://download.logo.wine/logo/Jira_(software)/Jira_(software)-Logo.wine.png'
              alt='Algolia Logo'
              class='h-4 mx-auto lg:h-48'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
