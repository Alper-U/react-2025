interface user {
  user: Object;
}

type Props = {
  children: JSX.Element;
};

type AddSiteInputs = {
  siteName: string;
  siteUrl: string;
};

type createSiteInfo = {
  authorId: number;
  createdAt: string;
  siteName: string;
  siteUrl: string;
};
