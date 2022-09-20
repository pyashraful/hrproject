import FromInputAction from '../inputComponents/FromInputAction';
import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { ItemProps } from '../../../globalType';
import AnswerNumberInput from '../inputComponents/AnswerNumberInput';

function LongText({ item }: { item: ItemProps }) {
  return (
    <FromBox item={item}>
      <AnswerNumberInput />
    </FromBox>
  );
}

export default LongText;
