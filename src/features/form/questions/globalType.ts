export type ItemProps = {
  id: string;
  name: string;
  type: string;
  discription: string;
  answer: string;
  require: boolean;
  hidden: boolean;
};

export type InitialStateProps = {
  fields: ItemProps[];
};
