interface user {
  user: Object;
}

type Props = {
  children: JSX.Element;
};

type AddSiteInputs = {
  name: string;
  url: string;
};

type createSiteInfo = {
  authorId: string;
  createdAt: string;
  name: string;
  url: string;
};

type sitesResponse = {
  id: string;
  authorId: string;
  createdAt: string;
  name: string;
  url: string;
};
