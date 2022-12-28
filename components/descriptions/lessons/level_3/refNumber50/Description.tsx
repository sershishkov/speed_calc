import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleTableMult from '../../tables/ExampleTableMult';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescAccent>Умножение еще больших чисел</DescAccent>

        <DescrBody>
          В предыдущем разделе речь шла о способе перемножения пар чисел вплоть
          до 30 х 30. Как быть, если надо перемножить числа еще большей
          величины? В этом случае в качестве опорного числа можно использовать
          50. Умножать на него легко, поскольку 50 — это половина 100, или 100,
          деленное на 2. Поэтому, чтобы умножить на 50, можно умножить число
          сначала на 100, а затем разделить результат на 2
        </DescrBody>
        <DescrBody>Давайте попробуем на примере:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='50'
          numberLeft='46'
          numberRight='48'
          valueIntermediate=''
          hintMinusLeft='4'
          hintMinusRight='2'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>Вычитаем накрест:</DescrBody>
        <DescAccent>46 — 2 = 44 или 48 — 4 = 44</DescAccent>
        <DescrBody>Умножим 44 на 100:</DescrBody>
        <DescAccent>44 x 100 = 4400</DescAccent>
        <DescrBody>
          Про себя проговариваем при этом так: «44 на 100 равно 4400». Теперь
          берем половину, что равносильно умножению 44 на 50, и получаем 2200.
        </DescrBody>
        <DescAccent>4400 : 2 = 2200</DescAccent>
        <DescrBody>
          Теперь перемножим числа в кружках и прибавим результат к 2200:
        </DescrBody>
        <DescAccent>4 х 2 = 8</DescAccent>
        <DescAccent>2200 + 8 = 2208</DescAccent>
        <DescrBody>Окончательно решение выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='50'
          numberLeft='46'
          numberRight='48'
          valueIntermediate='2200'
          hintMinusLeft='4'
          hintMinusRight='2'
          valueToAdd=''
          valueToMinus='+8'
          valueResult='2208'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>Что может быть проще? Разберем еще один пример:</DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='7'
          refNumber='50'
          numberLeft='53'
          numberRight='57'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          Складываем накрест, затем умножаем результат на опорное число
          (умножаем при этом на 100, а затем делим на 2):
        </DescrBody>

        <DescAccent>57 + 3 = 60</DescAccent>
        <DescAccent>60 х 100 = 6000</DescAccent>
        <DescAccent>6000 : 2 = 3000</DescAccent>

        <DescrBody>
          Перемножаем числа в кружках и прибавляем результат к 3000:
        </DescrBody>

        <DescAccent>3 х 7 = 21</DescAccent>
        <DescAccent>3000 + 21 = 3021</DescAccent>

        <DescrBody>Полностью решенный пример теперь выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='7'
          refNumber='50'
          numberLeft='53'
          numberRight='57'
          valueIntermediate='3000'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+21'
          valueToMinus=''
          valueResult='3021'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescrBody>Решим следующий пример:</DescrBody>

        <ExampleTableMult
          hintPlusLeft='2'
          hintPlusRight='13'
          refNumber='50'
          numberLeft='52'
          numberRight='63'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          Складываем накрест и умножаем результат на опорное число (умножаем
          сначала на 100, а затем делим результат на 2):
        </DescrBody>

        <DescAccent>63 + 2 = 65</DescAccent>
        <DescAccent>65 x 100 = 6500</DescAccent>

        <DescrBody>Теперь надо разделить на 2.</DescrBody>
        <DescrBody>
          Никаких проблем! Говорим про себя: «Половина от шести тысяч — это три
          тысячи. Половина от пятисот — это двести пятьдесят. Всего получается
          три тысячи двести пятьдесят».
        </DescrBody>
        <DescrBody>Теперь перемножим числа в кружках:</DescrBody>
        <DescAccent>2 х 13 = 26</DescAccent>
        <DescrBody>
          Прибавив 26 к промежуточному результату 3250, получаем 3276. Полностью
          решенный пример теперь выглядит так:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='2'
          hintPlusRight='13'
          refNumber='50'
          numberLeft='52'
          numberRight='63'
          valueIntermediate='3250'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+26'
          valueToMinus=''
          valueResult='3276'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescAccent>Проверка ответов</DescAccent>
        <DescrBody>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </DescrBody>
        <DescAccent>52 х 63 =</DescAccent>
        <DescrBody>
          Числами-подстановками для 52 и 63 будут 7 и 9 соответственно
        </DescrBody>
        <DescAccent>7 х 9 = 63</DescAccent>
        <DescAccent>6 + 3 = 9</DescAccent>
        <DescrBody>9 — это наше контрольное число.</DescrBody>
        <DescrBody>Цифры исходного ответа (3) дают в сумме 9:</DescrBody>
        <DescAccent>3 + 2 + 7 + 6 = 18</DescAccent>
        <DescAccent>1 + 8 = 9</DescAccent>
        <DescrBody>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </DescrBody>

        <DescAccent>Удвоение и деление пополам</DescAccent>

        <DescrBody>
          Чтобы использовать 20 и 50 в качестве опорных чисел, необходимо уметь
          без проблем удваивать числа и делить их пополам.
        </DescrBody>
        <DescrBody>
          Иногда, когда нам, например, приходится делить пополам двузначное
          число, у которого число десятков является нечетным, ответ не
          напрашивается сам собой. К примеру:
        </DescrBody>
        <DescAccent>78 : 2 =</DescAccent>
        <DescrBody>
          Чтобы разделить пополам 78, вы могли бы 70 разделить на 2, потом 8, а
          затем сложить полученные результаты. Но есть способ еще проще.
        </DescrBody>
        <DescrBody>
          78 = 80 — 2. Половина от 80 — 2 равняется 40 — 1. Это и есть ответ:
        </DescrBody>
        <DescAccent>40 - 1 = 39</DescAccent>
        <DescrBody>
          Чтобы удвоить 38, мысленно представьте это число в виде 40 — 2.
          Удвоенная величина будет 80 — 4, то есть 76.
        </DescrBody>
        <DescrBody>
          Этот же подход может быть использован для умножения и деления довольно
          больших чисел на З и 4.К примеру:
        </DescrBody>
        <DescAccent>19 х 3 = (20 - 1) х 3 = 60 - 3 = 57</DescAccent>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
