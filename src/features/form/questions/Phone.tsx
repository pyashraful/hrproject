import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemsProps } from './type';
import PhoneAnswerInput from '../inputComponents/PhoneAnswerInput';

function Phone({ item }: itemsProps) {
  return (
    <FromBox item={item}>
      <PhoneAnswerInput />
    </FromBox>
  );
}

export default Phone;
