Vue.component('error', {
  props: ['errorName', 'errorMessage', 'errorDescription'],
  template: `
    <section class="error">
        <h2 class="error-title">Ошибка загрузки данных!!!</h2>
        <h3>Имя ошибки: {{errorName}}</h3>
        <p>Сообщение ошибки: {{errorMessage}}</p>
        <p>Описание: {{errorDescription}}</p>
    </section>
  `
});