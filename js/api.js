const getData = async(onSuccess, onFail) => {
  await fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось загрузить данные');
      }
    })
    .catch(() => {
      onFail('Не удалось загрузить данные');
    });
};

const sendData = async(onSuccess, onFail, body) => {
  await fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
