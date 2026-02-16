import React from "react";
import { motion } from "framer-motion";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  TYPOGRAPHY_CONFIG,
  getFontSize,
} from "@/config/typography";
import up1Image from "@/assets/blog/2-up1.webp";
import up2Image from "@/assets/blog/2-up2.webp";
import middle1Image from "@/assets/blog/2-middle1.webp";
import middle2Image from "@/assets/blog/2-middle2.webp";
import bottomImage from "@/assets/blog/2-bottom.webp";

const SLIDE_RATIO = 2362 / 1440;

const BlogSlide2: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: `calc(100vw * ${SLIDE_RATIO})` }}
    >
      <div className="relative w-full h-full">
        {/* Main background block */}
        <div
          className="absolute bg-[#EFE3D6]"
          style={{
            left: "8.19%",
            top: "3.39%",
            width: "83.54%",
            height: "96.61%",
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        {/* Header of block 2 */}
        <h2
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "14.11%",
            top: "7.13%",
            width: "12.49%",
            height: "1.07%",
            fontFamily: FONT_FAMILIES.heading,
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.05,
          }}
        >
          Новость 1
        </h2>

        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "13.93%",
            top: "9.76%",
            width: "27.08%",
            height: "2.22%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.medium,
            lineHeight: 1.2,
          }}
        >
          Две строчки дополнительного описания подкрепляющего заголовок
        </p>

        <button
          type="button"
          className="absolute z-20 bg-[#C65A32] text-white rounded-full"
          style={{
            left: "13.89%",
            top: "15.54%",
            width: "8.06%",
            height: "1.82%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1,
          }}
        >
          Свернуть
        </button>

        {/* Up images */}
        <motion.img
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={up1Image}
          alt="Верхнее изображение 1"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "52.08%",
            top: "9.44%",
            width: "12.71%",
            height: "7.96%",
          }}
        />

        <motion.img
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src={up2Image}
          alt="Верхнее изображение 2"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "66.18%",
            top: "9.44%",
            width: "19.79%",
            height: "7.96%",
          }}
        />

        {/* Text block 1 */}
        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "13.92%",
            top: "19.65%",
            width: "71.88%",
            height: "11.87%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
          }}
        >
          Пчелы живут семьями. Главной здесь считается матка. На фоне остальных жителей улья она отличается достаточно крупными размерами. Ее единственной обязанностью является произведение потомства. Плодовитая матка способна откладывать в сутки около двух тысяч яиц. Чтобы ее организм выдерживал такую нагрузку, полагается специальное питание. Рабочие пчелы вырабатывают для этого специальное молочко. Нужно знать, во время медосбора рабочие пчелы живут менее двух месяцев. Поэтому крайне важно регулярно давать новое потомство. Гибель матки будет означать скорую гибель всего улья. Поэтому действия всей семьи направлены на обеспечение матке комфортного проживания.
