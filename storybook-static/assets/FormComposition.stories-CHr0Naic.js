import{r as e}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as u}from"./TextInput-BB8kPWEV.js";import{_ as p}from"./InputLabel-CL2VxZvZ.js";import{_ as d}from"./InputError-CbTPWNhx.js";import{_ as c}from"./PrimaryButton-BT9BxVL5.js";const _={title:"Form/FormComposition",tags:["autodocs"]},r=()=>({components:{TextInput:u,InputLabel:p,InputError:d,PrimaryButton:c},setup(){const o=e(""),a=e(""),n=e(""),t=e("");function s(){n.value=o.value?"":"O campo nome é obrigatório.",t.value=a.value.includes("@")?"":"Informe um e-mail válido."}return{name:o,email:a,nameError:n,emailError:t,validate:s}},template:`
    <div class="max-w-md space-y-4 rounded-xl bg-white p-6 shadow">
      <h3 class="text-lg font-semibold text-gray-900">Formulário de Exemplo</h3>
      <div>
        <InputLabel value="Nome" :required="true" />
        <TextInput v-model="name" placeholder="Seu nome completo" />
        <InputError :message="nameError" />
      </div>
      <div>
        <InputLabel value="E-mail" :required="true" />
        <TextInput v-model="email" type="email" placeholder="email@exemplo.com" />
        <InputError :message="emailError" />
      </div>
      <PrimaryButton @click="validate">Validar</PrimaryButton>
    </div>
  `});var m,l,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => ({
  components: {
    TextInput,
    InputLabel,
    InputError,
    PrimaryButton
  },
  setup() {
    const name = ref('');
    const email = ref('');
    const nameError = ref('');
    const emailError = ref('');
    function validate() {
      nameError.value = name.value ? '' : 'O campo nome é obrigatório.';
      emailError.value = email.value.includes('@') ? '' : 'Informe um e-mail válido.';
    }
    return {
      name,
      email,
      nameError,
      emailError,
      validate
    };
  },
  template: \`
    <div class="max-w-md space-y-4 rounded-xl bg-white p-6 shadow">
      <h3 class="text-lg font-semibold text-gray-900">Formulário de Exemplo</h3>
      <div>
        <InputLabel value="Nome" :required="true" />
        <TextInput v-model="name" placeholder="Seu nome completo" />
        <InputError :message="nameError" />
      </div>
      <div>
        <InputLabel value="E-mail" :required="true" />
        <TextInput v-model="email" type="email" placeholder="email@exemplo.com" />
        <InputError :message="emailError" />
      </div>
      <PrimaryButton @click="validate">Validar</PrimaryButton>
    </div>
  \`
})`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const g=["CompleteForm"];export{r as CompleteForm,g as __namedExportsOrder,_ as default};
