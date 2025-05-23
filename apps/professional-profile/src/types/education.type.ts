export type Education = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  school: string;
};
export type Educations = {
  data: Education[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
};
