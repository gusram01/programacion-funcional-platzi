import './styles.css';

// const compose = (...functions) => (data) =>
//   functions.reduceRight((value, func) => func(value), data);

const form = document.getElementById('form') as HTMLFormElement;

const validateInputs = (ele: HTMLInputElement) => {
  ele.value === '' &&
    (ele.classList.add('invalid'),
    window.setTimeout(() => ele.classList.remove('invalid'), 600));
  return { id: ele.id, value: ele.value };
};

const listener = (e: Event) => {
  e.preventDefault();
  const element = e.target as HTMLFormElement;
  const arr = Object.values(element).map(validateInputs).slice(0, 4);
  const flag = arr.every((ele) => ele.value !== '');
  // const { description, calories, carbs, protein } = element;

  if (flag) {
    console.log('OK');
    console.log(arr);
  }
};

form.addEventListener('submit', listener);
