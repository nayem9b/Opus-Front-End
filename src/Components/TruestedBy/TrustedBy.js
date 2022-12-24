import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section class='px-4 mx-auto max-w-7xl mt-24'>
        <h1 class=' text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl mb-24 mt-48 '>
          Trusted and loved by the world’s best teams
        </h1>

        <div class='grid grid-cols-1 gap-16  text-center lg:grid-cols-4'>
          <div class='flex items-center justify-center'>
            <img
              class=' mx-auto h-12'
              src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
              alt='GOOGLE'
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              class='mx-auto h-12'
              src='https://res.cloudinary.com/hilnmyskv/image/upload/q_70/v1669902575/Algolia_com_Website_assets/images/shared/algolia_logo/algolia_logo_full_blue.svg'
              alt='Algolia'
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              src='https://1000logos.net/wp-content/uploads/2021/06/Slack-Logo-2013.png'
              alt='Slack'
              class='mx-auto h-20'
            />
          </div>
          <div class='flex items-center justify-center'>
            <img
              src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png'
              alt='Jira'
              class=' mx-auto h-12 '
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
