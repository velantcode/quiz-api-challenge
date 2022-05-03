import { checkObjectId, checkTitlesOrDescriptions } from '../Functions/Validations';

const getErrorForm = () => ({ error: 'Disculpe, pero no se logró obtener los datos del formulario.' });

export function quizValidate(data) {
  const ret = {
    data: {
      title: '',
      description: '',
      questions: [],
    },
    errors: [],
  };

  if (!data) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  const { title, description, questions } = data;

  if (!checkTitlesOrDescriptions(title)) {
    ret.errors.push({
      input: 'title',
      error: 'Disculpe, pero debe indicar el título para el Quiz.',
    });
  } else ret.data.title = `${title}`.trim().toUpperCase();

  if (description) {
    if (!checkTitlesOrDescriptions(description)) {
      ret.errors.push({
        input: 'description',
        error: 'Disculpe, pero debe indicar una descripción válida para el quiz. Debe contener al menos 5 caracteres.',
      });
    } else ret.data.description = `${description}`.trim();
  }

  // questions check
  if (!Array.isArray(questions)) {
    ret.errors.push({
      input: 'questions',
      error: 'Disculpe, pero no se logró recibir las preguntas para el Quiz.',
    });
  } else if (questions?.length === 0) {
    ret.errors.push({
      input: 'questions',
      error: 'Disculpe, pero debe cargar al menos una pregunta para el quiz con sus respectivas respuestas.',
    });
  } else {
    const { length } = questions;

    for (let i = 0; i < length; i += 1) {
      if (typeof questions[i] === 'object') {
        /* title */
        if (!checkTitlesOrDescriptions(questions[i].question)) {
          ret.errors.push({
            input: `question[${i}].question`,
            error: `Disculpe, pero debe indicar un título para la pregunta: ${i + 1}.`,
          });
          break;
        }

        /* values */
        if (!Array.isArray(questions[i].values)) {
          ret.errors.push({
            input: `question[${i}].values`,
            error: `Disculpe, pero debe indicar las posibles respuestas para la pregunta: ${i + 1}.`,
          });
          break;
        } else if (questions[i].values.length < 2) {
          ret.errors.push({
            input: `question[${i}].values`,
            error: `Disculpe, pero debe indicar al menos 2 respuestas para la pregunta: ${i + 1}.`,
          });
          break;
        }

        if (!/[0-9]{1}/.test(`${questions[i].answer}`) || !questions[i]?.values[questions[i].answer]) {
          ret.errors.push({
            input: `question[${i}].answer`,
            error: `Disculpe, pero debe indicar la respuesta para la pregunta: ${i + 1}.`,
          });
          break;
        }

        ret.data.questions.push({
          question: questions[i].question.trim().toUpperCase(),
          values: questions[i].values,
          answer: questions[i].answer,
        });
      }
    }
  }

  return ret;
}

export function quizAnswerValidate({ answers }) {
  const ret = {
    data: {
      answers: [],
    },
    errors: [],
  };

  if (!answers) {
    ret.errors.push(getErrorForm());
    return ret;
  }

  // answer check
  if (!Array.isArray(answers)) {
    ret.errors.push({
      input: 'answers',
      error: 'Disculpe, pero no se logró recibir las respuestas del Quiz.',
    });
  } else if (answers?.length === 0) {
    ret.errors.push({
      input: 'answers',
      error: 'Disculpe, pero no se recibieron las respuestas del Quiz.',
    });
  } else {
    const { length } = answers;

    for (let i = 0; i < length; i += 1) {
      if (typeof answers[i] === 'object') {
        if (!checkObjectId(answers[i]._id)) {
          ret.errors.push({
            input: 'answers',
            error: 'Disculpe, uno de los valores recibidos es incorrecto.',
          });
          break;
        }

        if (!/[0-9]{1}/.test(`${answers[i].answer}`)) {
          ret.errors.push({
            input: 'answers',
            error: `Disculpe, pero debe debe indicar la respuesta a la pregunta: ${i + 1}.`,
          });
          break;
        }

        ret.data.answers.push({
          _id: answers[i]._id,
          answer: answers[i].answer,
        });
      }
    }
  }

  return ret;
}

export default { quizValidate, quizAnswerValidate };
