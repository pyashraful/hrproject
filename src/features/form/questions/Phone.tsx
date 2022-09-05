import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemProps } from './type';
import PhoneAnswerInput from '../inputComponents/PhoneAnswerInput';

function Phone({ item }: itemProps) {
  return (
    <FromBox>
      <QuestionInput item={item} />
      <InputDiscription />
      <PhoneAnswerInput />
      <FromInputAction />
    </FromBox>
  );
}

export default Phone;
