import QuestionInput from '../inputComponents/QuestionInput';
import InputDiscription from '../inputComponents/Discription';
import AnswerInputDisable from '../inputComponents/AnswerInputDisable';
import FromBox from '../inputComponents/FromBox';
import { ItemProps } from './globalType';
import PhoneAnswerInput from '../inputComponents/PhoneAnswerInput';

function Phone({ item }: { item: ItemProps }) {
  return (
    <FromBox item={item}>
      <PhoneAnswerInput />
    </FromBox>
  );
}

export default Phone;
