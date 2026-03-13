import{d as H,x as O,c as n,f as e,b as u,F as I,y as E,a as i,t as l,g as R,h as y,T as W,z as f,r as b,k as G,o as a,A as S,n as _,B as N}from"./vue.esm-bundler-BtlEUpW_.js";const J={class:"min-h-screen",style:{background:"#f5f6fa"}},K={class:"sticky top-[2px] z-20 bg-white",style:{"box-shadow":"0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"}},q={class:"mx-auto px-4 sm:px-6 lg:px-8"},Q={class:"flex h-14 items-center justify-between"},X={class:"flex items-center"},Y={class:"flex shrink-0 items-center gap-2"},Z=["src","alt"],ee={class:"hidden text-lg font-bold text-gray-800 sm:block"},te={key:0,class:"hidden sm:ml-8 sm:flex sm:items-center sm:space-x-1"},se={class:"flex items-center gap-3"},ae={class:"flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white",style:{background:"linear-gradient(135deg, #0A1E44, #093F87)"}},oe={class:"hidden sm:block text-left"},ne={class:"block text-sm font-semibold text-gray-800 leading-tight"},re={key:0,class:"block text-[11px] text-gray-400 leading-tight"},le={key:0,class:"absolute right-0 mt-2 w-52 overflow-hidden rounded-xl bg-white z-50",style:{border:"1px solid rgba(0,0,0,0.06)","box-shadow":"0 12px 48px -8px rgba(0,0,0,0.12)"}},ie={class:"px-4 py-3",style:{background:"#f8fafc","border-bottom":"1px solid rgba(0,0,0,0.04)"}},de={class:"flex items-center gap-3"},ce={class:"flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white",style:{background:"linear-gradient(135deg, #0A1E44, #093F87)"}},ue={class:"min-w-0"},pe={class:"truncate text-sm font-semibold text-gray-800"},me={key:0,class:"truncate text-[11px] text-gray-400"},xe={style:{"border-top":"1px solid rgba(0,0,0,0.04)"}},ve={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ge={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},he={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},ye={key:0,class:"sm:hidden border-t border-gray-100"},fe={class:"space-y-1 px-4 py-3"},be={key:0,class:"border-t border-gray-100 px-4 py-3"},ke={class:"flex items-center gap-3 mb-3"},we={class:"flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white",style:{background:"linear-gradient(135deg, #0A1E44, #093F87)"}},Ae={class:"text-sm font-semibold text-gray-800"},Le={key:0,class:"text-xs text-gray-400"},Ce={key:0,class:"mx-auto px-4 sm:px-6 lg:px-8 pt-4"},Ie={class:"mx-auto px-4 sm:px-6 lg:px-8 py-4"},v={__name:"AppLayout",props:{appName:{type:String,default:"App"},logoSrc:{type:String,default:""},user:{type:Object,default:null},navItems:{type:Array,default:()=>[]},linkComponent:{type:[String,Object],default:"a"}},emits:["logout"],setup(t,{emit:T}){const w=t,A=T,d=b(!1),c=b(!1),g=b(null),h=G(()=>{var s;if(!((s=w.user)!=null&&s.name))return"?";const o=w.user.name.trim().split(/\s+/);return o.length>=2?(o[0][0]+o[o.length-1][0]).toUpperCase():o[0][0].toUpperCase()});function L(o){g.value&&!g.value.contains(o.target)&&(d.value=!1)}function C(o){o.key==="Escape"&&(d.value=!1)}return H(()=>{document.addEventListener("click",L),document.addEventListener("keydown",C)}),O(()=>{document.removeEventListener("click",L),document.removeEventListener("keydown",C)}),(o,s)=>(a(),n("div",J,[s[8]||(s[8]=e("div",{class:"fixed inset-x-0 top-0 z-50 h-[2px]",style:{background:"linear-gradient(to right, #0A1E44, #093F87, #1565C0)"}},null,-1)),e("nav",K,[e("div",q,[e("div",Q,[e("div",X,[u(o.$slots,"logo",{},()=>[e("div",Y,[t.logoSrc?(a(),n("img",{key:0,src:t.logoSrc,alt:t.appName,class:"h-8 w-auto"},null,8,Z)):i("",!0),e("span",ee,l(t.appName),1)])]),t.navItems.length?(a(),n("div",te,[(a(!0),n(I,null,E(t.navItems,r=>(a(),S(N(t.linkComponent),{key:r.href,href:r.href,class:_(["px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",r.active?"text-primary bg-primary/5":"text-gray-500 hover:text-gray-700 hover:bg-gray-50"]),style:{"--tw-text-opacity":"1"}},{default:y(()=>[f(l(r.label),1)]),_:2},1032,["href","class"]))),128))])):i("",!0)]),e("div",se,[u(o.$slots,"header-right"),t.user?(a(),n("div",{key:0,ref_key:"dropdownRef",ref:g,class:"relative"},[e("button",{type:"button",class:"flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-gray-50",onClick:s[0]||(s[0]=r=>d.value=!d.value)},[e("div",ae,l(h.value),1),e("div",oe,[e("span",ne,l(t.user.name),1),t.user.subtitle?(a(),n("span",re,l(t.user.subtitle),1)):i("",!0)]),s[5]||(s[5]=e("svg",{class:"h-4 w-4 text-gray-400 hidden sm:block",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})],-1))]),R(W,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0 -translate-y-1 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 -translate-y-1 scale-95"},{default:y(()=>[d.value?(a(),n("div",le,[e("div",ie,[e("div",de,[e("div",ce,l(h.value),1),e("div",ue,[e("p",pe,l(t.user.name),1),t.user.subtitle?(a(),n("p",me,l(t.user.subtitle),1)):i("",!0)])])]),u(o.$slots,"dropdown-items"),e("div",xe,[e("button",{type:"button",onClick:s[1]||(s[1]=r=>{d.value=!1,A("logout")}),class:"flex w-full items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-red-50"},[...s[6]||(s[6]=[e("svg",{class:"h-4 w-4 text-red-500",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"})],-1),e("span",{class:"text-red-500 font-medium"},"Sair",-1)])])])])):i("",!0)]),_:3})],512)):i("",!0),e("button",{type:"button",class:"sm:hidden rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",onClick:s[2]||(s[2]=r=>c.value=!c.value)},[(a(),n("svg",ve,[c.value?(a(),n("path",he)):(a(),n("path",ge))]))])])])]),c.value?(a(),n("div",ye,[e("div",fe,[(a(!0),n(I,null,E(t.navItems,r=>(a(),S(N(t.linkComponent),{key:r.href,href:r.href,class:_(["block rounded-lg px-3 py-2 text-sm font-medium transition-colors",r.active?"text-primary bg-primary/5":"text-gray-600 hover:bg-gray-50"]),onClick:s[3]||(s[3]=Ee=>c.value=!1)},{default:y(()=>[f(l(r.label),1)]),_:2},1032,["href","class"]))),128))]),t.user?(a(),n("div",be,[e("div",ke,[e("div",we,l(h.value),1),e("div",null,[e("p",Ae,l(t.user.name),1),t.user.subtitle?(a(),n("p",Le,l(t.user.subtitle),1)):i("",!0)])]),e("button",{type:"button",onClick:s[4]||(s[4]=r=>{c.value=!1,A("logout")}),class:"flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"},[...s[7]||(s[7]=[e("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"})],-1),f(" Sair ",-1)])])])):i("",!0)])):i("",!0)]),o.$slots.header?(a(),n("div",Ce,[u(o.$slots,"header")])):i("",!0),e("main",Ie,[u(o.$slots,"default")])]))}},_e={title:"Layouts/AppLayout",component:v,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{appName:{control:"text"},logoSrc:{control:"text"}}},k=[{label:"Dashboard",href:"/",active:!0},{label:"Avaliações",href:"/avaliacoes",active:!1},{label:"Relatórios",href:"/relatorios",active:!1}],z={name:"João Ferreira",subtitle:"Gestão de Pessoas"},p=()=>({components:{AppLayout:v},setup(){return{navItems:k,user:z}},template:`
    <AppLayout
      app-name="Avaliação de Perfil"
      :nav-items="navItems"
      :user="user"
      @logout="() => alert('Logout')"
    >
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-4">Conteúdo Principal</h2>
        <p class="text-sm text-gray-600">AppLayout com navbar horizontal, ideal para aplicações com poucos links de navegação.</p>
      </div>
    </AppLayout>
  `}),m=()=>({components:{AppLayout:v},setup(){return{navItems:k,user:z}},template:`
    <AppLayout
      app-name="Meu App"
      :nav-items="navItems"
      :user="user"
    >
      <template #header>
        <div class="rounded-xl bg-white px-6 py-4 shadow-sm">
          <h1 class="text-xl font-bold text-gray-900">Título da Página</h1>
          <p class="text-sm text-gray-500">Subtítulo com contexto adicional</p>
        </div>
      </template>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Conteúdo abaixo do header.</p>
      </div>
    </AppLayout>
  `}),x=()=>({components:{AppLayout:v},setup(){return{navItems:k}},template:`
    <AppLayout app-name="Portal" :nav-items="navItems">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Sem menu de usuário.</p>
      </div>
    </AppLayout>
  `});var j,M,$;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  components: {
    AppLayout
  },
  setup() {
    return {
      navItems: mockNavItems,
      user: mockUser
    };
  },
  template: \`
    <AppLayout
      app-name="Avaliação de Perfil"
      :nav-items="navItems"
      :user="user"
      @logout="() => alert('Logout')"
    >
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <h2 class="text-base font-semibold text-gray-800 mb-4">Conteúdo Principal</h2>
        <p class="text-sm text-gray-600">AppLayout com navbar horizontal, ideal para aplicações com poucos links de navegação.</p>
      </div>
    </AppLayout>
  \`
})`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var B,F,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    AppLayout
  },
  setup() {
    return {
      navItems: mockNavItems,
      user: mockUser
    };
  },
  template: \`
    <AppLayout
      app-name="Meu App"
      :nav-items="navItems"
      :user="user"
    >
      <template #header>
        <div class="rounded-xl bg-white px-6 py-4 shadow-sm">
          <h1 class="text-xl font-bold text-gray-900">Título da Página</h1>
          <p class="text-sm text-gray-500">Subtítulo com contexto adicional</p>
        </div>
      </template>

      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Conteúdo abaixo do header.</p>
      </div>
    </AppLayout>
  \`
})`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var D,U,V;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => ({
  components: {
    AppLayout
  },
  setup() {
    return {
      navItems: mockNavItems
    };
  },
  template: \`
    <AppLayout app-name="Portal" :nav-items="navItems">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <p class="text-sm text-gray-600">Sem menu de usuário.</p>
      </div>
    </AppLayout>
  \`
})`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Ne=["Default","WithHeaderSlot","NoUser"];export{p as Default,x as NoUser,m as WithHeaderSlot,Ne as __namedExportsOrder,_e as default};
