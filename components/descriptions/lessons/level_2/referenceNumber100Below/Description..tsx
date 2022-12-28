import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleTableMult from '../../../../descriptions/lessons/tables/ExampleTableMult';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescAccent>Решение примеров в уме</DescAccent>
        <DescrBody>
          При использовании изложенного выше подхода очень важно то, что
          возникает перед вашим мысленным взором, или то, что вы произносите про
          себя. Это может помочь вам решать задачи с большей легкостью и с более
          высокой скоростью.
        </DescrBody>
        <DescrBody>
          Давайте умножим 16 на 16 и затем посмотрим, что Мы могли бы при этом
          проговаривать про себя.
        </DescrBody>
        <DescrBody>
          Складываем накрест. 16 плюс 6 (от второго множителя 16) равно 22.
          Потом умножаем на 10 и получаем 220. 6, умноженное на 6, равно 36.
          Прибавляем Сначала 30, а потом 6. 220 плюс 30 равно 250, плюс еще 6 —
          получаем 256
        </DescrBody>
        <DescrBody>
          Про себя мы могли бы при этом проговаривать: «Шестнадцать плюс шесть,
          двадцать два, двести двадцать. Тридцать шесть, двести пятьдесят
          шесть». Обретя некоторый навык, вы сможете опускать половину всего
          этого. Вам не надо будет комментировать буквально каждый свой шаг.
          Достаточно будет скаваты. «Двадцать два, двести пятьдесят шесть».
        </DescrBody>
        <DescrBody>
          Практикуйтесь в том, как вы проговариваете про себя ход решения.
          Произносить только самое необходимое во время вычисления — значит
          более чем вдвое сократить время решения.
        </DescrBody>
        <DescrBody>
          Как вы станете вычислять 7 х 8 в уме? Вы немедленно представите себе
          цифры З и 2 в кружках под 7 и 8. Затем отнимите 2 от 7 (или З от 8) и
          после того, как тут же умножите на 10, скажете вслух: «Пятьдесят». З
          на 2 равно 6. Вслух же вы произнесете практически без паузы:
          «Пятьдесят... шесть».
        </DescrBody>
        <DescrBody>А как насчет 6 х 7?</DescrBody>
        <DescrBody>
          Вы немедленно представите себе цифры 4 и З в кружках под 6 и 7. 6
          минус З дает З, поэтому вы скажете про себя: «Тридцать». 4 на З дает
          12, плюс 30 — 42. Про себя же вы просто проговорите: «Тридцать, сорок
          два».
        </DescrBody>
        <DescrBody>
          Не очень сложно, не так ли? Чем больше примеров вы решите
          самостоятельно, тем легче вам будет выполнять эти вычисления.
        </DescrBody>
        <DescAccent>Когда использовать опорное число?</DescAccent>
        <DescrBody>
          Люди спрашивают : «Когда нужно использовать опорное число?» Предыдущий
          пример дает ответ на этот вопрос. Вычисляя произведение 6 на 7 в уме,
          вы автоматически используете опорное число — 10. Ваш промежуточный
          результат равен 30. Вы говорите: «Тридцать... » Затем вычисляете: 4 на
          З равно 12. Вы не скажете вслух: «Тридцать двенадцать».
        </DescrBody>
        <DescrBody>
          Вам известно, что необходимо прибавить 12 к 30, чтобы получить ответ.
        </DescrBody>
        <DescrBody>Ответ прост: всегда используйте опорное число.</DescrBody>
        <DescrBody>
          По мере освоения описанных здесь методов вы обнаружите, что
          автоматически используете опорное число, даже когда уже не записываете
          его во время вычислений.
        </DescrBody>
        <DescrBody>Посмотрим на следующий пример:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='92'
          numberRight='93'
          valueIntermediate=''
          hintMinusLeft='8'
          hintMinusRight='7'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>
          Вычтем 8 из 93 путем отнимания 10 и прибавления 2. 93 минус 10 равно
          83, плюс 2 — получаем 85. Умножаем на опорное число 100 и имеем
          промежуточный результат: 8500. 7 умножить на 8 будет 56 Вот как теперь
          выглядит решение примера:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='92'
          numberRight='93'
          valueIntermediate='8500'
          hintMinusLeft='8'
          hintMinusRight='7'
          valueToAdd=''
          valueToMinus='+56'
          valueResult='8556'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>Можно также, к примеру, умножить 86 на 87.</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='86'
          numberRight='87'
          valueIntermediate='7300'
          hintMinusLeft='14'
          hintMinusRight='13'
          valueToAdd=''
          valueToMinus='+182'
          valueResult='7482'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
