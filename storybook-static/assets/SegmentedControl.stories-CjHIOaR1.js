import{c as d,F as _,y as b,o as l,n as h,t as D,r as i}from"./vue.esm-bundler-BtlEUpW_.js";const O={class:"inline-flex rounded-lg border border-gray-200 bg-gray-100 p-0.5"},V=["onClick"],r={__name:"SegmentedControl",props:{modelValue:{type:String,default:""},options:{type:Object,required:!0},name:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const f=t;return(k,A)=>(l(),d("div",O,[(l(!0),d(_,null,b(e.options,(x,a)=>(l(),d("button",{key:a,type:"button",class:h(["px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",e.modelValue===a?"bg-white text-primary shadow-sm":"text-gray-500 hover:text-gray-700"]),onClick:E=>f("update:modelValue",a)},D(x),11,V))),128))]))}},F={title:"Controls/SegmentedControl",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"Currently selected value (v-model)"},options:{control:"object",description:"Object mapping value keys to display labels"},name:{control:"text",description:"Name identifier for the control"}}},n=()=>({components:{SegmentedControl:r},setup(){return{selected:i("pdf"),options:{pdf:"PDF",excel:"Excel",csv:"CSV"}}},template:`
    <div>
      <SegmentedControl v-model="selected" :options="options" name="format" />
      <p class="mt-3 text-sm text-gray-500">Selecionado: <strong>{{ selected }}</strong></p>
    </div>
  `}),o=()=>({components:{SegmentedControl:r},setup(){return{selected:i("individual"),options:{individual:"Individual",agrupado:"Agrupado"}}},template:'<SegmentedControl v-model="selected" :options="options" name="mode" />'}),s=()=>({components:{SegmentedControl:r},setup(){return{selected:i("dia"),options:{dia:"Dia",semana:"Semana",mes:"Mês",ano:"Ano"}}},template:'<SegmentedControl v-model="selected" :options="options" name="period" />'});var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => ({
  components: {
    SegmentedControl
  },
  setup() {
    const selected = ref('pdf');
    const options = {
      pdf: 'PDF',
      excel: 'Excel',
      csv: 'CSV'
    };
    return {
      selected,
      options
    };
  },
  template: \`
    <div>
      <SegmentedControl v-model="selected" :options="options" name="format" />
      <p class="mt-3 text-sm text-gray-500">Selecionado: <strong>{{ selected }}</strong></p>
    </div>
  \`
})`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => ({
  components: {
    SegmentedControl
  },
  setup() {
    const selected = ref('individual');
    const options = {
      individual: 'Individual',
      agrupado: 'Agrupado'
    };
    return {
      selected,
      options
    };
  },
  template: \`<SegmentedControl v-model="selected" :options="options" name="mode" />\`
})`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var v,C,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    SegmentedControl
  },
  setup() {
    const selected = ref('dia');
    const options = {
      dia: 'Dia',
      semana: 'Semana',
      mes: 'Mês',
      ano: 'Ano'
    };
    return {
      selected,
      options
    };
  },
  template: \`<SegmentedControl v-model="selected" :options="options" name="period" />\`
})`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const M=["Default","TwoOptions","ManyOptions"];export{n as Default,s as ManyOptions,o as TwoOptions,M as __namedExportsOrder,F as default};
