export type Item = {
  id: string;
  name: string;
  type: string;
  discription: string;
  answer: string;
  require: boolean;
  hidden: boolean;
};

export type itemsProps = {
  item: [Item];
};
