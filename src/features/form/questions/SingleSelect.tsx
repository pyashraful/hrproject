import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import Option from '../inputComponents/Option';
import FromBox from '../inputComponents/FromBox';
import { ItemProps } from '../../../globalType';

function SingleSelect({ item }: { item: ItemProps }) {
  return (
    <FromBox item={item}>
      <Option />
      <Option />
      <Option />
    </FromBox>
  );
}

export default SingleSelect;
