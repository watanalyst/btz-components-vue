import{r as a}from"./vue.esm-bundler-BtlEUpW_.js";import{_ as e}from"./Modal-C5WiJlBb.js";import{_ as n}from"./PrimaryButton-BT9BxVL5.js";import{_ as y}from"./SecondaryButton-DbiOMrFJ.js";const B={title:"Overlays/Modal",component:e,tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Whether the modal is visible"},maxWidth:{control:"select",options:["sm","md","lg","xl","2xl"],description:"Maximum width of the modal"},closeable:{control:"boolean",description:"Whether clicking the backdrop closes the modal"}}},o=()=>({components:{Modal:e,PrimaryButton:n,SecondaryButton:y},setup(){return{show:a(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Abrir Modal</PrimaryButton>
      <Modal :show="show" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Título do Modal</h2>
          <p class="text-sm text-gray-600 mb-4">Este é o conteúdo do modal. Clique fora ou pressione Esc para fechar.</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `}),t=()=>({components:{Modal:e,PrimaryButton:n,SecondaryButton:y},setup(){return{show:a(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Modal Pequeno (sm)</PrimaryButton>
      <Modal :show="show" max-width="sm" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Pequeno</h2>
          <p class="text-sm text-gray-600 mb-4">Max width: sm</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `}),s=()=>({components:{Modal:e,PrimaryButton:n},setup(){return{show:a(!1)}},template:`
    <div>
      <PrimaryButton @click="show = true">Modal sem fechar pelo backdrop</PrimaryButton>
      <Modal :show="show" :closeable="false" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Obrigatório</h2>
          <p class="text-sm text-gray-600 mb-4">Clicar fora não fecha este modal.</p>
          <div class="flex justify-end">
            <PrimaryButton @click="show = false">Entendi</PrimaryButton>
          </div>
        </div>
      </Modal>
    </div>
  `});var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    PrimaryButton,
    SecondaryButton
  },
  setup() {
    const show = ref(false);
    return {
      show
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="show = true">Abrir Modal</PrimaryButton>
      <Modal :show="show" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Título do Modal</h2>
          <p class="text-sm text-gray-600 mb-4">Este é o conteúdo do modal. Clique fora ou pressione Esc para fechar.</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  \`
})`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    PrimaryButton,
    SecondaryButton
  },
  setup() {
    const show = ref(false);
    return {
      show
    };
  },
  template: \`
    <div>
      <PrimaryButton @click="show = true">Modal Pequeno (sm)</PrimaryButton>
      <Modal :show="show" max-width="sm" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Pequeno</h2>
          <p class="text-sm text-gray-600 mb-4">Max width: sm</p>
          <div class="flex justify-end">
            <SecondaryButton @click="show = false">Fechar</SecondaryButton>
          </div>
        </div>
      </Modal>
    </div>
  \`
})`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,p,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => ({
  components: {
    Modal,
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
      <PrimaryButton @click="show = true">Modal sem fechar pelo backdrop</PrimaryButton>
      <Modal :show="show" :closeable="false" @close="show = false">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">Modal Obrigatório</h2>
          <p class="text-sm text-gray-600 mb-4">Clicar fora não fecha este modal.</p>
          <div class="flex justify-end">
            <PrimaryButton @click="show = false">Entendi</PrimaryButton>
          </div>
        </div>
      </Modal>
    </div>
  \`
})`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const b=["Default","SmallWidth","NotCloseable"];export{o as Default,s as NotCloseable,t as SmallWidth,b as __namedExportsOrder,B as default};
