new Vue({
  // the root elemnet

  el: '#app',

  // initial state

  data: {
    textInput: '',
  },

  // methods that will use state to get data from server or anywhere
  // is u use state inside the function, the function will be trigger when state is changed
  // if u define a function without any state calling inside there,
  // the function will trigger just first time (like use effect in reactjs)

  computed: {
    identicon: function () {
      return jdenticon.toSvg(this.textInput, 200);
    },
    textInputUpper: function () {
      return this.textInput.toUpperCase();
    },
    test: function () {
      console.log('initial functions will run');
    },
  },

  // methods is for updating the state

  methods: {
    onInput: function (event) {
      this.textInput = event.target.value;
    },
  },

  // template is for showing some markup
  // you could use them inside the html file

  template: `
    <div>
      <h3>My Identicon generator</h3>
      <div>Input: <input v-on:input="onInput" /></div>
      <div>output: {{ textInput }} <div v-html="identicon" /></div>
      <div>output: {{ textInput.length > 0 ? 'writing' : 'none' }}</div>
      <div>{{ test }}</div>
      
      <!-- don't use the logic javascript in the template you can use it in the computed object by defining a new function -->
      
      <div>{{ textInput.toUpperCase() }}</div>
      
      <!-- use this method -->
      
      <div>{{ textInputUpper }}</div>
    </div>
  `,
});
