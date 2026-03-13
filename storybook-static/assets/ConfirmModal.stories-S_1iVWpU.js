import{A as $,h as p,o as r,f as t,n as x,c as u,t as a,g as j,z as V,C as _,r as f}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as z}from"./Modal-C5WiJlBb.js";import{_ as Z}from"./SecondaryButton-DbiOMrFJ.js";import{_ as g}from"./PrimaryButton-BT9BxVL5.js";const O={class:"p-6"},T={class:"flex items-start gap-4"},D={key:0,class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},N={key:1,class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},q={key:2,class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},H={class:"flex-1"},I={class:"text-base font-semibold text-gray-900"},W={class:"mt-2 text-sm text-gray-600"},F={class:"mt-6 flex justify-end gap-3"},c={__name:"ConfirmModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:"Confirmar ação"},message:{type:String,default:""},confirmLabel:{type:String,default:"Confirmar"},cancelLabel:{type:String,default:"Cancelar"},variant:{type:String,default:"danger"}},emits:["confirm","cancel"],setup(e,{emit:S}){const m=S,o={danger:{bar:"bg-red-500",icon:"bg-red-100 text-red-600",gradient:"linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",shadow:"rgba(220,38,38,0.35)"},success:{bar:"bg-green-500",icon:"bg-green-100 text-green-600",gradient:"linear-gradient(135deg, #059669 0%, #10b981 100%)",shadow:"rgba(5,150,105,0.35)"},warning:{bar:"bg-amber-500",icon:"bg-amber-100 text-amber-600",gradient:"linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",shadow:"rgba(217,119,6,0.35)"}};return(G,n)=>(r(),$(z,{show:e.show,"max-width":"md",onClose:n[2]||(n[2]=d=>m("cancel"))},{default:p(()=>{var d,h,w,v;return[t("div",{class:x(["h-1.5 rounded-t-lg",(d=o[e.variant])==null?void 0:d.bar])},null,2),t("div",O,[t("div",T,[t("div",{class:x(["flex h-10 w-10 shrink-0 items-center justify-center rounded-full",(h=o[e.variant])==null?void 0:h.icon])},[e.variant==="danger"?(r(),u("svg",D,[...n[3]||(n[3]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"},null,-1)])])):e.variant==="warning"?(r(),u("svg",N,[...n[4]||(n[4]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"},null,-1)])])):(r(),u("svg",q,[...n[5]||(n[5]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},null,-1)])]))],2),t("div",H,[t("h3",I,a(e.title),1),t("p",W,a(e.message),1)])]),t("div",F,[j(Z,{onClick:n[0]||(n[0]=L=>m("cancel"))},{default:p(()=>[V(a(e.cancelLabel),1)]),_:1}),t("button",{type:"button",onClick:n[1]||(n[1]=L=>m("confirm")),class:"inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110",style:_({background:(w=o[e.variant])==null?void 0:w.gradient,boxShadow:`0 4px 14px 0 ${(v=o[e.variant])==null?void 0:v.shadow}`})},a(e.confirmLabel),5)])])]}),_:1},8,["show"]))}},U={title:"Overlays/ConfirmModal",component:c,tags:["autodocs"],argTypes:{show:{control:"boolean"},title:{control:"text"},message:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},variant:{control:"select",options:["danger","success","warning"],description:"Visual variant that controls colors and icon"}}},s=()=>({components:{ConfirmModal:c,PrimaryButton:g},setup(){return{show:f(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Excluir Item</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Excluir registro?"
        message="Esta ação não pode ser desfeita. O registro será removido permanentemente."
        confirm-label="Excluir"
        variant="danger"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `}),i=()=>({components:{ConfirmModal:c,PrimaryButton:g},setup(){return{show:f(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Ação com Aviso</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Tem certeza?"
        message="Você está prestes a alterar dados que afetam outros registros."
        confirm-label="Prosseguir"
        variant="warning"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `}),l=()=>({components:{ConfirmModal:c,PrimaryButton:g},setup(){return{show:f(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Aprovar</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Aprovar solicitação?"
        message="A solicitação será aprovada e o solicitante será notificado."
        confirm-label="Aprovar"
        variant="success"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  `});var y,b,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => ({
  components: {
    ConfirmModal,
    PrimaryButton
  },
  setup() {
    const show = ref(false);
    return {
      show
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="show = true">Excluir Item</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Excluir registro?"
        message="Esta ação não pode ser desfeita. O registro será removido permanentemente."
        confirm-label="Excluir"
        variant="danger"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  \`
})`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var C,B,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    ConfirmModal,
    PrimaryButton
  },
  setup() {
    const show = ref(false);
    return {
      show
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="show = true">Ação com Aviso</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Tem certeza?"
        message="Você está prestes a alterar dados que afetam outros registros."
        confirm-label="Prosseguir"
        variant="warning"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  \`
})`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var M,P,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  components: {
    ConfirmModal,
    PrimaryButton
  },
  setup() {
    const show = ref(false);
    return {
      show
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="show = true">Aprovar</PrimaryButton>
      <ConfirmModal
        :show="show"
        title="Aprovar solicitação?"
        message="A solicitação será aprovada e o solicitante será notificado."
        confirm-label="Aprovar"
        variant="success"
        @confirm="show = false"
        @cancel="show = false"
      />
    </div>
  \`
})`,...(A=(P=l.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const X=["Danger","Warning","Success"];export{s as Danger,l as Success,i as Warning,X as __namedExportsOrder,U as default};
