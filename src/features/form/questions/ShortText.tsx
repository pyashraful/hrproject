import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { itemsProps } from './type';

function LongText({ item }: itemsProps) {
  return (
    <FromBox item={item}>
      <AnswerInputDisable />
    </FromBox>
  );
}

export default LongText;
