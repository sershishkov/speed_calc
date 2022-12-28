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
        <DescrBody>
          Мы узнали, как перемножать числа, используя простой метод,
          превращающий эту операцию в незатейливое занятие. Он легок в
          применении, когда множители являются числами, расположенными недалеко
          от 10 или 100. А как насчет перемножения чисел, находящихся вблизи 30
          или 60? Можно ли и для них использовать изученный метод? Безусловно.
        </DescrBody>
        <DescrBody>
          Мы выбирали числа 10 и 100 в качестве опорных, поскольку на них легко
          умножать. Метод будет прекрасно работать и с другими опорными числами,
          однако надо стараться выбирать те из них, на которые легко умножать.
        </DescrBody>
        <DescAccent>Умножение по множителям</DescAccent>
        <DescrBody>
          Легко умножать на 20, поскольку 20 равно 2 х 10, На которые умножать
          очень легко. Речь идет об умножении по множителям, а 10 и 2 являются
          множитеЛями числа 20.
        </DescrBody>
        <DescAccent>10 х 2 = 20</DescAccent>
        <DescrBody>Рассмотрим пример:</DescrBody>
        <DescAccent>23 х 24 =</DescAccent>
        <DescrBody>
          23 и 24 больше, чем опорное число 20, поэтому рисуем кружки над
          множителями. Больше, но на сколько? На З и 4 соответственно. Вписываем
          эти числа в соответствующие кружки, которые мы нарисовали вверху,
          потому что речь идет о положительных числах (23 = 20 + З, 24 = 20 +
          4).
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='4'
          refNumber='20'
          numberLeft='23'
          numberRight='24'
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

        <DescrBody>Складываем накрест, как раньше:</DescrBody>
        <DescAccent>23 + 4 = 27 или 24 + 3 = 27</DescAccent>
        <DescrBody>
          Теперь умножим полученный ответ на опорное число 20. Для этого умножим
          сначала на 2, а потом на 10
        </DescrBody>
        <DescAccent>27 х 2 = 54</DescAccent>
        <DescAccent>54 х 10 = 540</DescAccent>
        <DescrBody>
          В остальном все то же самое. Перемножаем числа в кружках и прибавляем
          к промежуточному результату 540.
        </DescrBody>
        <DescAccent>3 х 4 = 12</DescAccent>
        <DescAccent>540 + 12 = 552</DescAccent>
        <DescrBody>Полностью решенный пример выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='4'
          refNumber='20'
          numberLeft='23'
          numberRight='24'
          valueIntermediate='540'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+12'
          valueToMinus=''
          valueResult='552'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescAccent>Проверка ответов</DescAccent>
        <DescrBody>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </DescrBody>
        <DescAccent>23 х 24 =</DescAccent>
        <DescrBody>
          Числами-подстановками для 23 и 24 будут 5 и 6 соответственно
        </DescrBody>
        <DescAccent>5 х 6 = 30</DescAccent>
        <DescAccent>3 + 0 = 3</DescAccent>
        <DescrBody>3 — это наше контрольное число.</DescrBody>
        <DescrBody>Цифры исходного ответа (552) дают в сумме 3:</DescrBody>
        <DescAccent>5 + 5 + 2 = 12</DescAccent>
        <DescAccent>1 + 2 = 3</DescAccent>
        <DescrBody>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </DescrBody>
        <DescrBody>Попробуем решить еще один пример:</DescrBody>
        <DescAccent>23 х 31 =</DescAccent>
        <DescrBody>
          Пишем З и 11 в кружках над 23 и 31 , поскольку наши множители больше
          опорного числа 20 на З и 11 соответственно.
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='11'
          refNumber='20'
          numberLeft='23'
          numberRight='31'
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

        <DescrBody>Складывая накрест, получаем 34:</DescrBody>
        <DescAccent>31 + 3 = 34 или 23 + 11 = 34</DescAccent>
        <DescrBody>
          Умножаем полученный ответ на опорное число 20. Для этого сначала
          умножим 34 на 2, а то, что получится, — на 10
        </DescrBody>
        <DescAccent>34 х 2 = 68</DescAccent>
        <DescAccent>68 х 10 = 680</DescAccent>
        <DescrBody>
          Это наш промежуточный ответ. Теперь перемножаем числа в кружках:
        </DescrBody>
        <DescAccent>3 х 11 = 33</DescAccent>
        <DescrBody>Прибавим 33 к 680:</DescrBody>
        <DescAccent>680 + 33 = 713</DescAccent>
        <DescrBody>
          Полностью решенный пример выглядит следующим образом:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='11'
          refNumber='20'
          numberLeft='23'
          numberRight='31'
          valueIntermediate='680'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+33'
          valueToMinus=''
          valueResult='713'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescAccent>Проверка ответов</DescAccent>
        <DescrBody>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </DescrBody>
        <DescAccent>23 х 31 =</DescAccent>
        <DescrBody>
          Числами-подстановками для 23 и 24 будут 5 и 4 соответственно
        </DescrBody>
        <DescAccent>5 х 4 = 20</DescAccent>
        <DescAccent>2 + 0 = 2</DescAccent>
        <DescrBody>2 — это наше контрольное число.</DescrBody>
        <DescrBody>Цифры исходного ответа (713) дают в сумме 2:</DescrBody>
        <DescAccent>7 + 1 + 3 = 11</DescAccent>
        <DescAccent>1 + 1 = 2</DescAccent>
        <DescrBody>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </DescrBody>
        <DescrBody>
          Вы должны уметь решать эти примеры в уме. Это нетрудно, если немного
          попрактиковаться.
        </DescrBody>
        <DescAccent>Умножение чисел меньше 20</DescAccent>
        <DescrBody>
          А как насчет перемножения чисел, которые меньше 20? Если они (или хотя
          бы одно из них) больше 15, но меньше 20, можно использовать 20 в
          качестве опорного числа.
        </DescrBody>
        <DescrBody>Решим пример:</DescrBody>
        <DescAccent>19 х 16 =</DescAccent>
        <DescrBody>Взяв 20 в качестве опорного числа, получим:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='20'
          numberLeft='19'
          numberRight='16'
          valueIntermediate=''
          hintMinusLeft='1'
          hintMinusRight='4'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>Вычитаем накрест:</DescrBody>
        <DescAccent>16 -1 = 15 или 19 - 4 = 15</DescAccent>
        <DescrBody>Умножаем на 20:</DescrBody>
        <DescAccent>15 х 2 = 30</DescAccent>
        <DescAccent>30 х 10 = 300</DescAccent>
        <DescrBody>300 является нашим промежуточным ответом.</DescrBody>
        <DescrBody>
          Теперь перемножим числа в кружках и прибавим результат к
          промежуточному ответу:
        </DescrBody>
        <DescAccent>1 х 4 = 4</DescAccent>
        <DescAccent>300 + 4 = 304</DescAccent>
        <DescrBody>Полностью решенный пример выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='20'
          numberLeft='19'
          numberRight='16'
          valueIntermediate='300'
          hintMinusLeft='1'
          hintMinusRight='4'
          valueToAdd=''
          valueToMinus='+4'
          valueResult='304'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>
          Попробуем решить тот же пример, взяв на этот раз 10 в качестве
          опорного числа:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='9'
          hintPlusRight='6'
          refNumber='10'
          numberLeft='19'
          numberRight='16'
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
          Сложим накрест, а затем умножим результат на 10, получив промежуточный
          ответ:
        </DescrBody>

        <DescAccent>19 + 6 = 25</DescAccent>
        <DescAccent>10 х 25 = 250</DescAccent>
        <DescrBody>
          Перемножим числа в кружках и прибавим результат к промежуточному
          ответу:
        </DescrBody>
        <DescAccent>9 х 6 = 54</DescAccent>
        <DescAccent>250 + 54 = 304</DescAccent>
        <DescrBody>
          Полностью решенный пример выглядит следующим образом:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='9'
          hintPlusRight='6'
          refNumber='10'
          numberLeft='19'
          numberRight='16'
          valueIntermediate='250'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+54'
          valueToMinus=''
          valueResult='304'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescrBody>Это подтверждает ранее полученный результат.</DescrBody>
        <DescrBody>
          Большой разницы между двумя использованными опорными числами нет. Это
          вопрос личных предпочтений. Просто выбирайте то опорное число, с
          которым вам легче работать.
        </DescrBody>
        <DescAccent>Числа больше и меньше 20</DescAccent>
        <DescrBody>
          Третий случай — это когда одно число больше, а другое меньше 20.
          Например:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='20'
          numberLeft='18'
          numberRight='32'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          Можно либо сложить 18 и 12, либо вычесть 2 из 32, а затем умножить
          результат на опорное число:
        </DescrBody>
        <DescAccent>32 - 2 = 30</DescAccent>
        <DescAccent>30 x 20 = 600</DescAccent>
        <DescrBody>
          Можно либо сложить 18 и 12, либо вычесть 2 из 32, а затем умножить
          результат на опорное число:
        </DescrBody>
        <DescrBody>Теперь перемножаем числа в кружках:</DescrBody>
        <DescAccent>2 х 12 = 24</DescAccent>
        <DescrBody>
          На самом деле мы перемножаем минус 2 и 12, поэтому ответом будет минус
          24.
        </DescrBody>
        <DescAccent>600 - 24 = 576</DescAccent>
        <DescrBody>Решение примера выглядит следующим образом:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight='12'
          refNumber='20'
          numberLeft='18'
          numberRight='32'
          valueIntermediate='600'
          hintMinusLeft='2'
          hintMinusRight=''
          valueToAdd=''
          valueToMinus='-24'
          valueResult='576'
          displayRowPlusHits={true}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>
          Чтобы отнять 24, вычитаем сначала 30, а затем прибавляем 6.
        </DescrBody>

        <DescAccent>Проверка ответов</DescAccent>
        <DescrBody>
          Применим то, чему мы научились , чтобы проверить, верный ли получили
          ответ:
        </DescrBody>
        <DescAccent>18 х 32 =</DescAccent>
        <DescrBody>
          Числами-подстановками для 18 и 32 будут 9 и 5 соответственно
        </DescrBody>
        <DescAccent>9 х 5 = 45</DescAccent>
        <DescAccent>4 + 5 = 9</DescAccent>
        <DescrBody>9 — это наше контрольное число.</DescrBody>
        <DescrBody>Цифры исходного ответа (576) дают в сумме 9:</DescrBody>
        <DescAccent>5 + 7 + 6 = 18</DescAccent>
        <DescAccent>1 + 8 = 9</DescAccent>
        <DescrBody>
          Полученное число равно контрольному, значит, ответ мы получили верный.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
