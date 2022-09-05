import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemProps } from './type';
import AnswerNumberInput from '../inputComponents/AnswerNumberInput';

function LongText({ item }: itemProps) {
  return (
    <FromBox>
      <QuestionInput item={item} />
      <InputDiscription />
      <AnswerNumberInput />
      <FromInputAction />
    </FromBox>
  );
}

export default LongText;
