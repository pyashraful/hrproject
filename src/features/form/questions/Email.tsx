import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import InputDiscription from '../inputComponents/Discription';
import FromBox from '../inputComponents/FromBox';
import { itemsProps } from './type';

function Email({ item }: itemsProps) {
  return (
    <FromBox item={item}>
      <AnswerInputDisable />
    </FromBox>
  );
}

export default Email;
