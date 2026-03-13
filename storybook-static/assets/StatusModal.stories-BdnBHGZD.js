import{w as x,x as q,A as L,g as V,h as G,T as Z,D as $,o as u,c as m,f as t,C as B,a as S,t as i,r as n}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as y}from"./PrimaryButton-BT9BxVL5.js";const R={key:0,class:"fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-gray-900/50 backdrop-blur-sm"},H={class:"relative w-full max-w-sm mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl"},U={class:"px-6 py-8 text-center"},J={key:0,class:"space-y-4"},K={class:"text-base font-semibold text-gray-800"},Q={class:"mt-1 text-sm text-gray-500"},W={class:"mx-auto w-4/5"},X={class:"h-2 w-full overflow-hidden rounded-full bg-gray-200"},Y={class:"mt-1.5 text-xs text-gray-400"},tt={key:1,class:"space-y-4"},et={class:"text-base font-semibold text-gray-800"},st={class:"mt-1 text-sm text-gray-500"},ot={key:2,class:"space-y-4"},at={class:"text-base font-semibold text-gray-800"},rt={class:"mt-1 text-sm text-gray-500"},g={__name:"StatusModal",props:{show:{type:Boolean,default:!1},status:{type:String,default:"loading"},title:{type:String,default:""},message:{type:String,default:""},autoCloseDelay:{type:Number,default:1500}},emits:["close"],setup(e,{emit:c}){const a=e,l=c,s=n(0);let d=null;function k(){s.value=0,clearInterval(d),d=setInterval(()=>{s.value<30?s.value+=3:s.value<60?s.value+=2:s.value<85?s.value+=.5:s.value<92&&(s.value+=.15)},200)}function N(){clearInterval(d),s.value=100}function z(){clearInterval(d),s.value=0}x(()=>a.status,(r,o)=>{r==="loading"?k():o==="loading"&&(r==="success"||r==="error")&&N()}),x(()=>a.show,r=>{r&&a.status==="loading"&&k(),r||z()}),x(()=>a.status,r=>{r==="success"&&a.autoCloseDelay>0&&setTimeout(()=>l("close"),a.autoCloseDelay)}),q(()=>clearInterval(d));const w={primary:"linear-gradient(to right, #0A1E44, #093F87, #1565C0)",error:"linear-gradient(to right, #dc2626, #ef4444, #f87171)"};return(r,o)=>(u(),L($,{to:"body"},[V(Z,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:G(()=>[e.show?(u(),m("div",R,[t("div",H,[t("div",{class:"h-1",style:B({background:e.status==="error"?w.error:w.primary})},null,4),e.status==="error"?(u(),m("button",{key:0,onClick:o[0]||(o[0]=O=>l("close")),class:"absolute top-3 right-3 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"},[...o[2]||(o[2]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1)])])):S("",!0),t("div",U,[e.status==="loading"?(u(),m("div",J,[o[3]||(o[3]=t("div",{class:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"},[t("svg",{class:"h-7 w-7 animate-spin text-primary",viewBox:"0 0 24 24",fill:"none"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"3"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})])],-1)),t("div",null,[t("h3",K,i(e.title),1),t("p",Q,i(e.message),1)]),t("div",W,[t("div",X,[t("div",{class:"h-full rounded-full transition-all duration-300 ease-out",style:B({width:s.value+"%",background:w.primary})},null,4)]),t("p",Y,i(Math.round(s.value))+"%",1)])])):e.status==="success"?(u(),m("div",tt,[o[4]||(o[4]=t("div",{class:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50"},[t("svg",{class:"h-7 w-7 text-green-500",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])],-1)),t("div",null,[t("h3",et,i(e.title),1),t("p",st,i(e.message),1)])])):e.status==="error"?(u(),m("div",ot,[o[5]||(o[5]=t("div",{class:"mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50"},[t("svg",{class:"h-7 w-7 text-red-500",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})])],-1)),t("div",null,[t("h3",at,i(e.title),1),t("p",rt,i(e.message),1)]),t("button",{onClick:o[1]||(o[1]=O=>l("close")),class:"mt-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"}," Fechar ")])):S("",!0)])])])):S("",!0)]),_:1})]))}},it={title:"Overlays/StatusModal",component:g,tags:["autodocs"],argTypes:{show:{control:"boolean"},status:{control:"select",options:["loading","success","error"],description:"Current status: loading, success, or error"},title:{control:"text"},message:{control:"text"},autoCloseDelay:{control:"number",description:"Delay in ms before auto-closing on success (0 to disable)"}}},v=()=>({components:{StatusModal:g,PrimaryButton:y},setup(){return{show:n(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Iniciar Carregamento</PrimaryButton>
      <StatusModal
        :show="show"
        status="loading"
        title="Gerando relatório..."
        message="Aguarde enquanto o documento é processado."
        @close="show = false"
      />
      <p class="mt-2 text-xs text-gray-400">Feche manualmente via DevTools ou recarregue.</p>
    </div>
  `}),h=()=>({components:{StatusModal:g,PrimaryButton:y},setup(){return{show:n(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Mostrar Sucesso</PrimaryButton>
      <StatusModal
        :show="show"
        status="success"
        title="Relatório gerado!"
        message="O download começará automaticamente."
        :auto-close-delay="0"
        @close="show = false"
      />
    </div>
  `}),f=()=>({components:{StatusModal:g,PrimaryButton:y},setup(){return{show:n(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Mostrar Erro</PrimaryButton>
      <StatusModal
        :show="show"
        status="error"
        title="Erro ao gerar relatório"
        message="Não foi possível conectar ao servidor. Tente novamente mais tarde."
        @close="show = false"
      />
    </div>
  `}),p=()=>({components:{StatusModal:g,PrimaryButton:y},setup(){const e=n(!1),c=n("loading"),a=n(""),l=n("");function s(){e.value=!0,c.value="loading",a.value="Processando...",l.value="Aguarde enquanto processamos sua solicitação.",setTimeout(()=>{c.value="success",a.value="Concluído!",l.value="Operação realizada com sucesso."},3e3)}return{show:e,status:c,title:a,message:l,start:s}},template:`
    <div>
      <PrimaryButton @click="start">Simular Fluxo Completo</PrimaryButton>
      <StatusModal
        :show="show"
        :status="status"
        :title="title"
        :message="message"
        :auto-close-delay="2000"
        @close="show = false"
      />
    </div>
  `});var M,b,P;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  components: {
    StatusModal,
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
      <PrimaryButton @click="show = true">Iniciar Carregamento</PrimaryButton>
      <StatusModal
        :show="show"
        status="loading"
        title="Gerando relatório..."
        message="Aguarde enquanto o documento é processado."
        @close="show = false"
      />
      <p class="mt-2 text-xs text-gray-400">Feche manualmente via DevTools ou recarregue.</p>
    </div>
  \`
})`,...(P=(b=v.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var C,E,F;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    StatusModal,
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
      <PrimaryButton @click="show = true">Mostrar Sucesso</PrimaryButton>
      <StatusModal
        :show="show"
        status="success"
        title="Relatório gerado!"
        message="O download começará automaticamente."
        :auto-close-delay="0"
        @close="show = false"
      />
    </div>
  \`
})`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,D,j;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
  components: {
    StatusModal,
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
      <PrimaryButton @click="show = true">Mostrar Erro</PrimaryButton>
      <StatusModal
        :show="show"
        status="error"
        title="Erro ao gerar relatório"
        message="Não foi possível conectar ao servidor. Tente novamente mais tarde."
        @close="show = false"
      />
    </div>
  \`
})`,...(j=(D=f.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var I,_,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  components: {
    StatusModal,
    PrimaryButton
  },
  setup() {
    const show = ref(false);
    const status = ref('loading');
    const title = ref('');
    const message = ref('');
    function start() {
      show.value = true;
      status.value = 'loading';
      title.value = 'Processando...';
      message.value = 'Aguarde enquanto processamos sua solicitação.';
      setTimeout(() => {
        status.value = 'success';
        title.value = 'Concluído!';
        message.value = 'Operação realizada com sucesso.';
      }, 3000);
    }
    return {
      show,
      status,
      title,
      message,
      start
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="start">Simular Fluxo Completo</PrimaryButton>
      <StatusModal
        :show="show"
        :status="status"
        :title="title"
        :message="message"
        :auto-close-delay="2000"
        @close="show = false"
      />
    </div>
  \`
})`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const ut=["Loading","SuccessStatus","ErrorStatus","FullFlow"];export{f as ErrorStatus,p as FullFlow,v as Loading,h as SuccessStatus,ut as __namedExportsOrder,it as default};
