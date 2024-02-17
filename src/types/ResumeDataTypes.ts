type SocialData = {
  name: string;
  url: string;
  className: string;
};

type ResumeDataMain = {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
  website: string;
  resumedownload: string;
  social: SocialData[];
};

export type ResumeDataMainProps = {
  data: ResumeDataMain;
};
