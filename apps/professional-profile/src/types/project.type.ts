export type Project = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
};

export type Projects = {
  data: Project[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
};
