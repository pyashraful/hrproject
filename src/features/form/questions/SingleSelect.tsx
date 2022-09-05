import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import Option from '../inputComponents/Option';
import FromBox from '../inputComponents/FromBox';
import { itemProps } from './type';

function SingleSelect({ item }: itemProps) {
  return (
    <FromBox>
      <QuestionInput item={item} />
      <InputDiscription />
      <Option />
      <Option />
      <Option />
      <FromInputAction />
    </FromBox>
  );
}

export default SingleSelect;
