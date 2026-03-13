import{c as s,f as t,b as d,t as a,a as u,o}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./TextInput-BB8kPWEV.js";import{_ as b}from"./InputLabel-CL2VxZvZ.js";import{_ as f}from"./PrimaryButton-BT9BxVL5.js";const L={class:"flex min-h-screen"},S={class:"hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center relative overflow-hidden",style:{background:"linear-gradient(135deg, #0A1E44 0%, #093F87 50%, #061633 100%)"}},I={class:"flex flex-col items-center px-12 text-center relative z-10 brand-enter"},_={key:0,class:"mb-10 rounded-3xl p-8 shadow-2xl logo-card",style:{background:"rgba(255,255,255,0.95)","backdrop-filter":"blur(12px)"}},B=["src","alt"],G={class:"text-3xl font-bold text-white mb-3 tracking-tight"},T={key:0,class:"text-sm max-w-xs leading-relaxed",style:{color:"rgba(255,255,255,0.6)"}},P={class:"absolute bottom-6 text-xs",style:{color:"rgba(255,255,255,0.25)"}},k={class:"flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:w-1/2",style:{background:"#f3f4f6"}},E={class:"mb-8 flex flex-col items-center lg:hidden mobile-enter"},N=["src","alt"],A={class:"text-xl font-bold",style:{color:"#093F87"}},C={class:"w-full max-w-md form-enter"},F={class:"overflow-hidden rounded-2xl bg-white",style:{"box-shadow":"0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)"}},O={class:"px-8 py-8"},Z={class:"mt-6 text-center text-xs text-gray-400"},$={__name:"GuestLayout",props:{appName:{type:String,default:"App"},appSubtitle:{type:String,default:""},logoSrc:{type:String,default:""},copyrightOwner:{type:String,default:"Grupo BTZ"}},setup(e){return(c,n)=>(o(),s("div",L,[t("div",S,[n[1]||(n[1]=t("div",{class:"absolute rounded-full blur-3xl opacity-20",style:{width:"400px",height:"400px",background:"radial-gradient(circle, #1565C0, transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1)),t("div",I,[d(c.$slots,"logo",{},()=>[e.logoSrc?(o(),s("div",_,[t("img",{src:e.logoSrc,alt:e.appName,class:"h-28 w-auto"},null,8,B)])):u("",!0)],!0),t("h1",G,a(e.appName),1),n[0]||(n[0]=t("div",{class:"mx-auto mb-6 h-1 w-16 rounded-full glow-bar",style:{background:"#1565C0"}},null,-1)),e.appSubtitle?(o(),s("p",T,a(e.appSubtitle),1)):u("",!0)]),t("p",P," © "+a(new Date().getFullYear())+" "+a(e.copyrightOwner),1)]),t("div",k,[t("div",E,[e.logoSrc?(o(),s("img",{key:0,src:e.logoSrc,alt:e.appName,class:"h-16 w-auto mb-3"},null,8,N)):u("",!0),t("span",A,a(e.appName),1)]),t("div",C,[t("div",F,[n[2]||(n[2]=t("div",{class:"h-1.5",style:{background:"linear-gradient(to right, #0A1E44, #093F87, #1565C0)"}},null,-1)),t("div",O,[d(c.$slots,"default",{},void 0,!0)])]),t("p",Z," © "+a(new Date().getFullYear())+" "+a(e.copyrightOwner),1)])])]))}},i=w($,[["__scopeId","data-v-0a1c6186"]]),R={title:"Layouts/GuestLayout",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{appName:{control:"text"},appSubtitle:{control:"text"},logoSrc:{control:"text"},copyrightOwner:{control:"text"}}},r=()=>({components:{GuestLayout:i,TextInput:v,InputLabel:b,PrimaryButton:f},template:`
    <GuestLayout
      app-name="JaguaReport"
      app-subtitle="Plataforma centralizada de relatórios empresariais"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-gray-900">Bem-vindo de volta</h2>
          <p class="text-sm text-gray-500 mt-1">Acesse sua conta para continuar</p>
        </div>
        <div>
          <InputLabel value="E-mail" :required="true" />
          <TextInput type="email" placeholder="seu@email.com" />
        </div>
        <div>
          <InputLabel value="Senha" :required="true" />
          <TextInput type="password" placeholder="••••••••" />
        </div>
        <PrimaryButton class="w-full">Entrar</PrimaryButton>
      </div>
    </GuestLayout>
  `}),l=()=>({components:{GuestLayout:i,TextInput:v,InputLabel:b,PrimaryButton:f},template:`
    <GuestLayout
      app-name="e-Jagua"
      app-subtitle="Sistema de gestão integrada"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <h2 class="text-xl font-bold text-gray-900 text-center">Login</h2>
        <div>
          <InputLabel value="Usuário" />
          <TextInput placeholder="Nome de usuário" />
        </div>
        <div>
          <InputLabel value="Senha" />
          <TextInput type="password" placeholder="Senha" />
        </div>
        <PrimaryButton class="w-full">Acessar</PrimaryButton>
      </div>
    </GuestLayout>
  `});var p,m,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    GuestLayout,
    TextInput,
    InputLabel,
    PrimaryButton
  },
  template: \`
    <GuestLayout
      app-name="JaguaReport"
      app-subtitle="Plataforma centralizada de relatórios empresariais"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold text-gray-900">Bem-vindo de volta</h2>
          <p class="text-sm text-gray-500 mt-1">Acesse sua conta para continuar</p>
        </div>
        <div>
          <InputLabel value="E-mail" :required="true" />
          <TextInput type="email" placeholder="seu@email.com" />
        </div>
        <div>
          <InputLabel value="Senha" :required="true" />
          <TextInput type="password" placeholder="••••••••" />
        </div>
        <PrimaryButton class="w-full">Entrar</PrimaryButton>
      </div>
    </GuestLayout>
  \`
})`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,y,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    GuestLayout,
    TextInput,
    InputLabel,
    PrimaryButton
  },
  template: \`
    <GuestLayout
      app-name="e-Jagua"
      app-subtitle="Sistema de gestão integrada"
      copyright-owner="Grupo BTZ"
    >
      <div class="space-y-5">
        <h2 class="text-xl font-bold text-gray-900 text-center">Login</h2>
        <div>
          <InputLabel value="Usuário" />
          <TextInput placeholder="Nome de usuário" />
        </div>
        <div>
          <InputLabel value="Senha" />
          <TextInput type="password" placeholder="Senha" />
        </div>
        <PrimaryButton class="w-full">Acessar</PrimaryButton>
      </div>
    </GuestLayout>
  \`
})`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const U=["LoginPage","CustomBranding"];export{l as CustomBranding,r as LoginPage,U as __namedExportsOrder,R as default};
