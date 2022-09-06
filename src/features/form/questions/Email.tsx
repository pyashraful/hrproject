import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import InputDiscription from '../inputComponents/Discription';
import FromBox from '../inputComponents/FromBox';
import { itemProps } from './type';

function Email({ item }: itemProps) {
  return (
    <FromBox item={item}>
      <AnswerInputDisable />
    </FromBox>
  );
}

export default Email;
