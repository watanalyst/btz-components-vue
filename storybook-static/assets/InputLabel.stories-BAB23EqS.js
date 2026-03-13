import{_ as e}from"./InputLabel-CL2VxZvZ.js";import"./vue.esm-bundler-BtlEUpW_.js";const q={title:"Form/InputLabel",component:e,tags:["autodocs"],argTypes:{value:{control:"text",description:"Label text via prop"},required:{control:"boolean",description:"Shows red asterisk when true"}}},a=()=>({components:{InputLabel:e},template:'<InputLabel value="Nome completo" />'}),t=()=>({components:{InputLabel:e},template:'<InputLabel value="E-mail" :required="true" />'}),o=()=>({components:{InputLabel:e},template:"<InputLabel>Texto via slot</InputLabel>"}),n=()=>({components:{InputLabel:e},template:`
    <div class="space-y-2">
      <InputLabel value="Campo normal" />
      <InputLabel value="Campo obrigatório" :required="true" />
      <InputLabel>Via slot</InputLabel>
    </div>
  `});var r,p,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => ({
  components: {
    InputLabel
  },
  template: \`<InputLabel value="Nome completo" />\`
})`,...(s=(p=a.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var l,u,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    InputLabel
  },
  template: \`<InputLabel value="E-mail" :required="true" />\`
})`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,i,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => ({
  components: {
    InputLabel
  },
  template: \`<InputLabel>Texto via slot</InputLabel>\`
})`,...(b=(i=o.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var d,L,I;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    InputLabel
  },
  template: \`
    <div class="space-y-2">
      <InputLabel value="Campo normal" />
      <InputLabel value="Campo obrigatório" :required="true" />
      <InputLabel>Via slot</InputLabel>
    </div>
  \`
})`,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const x=["Default","Required","WithSlot","AllVariants"];export{n as AllVariants,a as Default,t as Required,o as WithSlot,x as __namedExportsOrder,q as default};
