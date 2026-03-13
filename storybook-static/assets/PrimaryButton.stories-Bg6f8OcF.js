import{_ as o}from"./PrimaryButton-BT9BxVL5.js";import"./vue.esm-bundler-BtlEUpW_.js";const D={title:"Buttons/PrimaryButton",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["button","submit","reset"],description:"HTML button type attribute"},default:{control:"text",description:"Button label (slot content)"}}},k=s=>({components:{PrimaryButton:o},setup(){return{args:s}},template:'<PrimaryButton v-bind="args">{{ args.default }}</PrimaryButton>'}),t=k.bind({});t.args={default:"Salvar",type:"button"};const r=k.bind({});r.args={default:"Enviar Formulário",type:"submit"};const n=s=>({components:{PrimaryButton:o},setup(){return{args:s}},template:'<PrimaryButton v-bind="args" disabled>Desativado</PrimaryButton>'});n.args={type:"button"};const e=()=>({components:{PrimaryButton:o},template:`
    <PrimaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Novo Item
    </PrimaryButton>
  `}),a=()=>({components:{PrimaryButton:o},template:`
    <div class="flex flex-wrap items-center gap-4">
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton disabled>Desativado</PrimaryButton>
      <PrimaryButton>
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Exportar
      </PrimaryButton>
    </div>
  `});var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    PrimaryButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<PrimaryButton v-bind="args">{{ args.default }}</PrimaryButton>\`
})`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    PrimaryButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<PrimaryButton v-bind="args">{{ args.default }}</PrimaryButton>\`
})`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,y,B;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    PrimaryButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<PrimaryButton v-bind="args" disabled>Desativado</PrimaryButton>\`
})`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var P,g,v;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  components: {
    PrimaryButton
  },
  template: \`
    <PrimaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Novo Item
    </PrimaryButton>
  \`
})`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => ({
  components: {
    PrimaryButton
  },
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton disabled>Desativado</PrimaryButton>
      <PrimaryButton>
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Exportar
      </PrimaryButton>
    </div>
  \`
})`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Default","Submit","Disabled","WithIcon","AllVariants"];export{a as AllVariants,t as Default,n as Disabled,r as Submit,e as WithIcon,S as __namedExportsOrder,D as default};
