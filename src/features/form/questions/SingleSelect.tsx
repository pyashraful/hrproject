import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import Option from '../inputComponents/Option';
import FromBox from '../inputComponents/FromBox';
import { itemsProps } from './type';

function SingleSelect({ item }: itemsProps) {
  return (
    <FromBox item={item}>
      <Option />
      <Option />
      <Option />
    </FromBox>
  );
}

export default SingleSelect;
