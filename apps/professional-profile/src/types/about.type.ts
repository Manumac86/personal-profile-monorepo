export interface About {
  data: {
    id: number;
    title: string;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  meta: {};
}

export interface Global {
  data: {
    id: number;
    documentId: string;
    siteName: string;
    siteDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
  };
  meta: {};
}