Также здесь присутствуют трутни, предназначенные для оплодотворения матки. В улье живут и рабочие пчелы. Именно они и выполняют главные функции, обеспечивающие жизнедеятельность семьи. Трудяги собирают нектар, контролируют процесс его ферментации и получения меда, защищают потомство и собранный урожай от посторонних.
Одна пчелиная семья может насчитывать несколько десятков тысяч пчел. Точное количество определить достаточно сложно. Здесь все зависит от размера улья, мощи семьи, времени года. Например, в хорошо развитой семье во время медосбора может насчитываться до 50 тысяч пчел. После зимовки их количество может уменьшиться до 30-10 тысяч особей.
        </p>

        {/* Middle frame + image */}
        <div
          className="absolute z-10"
          style={{
            left: "14.03%",
            top: "32.43%",
            width: "71.94%",
            height: "15.54%",
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={middle1Image}
          alt="Среднее изображение 1"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "15.42%",
            top: "33.19%",
            width: "69.17%",
            height: "12.70%",
          }}
        />

        <p
          className="absolute z-20 text-[#2E261D]/60"
          style={{
            left: "43.07%",
            top: "46.67%",
            width: "13.81%",
            height: "0.63%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
          }}
        >
          Краткое описание картинки
        </p>

        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "13.93%",
            top: "49.34%",
            width: "71.86%",
            height: "7.79%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
          }}
        >
          В поисках распустившихся цветов пчелы могут летать на расстояние до трех километров. На цветах пчелы собирают нектар, который, находясь в медовом зобу, ферментируется. Здесь расщепляются сложные углеводы, удаляется влага. Вообще, преобразование нектара в мед является сложнейшим химическим процессом. Нектар перекладывается из ячейки в ячейку большое количество раз, что позволяет полностью избавиться от влаги. Используя крылья, пчелы вентилируют соты, создавая оптимальную температуру для «созревания» меда. После окончания этих сложных процессов в сотах образуется мед. Его пчелы запечатывают, покрывая тонким слоем воска. Чтобы получилось 100 г меда, понадобится собрать нектар с миллиона цветов. Эти данные позволяют представить, насколько тяжелым является труд этих маленьких насекомых. Они в буквальном смысле собирают мед по капельке. Но благодаря тому, что десятитысячные семьи являются единым организмом, они способны радовать пчеловода хорошим взятком.
        </p>

        {/* Lower left frame + image + text */}
        <div
          className="absolute z-10"
          style={{
            left: "13.89%",
            top: "58.26%",
            width: "34.58%",
            height: "16.93%",
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={middle2Image}
          alt="Среднее изображение 2"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "15.35%",
            top: "59.23%",
            width: "31.60%",
            height: "13.46%",
          }}
        />

        <p
          className="absolute z-20 text-[#2E261D]/60"
          style={{
            left: "24.25%",
            top: "73.73%",
            width: "13.81%",
            height: "0.63%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
          }}
        >
          Краткое описание картинки
        </p>

        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "13.91%",
            top: "77.07%",
            width: "35.04%",
            height: "15.87%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
          }}
        >
          В поисках распустившихся цветов пчелы могут летать на расстояние до трех километров. На цветах пчелы собирают нектар, который, находясь в медовом зобу, ферментируется. Здесь расщепляются сложные углеводы, удаляется влага. Вообще, преобразование нектара в мед является сложнейшим химическим процессом. Нектар перекладывается из ячейки в ячейку большое количество раз, что позволяет полностью избавиться от влаги. Используя крылья, пчелы вентилируют соты, создавая оптимальную температуру для «созревания» меда. После окончания этих сложных процессов в сотах образуется мед. Его пчелы запечатывают, покрывая тонким слоем воска. Чтобы получилось 100 г меда, понадобится собрать нектар с миллиона цветов. Эти данные позволяют представить, насколько тяжелым является труд этих маленьких насекомых. Они в буквальном смысле собирают мед по капельке. Но благодаря тому, что десятитысячные семьи являются единым организмом, они способны радовать пчеловода хорошим взятком.
        </p>

        <button
          type="button"
          className="absolute z-20 bg-[#C65A32] text-white rounded-full"
          style={{
            left: "13.89%",
            top: "95.17%",
            width: "9.24%",
            height: "1.82%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1,
          }}
        >
          Поделиться
        </button>

        {/* Lower right frame + image + text */}
        <div
          className="absolute z-10"
          style={{
            left: "50.69%",
            top: "76.80%",
            width: "33.89%",
            height: "16.26%",
            border: `${TYPOGRAPHY_CONFIG.lineStrokeWidth} solid #C65A32`,
          }}
        />

        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={bottomImage}
          alt="Нижнее изображение"
          loading="lazy"
          decoding="async"
          className="absolute z-20 object-cover"
          style={{
            left: "52.15%",
            top: "77.82%",
            width: "30.97%",
            height: "12.57%",
          }}
        />

        <p
          className="absolute z-20 text-[#2E261D]"
          style={{
            left: "50.72%",
            top: "58.48%",
            width: "34.77%",
            height: "16.81%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
            lineHeight: 1.2,
          }}
        >
          Проверяя пчел, необходимо обращать внимание на соты. Они проверяются на наличие каких-либо повреждений. Соты должны быть ровными и красивыми. Если это не так, пчелы могут не захотеть хранить здесь мед. Для яиц матка тоже выбирает только хорошие соты. Таким образом, поврежденные рамки не приносят никакой прибыли. Они просто стоят, занимая место в улье. В таких ситуациях необходимо заменить вощину. Обычно она продается в специализированных магазинах. На пустой рамке натягивается стальная проволока. К ней прикладывается лист вощины. При помощи специального инструмента проволока вдавливается в воск. Нужно знать, новая вощина – это далеко не новые соты. Это лишь их основа. Пчелам здесь придется поработать, чтобы получить полноценные ячейки. Выбирая рамки при откачке, следить нужно не только за медом, но и за личинками, которые не закрыты воском. Вращаясь на большой скорости в медогонке, они вылетают и погибают. Нужно знать, личинки, которым уже несколько дней, достаточно большие.
        </p>

        <p
          className="absolute z-20 text-[#2E261D]/60"
          style={{
            left: "60.71%",
            top: "91.51%",
            width: "13.81%",
            height: "0.63%",
            fontFamily: FONT_FAMILIES.body,
            fontSize: FONT_SIZES.body,
          }}
        >
          Краткое описание картинки
        </p>
      </div>
    </section>
  );
};

export default BlogSlide2;
