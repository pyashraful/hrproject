import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { ItemProps } from '../../../globalType';

function LongText({ item }: { item: ItemProps }) {
  return (
    <FromBox item={item}>
      <AnswerInputDisable />
    </FromBox>
  );
}

export default LongText;
