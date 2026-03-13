import{c as v,b as _,o as x}from"./vue.esm-bundler-BtlEUpW_.js";const h=["type"],e={__name:"SuccessButton",props:{type:{type:String,default:"button"}},setup(c){return(f,y)=>(x(),v("button",{type:c.type,class:"inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(4,120,87,0.35)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_4px_14px_0_rgba(4,120,87,0.45)] disabled:opacity-50 disabled:cursor-not-allowed",style:{background:"linear-gradient(135deg, #047857 0%, #059669 100%)"}},[_(f.$slots,"default")],8,h))}},D={title:"Buttons/SuccessButton",component:e,tags:["autodocs"],argTypes:{type:{control:"select",options:["button","submit","reset"]},default:{control:"text",description:"Button label (slot content)"}}},w=c=>({components:{SuccessButton:e},setup(){return{args:c}},template:'<SuccessButton v-bind="args">{{ args.default }}</SuccessButton>'}),t=w.bind({});t.args={default:"Confirmar",type:"button"};const s=()=>({components:{SuccessButton:e},template:"<SuccessButton disabled>Desativado</SuccessButton>"}),o=()=>({components:{SuccessButton:e},template:`
    <SuccessButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      Aprovado
    </SuccessButton>
  `}),n=()=>({components:{SuccessButton:e},template:`
    <div class="flex flex-wrap items-center gap-4">
      <SuccessButton>Normal</SuccessButton>
      <SuccessButton disabled>Desativado</SuccessButton>
    </div>
  `});var a,r,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    SuccessButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<SuccessButton v-bind="args">{{ args.default }}</SuccessButton>\`
})`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    SuccessButton
  },
  template: \`<SuccessButton disabled>Desativado</SuccessButton>\`
})`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,B;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    SuccessButton
  },
  template: \`
    <SuccessButton>
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      Aprovado
    </SuccessButton>
  \`
})`,...(B=(m=o.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var S,g,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    SuccessButton
  },
  template: \`
    <div class="flex flex-wrap items-center gap-4">
      <SuccessButton>Normal</SuccessButton>
      <SuccessButton disabled>Desativado</SuccessButton>
    </div>
  \`
})`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const A=["Default","Disabled","WithIcon","AllVariants"];export{n as AllVariants,t as Default,s as Disabled,o as WithIcon,A as __namedExportsOrder,D as default};
