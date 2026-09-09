import{At as e,C as t,D as n,E as r,G as i,I as a,J as o,Jt as s,N as c,S as l,St as u,Ut as d,Z as f,_ as p,at as m,b as h,o as g,q as _,ut as v,w as y,x as b,y as x}from"./vue-router-BnwDwtmz.js";import{d as S,f as C}from"./focustrap-CMSw1x_w.js";import{d as w}from"./AdminLayout-DPXIlA7U.js";import{t as T}from"./select-DsGXe185.js";import{t as E}from"./message-BsUgIHtg.js";import{t as D}from"./floatlabel-CpRZtZvy.js";import{d as O}from"./index-Dj6T9jUg.js";import{t as k}from"./forms-S-HmZ1cv.js";var A=O.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }
    
    .p-chip.p-focus {
        background: dt('chip.focus.background');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
        flex-shrink: 0;
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
        flex-shrink: 0;
    }

    .p-chip-label {
        font-weight: dt('chip.label.font.weight');
        font-size: dt('chip.label.font.size');
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}});c(),e();var j={name:`Chip`,extends:{name:`BaseChip`,extends:S,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:A,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return C({removable:this.removable})}},components:{TimesCircle:w}},M=[`data-p`],N=[`src`];function P(e,n,r,c,u,d){return u.visible?(i(),t(`div`,a({key:0,class:e.cx(`root`)},e.ptmi(`root`),{"data-p":d.dataP}),[o(e.$slots,`default`,{},function(){return[e.image?(i(),t(`img`,a({key:0,src:e.image},e.ptm(`image`),{class:e.cx(`image`)}),null,16,N)):e.$slots.icon?(i(),b(f(e.$slots.icon),a({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(i(),t(`span`,a({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):l(``,!0),e.label===null?l(``,!0):(i(),t(`div`,a({key:3,class:e.cx(`label`)},e.ptm(`label`)),s(e.label),17))]}),e.removable?o(e.$slots,`removeicon`,{key:0,removeCallback:d.close,keydownCallback:d.onKeydown},function(){return[(i(),b(f(e.removeIcon?`span`:`TimesCircle`),a({class:[e.cx(`removeIcon`),e.removeIcon],tabindex:`0`,onClick:d.close,onKeydown:d.onKeydown},e.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):l(``,!0)],16,M)):l(``,!0)}j.render=P,c(),v(),e();var F={key:1},I=[`for`],L={key:1,class:`dv-form-input__hint`},R=g({__name:`FormSelect`,props:{hint:String,fluid:{type:Boolean,default:!1},filterFields:{type:Array,default:()=>[]},options:{type:Array,default:()=>[]},selectedOptions:{type:Array,default:()=>[]},name:String,label:String,disabled:{type:Boolean,default:!1},optionLabel:[String,Function],optionValue:[String,Function],multiple:{type:Boolean,default:!1},chips:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:`\xA0`}},emits:[`filter`,`update:modelValue`],setup(e,{emit:a}){let c=a,f=e,g=x(()=>[...f.selectedOptions,...f.options]);function v(e,t){e.onChange({target:{value:t}}),c(`update:modelValue`,t)}function S(e,t){v(e,e.value.filter(e=>e!==t))}function C(e){c(`filter`,e)}function w(e){return f.multiple?Array.isArray(e)&&e.length>0:e!=null&&e!==``}function O(e){let t=g.value.find(t=>M(t)===e);return t?A(t):e}function A(e){return e?typeof f.optionLabel==`function`?f.optionLabel(e):e[f.optionLabel]:``}function M(e){return e?typeof f.optionValue==`function`?f.optionValue(e):e[f.optionValue]:null}function N(e){if(!Array.isArray(e)||e.length===0)return``;let t=O(e[0]);return e.length===1?t:`${t} (${e.length-1}+ دیگر)`}return(a,c)=>(i(),b(u(k),{name:e.name,class:d([`d-flex flex-column gap-1 mb-3`,{"w-100":e.fluid}])},{default:m(d=>[n(u(D),null,{default:m(()=>[n(u(T),{"onUpdate:modelValue":e=>v(d,e),style:{"min-width":`187px`},options:e.options,optionLabel:e.optionLabel,optionValue:e.optionValue,multiple:e.multiple,checkmark:e.multiple,fluid:e.fluid,loading:e.loading,showClear:w(d.value),filter:``,filterFields:e.filterFields,autoFilterFocus:``,placeholder:e.placeholder,onFilter:C,disabled:e.disabled},y({value:m(n=>[e.multiple&&e.chips?(i(!0),t(p,{key:0},_(n.value,e=>(i(),b(u(j),{key:e,label:O(e),removable:``,onRemove:t=>S(d,e)},null,8,[`label`,`onRemove`]))),128)):e.multiple?(i(),t(`span`,F,s(N(d.value)||n.placeholder||` `),1)):l(``,!0)]),option:m(e=>[o(a.$slots,`customOption`,{option:e.option},()=>[h(`span`,null,s(A(e.option)),1)],!0)]),empty:m(()=>[c[0]||=h(`span`,{class:`opacity-75`},`برای جستجو، تایپ کنید...`,-1)]),_:2},[e.loading?{name:`emptyfilter`,fn:m(()=>[c[1]||=r(` درحال جستجو... `,-1)]),key:`0`}:void 0]),1032,[`onUpdate:modelValue`,`options`,`optionLabel`,`optionValue`,`multiple`,`checkmark`,`fluid`,`loading`,`showClear`,`filterFields`,`placeholder`,`disabled`]),h(`label`,{for:e.name},s(e.label),9,I)]),_:2},1024),d.invalid?(i(),b(u(E),{key:0,severity:`error`,size:`small`,variant:`simple`},{default:m(()=>[r(s(d.error?.message),1)]),_:2},1024)):l(``,!0),e.hint?(i(),t(`small`,L,s(e.hint),1)):l(``,!0)]),_:3},8,[`name`,`class`]))}},[[`__scopeId`,`data-v-80ce4ec3`]]);export{R as t};