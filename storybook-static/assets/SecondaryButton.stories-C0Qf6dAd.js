import{_ as e}from"./SecondaryButton-DbiOMrFJ.js";import"./vue.esm-bundler-BtlEUpW_.js";const h={title:"Buttons/SecondaryButton",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:["button","submit","reset"]},default:{control:"text",description:"Button label (slot content)"}}},v=g=>({components:{SecondaryButton:e},setup(){return{args:g}},template:'<SecondaryButton v-bind="args">{{ args.default }}</SecondaryButton>'}),t=v.bind({});t.args={default:"Cancelar",type:"button"};const n=()=>({components:{SecondaryButton:e},template:"<SecondaryButton disabled>Desativado</SecondaryButton>"}),o=()=>({components:{SecondaryButton:e},template:`
    <SecondaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      Fechar
    </SecondaryButton>
  `}),a=()=>({components:{SecondaryButton:e},template:`
    <div class="flex flex-wrap items-center gap-4">
      <SecondaryButton>Normal</SecondaryButton>
      <SecondaryButton disabled>Desativado</SecondaryButton>
    </div>
  `});var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    SecondaryButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<SecondaryButton v-bind="args">{{ args.default }}</SecondaryButton>\`
})`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,u,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    SecondaryButton
  },
  template: \`<SecondaryButton disabled>Desativado</SecondaryButton>\`
})`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    SecondaryButton
  },
  template: \`
    <SecondaryButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      Fechar
    </SecondaryButton>
  \`
})`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var B,S,y;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    SecondaryButton
  },
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <SecondaryButton>Normal</SecondaryButton>
      <SecondaryButton disabled>Desativado</SecondaryButton>
    </div>
  \`
})`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const x=["Default","Disabled","WithIcon","AllVariants"];export{a as AllVariants,t as Default,n as Disabled,o as WithIcon,x as __namedExportsOrder,h as default};
