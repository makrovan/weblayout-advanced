import { validateForms } from '../functions/validate-forms';

const rules1 = [
  // {
  //   ruleSelector: '.input-name',
  //   rules: [
  //     {
  //       rule: 'minLength',
  //       value: 3
  //     },
  //     {
  //       rule: 'required',
  //       value: true,
  //       errorMessage: 'Заполните имя!'
  //     }
  //   ]
  // },
  // {
  //   ruleSelector: '.input-tel',
  //   tel: true,
  //   telError: 'Введите корректный телефон',
  //   rules: [
  //     {
  //       rule: 'required',
  //       value: true,
  //       errorMessage: 'Заполните телефон!'
  //     }
  //   ]
  // },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните E-mail!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный E-mail!'
      },
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.about__form', rules1, afterForm);

const rules2 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните E-mail!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный E-mail!'
      },
    ]
  },
];

validateForms('.contacts__form', rules2, afterForm);
