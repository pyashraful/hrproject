import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemsProps } from './type';
import AnswerNumberInput from '../inputComponents/AnswerNumberInput';

function LongText({ item }: itemsProps) {
  return (
    <FromBox item={item}>
      <AnswerNumberInput />
    </FromBox>
  );
}

export default LongText;
