export interface BlogType {
  title: string;
  subtitle: string;
  image?: string;
  url: string;
  topics: string[];
  platform: string;
  date: string;
};

export interface NotionMultiSelect {
  id: string;
  name: string;
  color: string;
};

export interface NotionObject {
  "object": string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: object;
  last_edited_by: object;
  cover: null;
  icon: null;
  parent: object;
  archived: boolean;
  in_trash: boolean;
  properties: NotionProps;
  url: string;
  public_url: null;
};

export interface NotionProps {
  URL: {
    id: string;
    type: string;
    url: string;
  };
  Platform: {
    id: string;
    type: string;
    select: {
      id: string;
      name: string;
      color: string;
    };
  };
  "Publication Date": {
    id: string;
    type: string;
    date: {
      start: string;
      end: null;
      time_zone: null;
    }
  };
  Subtitle: {
    id: string;
    type: string;
    rich_text: {
      type: string;
      text: object;
      annotations: object;
      plain_text: string;
      href: null;
    }[];
  };
  Status: {
    id: string;
    type: string;
    status: {
      id: string;
      name: string;
      color: string;
    }
  };
  Tags: {
    id: string;
    type: string;
    multi_select: NotionMultiSelect[];
  };
  Image: {
    id: string;
    type: string;
    files: {
      name: string;
      type: string;
      file: {
        url: string;
        expiry_time: string;
      }
    }[]
  };
  Name: {
    id: string;
    type: string;
    title: {
      type: string;
      text: object;
      annotations: object;
      plain_text: string;
      href: null;
    }[];
  };
};
