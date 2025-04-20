export type Experience = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  company: string;
  is_current_job: boolean;
};

export type Experiences = {
  data: Experience[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
};
