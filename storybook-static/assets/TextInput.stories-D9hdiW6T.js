import{r as o}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as e}from"./TextInput-BB8kPWEV.js";const g={title:"Form/TextInput",component:e,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"v-model bound value"},placeholder:{control:"text"},type:{control:"select",options:["text","email","password","number","tel","url"]},disabled:{control:"boolean"}}},t=()=>({components:{TextInput:e},setup(){return{value:o("")}},template:'<div class="max-w-sm"><TextInput v-model="value" placeholder="Digite algo..." /></div>'}),a=()=>({components:{TextInput:e},setup(){return{value:o("Texto preenchido")}},template:'<div class="max-w-sm"><TextInput v-model="value" /></div>'}),n=()=>({components:{TextInput:e},setup(){return{value:o("Campo desativado")}},template:'<div class="max-w-sm"><TextInput v-model="value" disabled /></div>'}),s=()=>({components:{TextInput:e},setup(){return{value:o("")}},template:'<div class="max-w-sm"><TextInput v-model="value" type="password" placeholder="Senha" /></div>'});var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    TextInput
  },
  setup() {
    const value = ref('');
    return {
      value
    };
  },
  template: \`<div class="max-w-sm"><TextInput v-model="value" placeholder="Digite algo..." /></div>\`
})`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => ({
  components: {
    TextInput
  },
  setup() {
    const value = ref('Texto preenchido');
    return {
      value
    };
  },
  template: \`<div class="max-w-sm"><TextInput v-model="value" /></div>\`
})`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var v,i,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    TextInput
  },
  setup() {
    const value = ref('Campo desativado');
    return {
      value
    };
  },
  template: \`<div class="max-w-sm"><TextInput v-model="value" disabled /></div>\`
})`,...(x=(i=n.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var T,I,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
  components: {
    TextInput
  },
  setup() {
    const value = ref('');
    return {
      value
    };
  },
  template: \`<div class="max-w-sm"><TextInput v-model="value" type="password" placeholder="Senha" /></div>\`
})`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const b=["Default","WithValue","Disabled","Password"];export{t as Default,n as Disabled,s as Password,a as WithValue,b as __namedExportsOrder,g as default};
