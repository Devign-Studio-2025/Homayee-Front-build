import{At as e,C as t,D as n,E as r,G as i,I as a,J as o,Jt as s,N as c,S as l,St as u,Ut as d,X as f,Z as p,_ as m,at as h,b as g,m as _,o as v,ot as y,q as b,u as x,ut as S,x as C}from"./vue-router-BnwDwtmz.js";import{c as w,d as T,f as E}from"./focustrap-DONpghBA.js";import{a as D}from"./select-BuVu8b_C.js";import{t as O}from"./chevron-left-DXcLaSDj.js";import{H as k,J as A,Q as j,_t as M,d as N,et as P,w as F}from"./index-Cmv3-6c7.js";var I=N.extend({name:`tab`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}}});c(),e();var L={name:`Tab`,extends:{name:`BaseTab`,extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:I,provide:function(){return{$pcTab:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?j(t,`data-p-disabled`)||j(t,`data-pc-section`)===`activebar`?this.findNextTab(t):k(t,`[data-pc-name="tab"]`):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?j(t,`data-p-disabled`)||j(t,`data-pc-section`)===`activebar`?this.findPrevTab(t):k(t,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){F(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){return M(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},ariaControls:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},attrs:function(){return a(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return E({active:this.active})}},directives:{ripple:w}};function R(e,t,n,r,s,c){var l=f(`ripple`);return e.asChild?o(e.$slots,`default`,{key:1,dataP:c.dataP,class:d(e.cx(`root`)),active:c.active,a11yAttrs:c.a11yAttrs,onClick:c.onClick}):y((i(),C(p(e.as),a({key:0,class:e.cx(`root`),"data-p":c.dataP,onClick:c.onClick},c.attrs),{default:h(function(){return[o(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[l]])}L.render=R;var z=N.extend({name:`tablist`,classes:{root:`p-tablist`,content:`p-tablist-content`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`}});c();var B={name:`TabList`,extends:{name:`BaseTabList`,extends:T,props:{},style:z,provide:function(){return{$pcTabList:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,mountTimer:null,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar(),this.bindInkBarObserver();var e=this.$refs.content,t=e?k(e,`[data-pc-name="tab"][data-p-active="true"]`):null;e&&t&&this.$pcTabs.scrollToActiveTab(e,t)}}},mounted:function(){var e=this;this.mountTimer=setTimeout(function(){e.mountTimer=null,e.updateInkBar(),e.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.mountTimer&&=(clearTimeout(this.mountTimer),null),this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=A(e)-t,r=Math.abs(e.scrollLeft)-n*.8,i=Math.max(r,0);e.scrollLeft=P(e)?-1*i:i},onNextButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=A(e)-t,r=Math.abs(e.scrollLeft)+n*.8,i=e.scrollWidth-n,a=Math.min(r,i);e.scrollLeft=P(e)?-1*a:a},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var e=this;this.unbindInkBarObserver();var t=this.$refs.content,n=k(t,`[data-pc-name="tab"][data-p-active="true"]`);n&&(this.inkBarObserver=new ResizeObserver(function(){return e.updateInkBar()}),this.inkBarObserver.observe(n))},unbindInkBarObserver:function(){var e;(e=this.inkBarObserver)==null||e.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,n=e.inkbar;if(n){var r=k(t,`[data-pc-name="tab"][data-p-active="true"]`);r&&(n.style.setProperty(`--px-active-bar-width`,r.offsetWidth+`px`),n.style.setProperty(`--px-active-bar-height`,r.offsetHeight+`px`),n.style.setProperty(`--px-active-bar-left`,r.offsetLeft+`px`),n.style.setProperty(`--px-active-bar-top`,r.offsetTop+`px`))}},updateButtonState:function(){var e=this.$refs,t=e.list,n=e.content,r=n.scrollWidth,i=n.offsetWidth,a=Math.abs(n.scrollLeft),o=A(n);this.isPrevButtonEnabled=a!==0,this.isNextButtonEnabled=t.offsetWidth>=i&&parseInt(a)!==r-o},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return E({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeft:O,ChevronRight:D},directives:{ripple:w}},V=[`data-p`],H=[`aria-label`,`tabindex`],U=[`aria-label`,`tabindex`];function W(e,n,r,s,c,u){var d=f(`ripple`);return i(),t(`div`,a({ref:`list`,class:e.cx(`root`),"data-p":u.dataP},e.ptmi(`root`)),[u.showNavigators&&c.isPrevButtonEnabled?y((i(),t(`button`,a({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":u.prevButtonAriaLabel,tabindex:u.$pcTabs.tabindex,onClick:n[0]||=function(){return u.onPrevButtonClick&&u.onPrevButtonClick.apply(u,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(i(),C(p(u.templates.previcon||`ChevronLeft`),a({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,H)),[[d]]):l(``,!0),g(`div`,a({ref:`content`,class:e.cx(`content`),role:`tablist`,"aria-orientation":`horizontal`,onScroll:n[1]||=function(){return u.onScroll&&u.onScroll.apply(u,arguments)}},e.ptm(`content`)),[o(e.$slots,`default`),g(`span`,a({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16),u.showNavigators&&c.isNextButtonEnabled?y((i(),t(`button`,a({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":u.nextButtonAriaLabel,tabindex:u.$pcTabs.tabindex,onClick:n[2]||=function(){return u.onNextButtonClick&&u.onNextButtonClick.apply(u,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(i(),C(p(u.templates.nexticon||`ChevronRight`),a({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,U)),[[d]]):l(``,!0)],16,V)}B.render=W;var G=N.extend({name:`tabpanel`,classes:{root:function(e){return[`p-tabpanel`,{"p-tabpanel-active":e.instance.active}]}}});c(),x(),e();var K={name:`TabPanel`,extends:{name:`BaseTabPanel`,extends:T,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:G,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],computed:{active:function(){return M(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},ariaLabelledby:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},attrs:function(){return a(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcTabs?.tabindex,role:`tabpanel`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`tabpanel`,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function q(e,n,r,s,c,u){var f,g;return u.$pcTabs?(i(),t(m,{key:1},[e.asChild?o(e.$slots,`default`,{key:1,class:d(e.cx(`root`)),active:u.active,a11yAttrs:u.a11yAttrs}):(i(),t(m,{key:0},[!((f=u.$pcTabs)!=null&&f.lazy)||u.active?y((i(),C(p(e.as),a({key:0,class:e.cx(`root`)},u.attrs),{default:h(function(){return[o(e.$slots,`default`)]}),_:3},16,[`class`])),[[_,(g=u.$pcTabs)!=null&&g.lazy?!0:u.active]]):l(``,!0)],64))],64)):o(e.$slots,`default`,{key:0})}K.render=q;var J=N.extend({name:`tabpanels`,classes:{root:`p-tabpanels`}});c();var Y={name:`TabPanels`,extends:{name:`BaseTabPanels`,extends:T,props:{},style:J,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},inheritAttrs:!1};function X(e,n,r,s,c,l){return i(),t(`div`,a({class:e.cx(`root`),role:`presentation`},e.ptmi(`root`)),[o(e.$slots,`default`)],16)}Y.render=X;var Z=N.extend({name:`tabs`,style:`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        overflow: hidden;
        display: flex;
        position: relative;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        position: relative;
        display: flex;
        flex-grow: 1;
        min-height: 0;
        overflow-x: auto;
        overflow-y: clip;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-content::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        font-size: dt('tabs.tab.font.size');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        background: dt('tabs.active.bar.background');
        transition: width 250ms cubic-bezier(0.35, 0, 0.25, 1), inset-inline-start 250ms cubic-bezier(0.35, 0, 0.25, 1);
        inset-inline-start: var(--px-active-bar-left);
        inset-block-end: dt('tabs.active.bar.bottom');
        width: var(--px-active-bar-width);
        height: dt('tabs.active.bar.height');
    }
`,classes:{root:`p-tabs p-component`}});c();var Q={name:`Tabs`,extends:{name:`BaseTabs`,extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},scrollStrategy:{type:[String,Function],default:`nearest`}},style:Z,provide:function(){return{$pcTabs:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},scrollToActiveTab:function(e,t){if(!(!e||!t||this.scrollStrategy===!1)){if(typeof this.scrollStrategy==`function`){this.scrollStrategy(e,t);return}var n=e.clientWidth,r=Math.abs(e.scrollLeft),i=t.offsetLeft,a=t.offsetWidth,o=i+a,s;if(this.scrollStrategy===`center`)s=i-(n-a)/2;else{var c=n*.1;if(i<r+c)s=i-c;else if(o>r+n-c)s=o-n+c;else return}var l=e.scrollWidth-n,u=Math.max(0,Math.min(s,l));e.scrollTo({left:P(e)?-u:u,behavior:`smooth`})}}}};function $(e,n,r,s,c,l){return i(),t(`div`,a({class:e.cx(`root`)},e.ptmi(`root`)),[o(e.$slots,`default`)],16)}Q.render=$,c(),e(),S();var ee={class:`d-flex flex-column gap-5`},te=v({__name:`BaseTabs`,props:{tabs:{type:Array,required:!0}},setup(e){return(a,c)=>(i(),C(u(Q),{value:e.tabs[0]?.value},{default:h(()=>[n(u(B),null,{default:h(()=>[(i(!0),t(m,null,b(e.tabs,e=>(i(),C(u(L),{key:e.value,value:e.value},{default:h(()=>[r(s(e.label),1)]),_:2},1032,[`value`]))),128))]),_:1}),n(u(Y),null,{default:h(()=>[(i(!0),t(m,null,b(e.tabs,e=>(i(),C(u(K),{key:e.value,value:e.value},{default:h(()=>[g(`div`,ee,[o(a.$slots,e.value,{},void 0,!0)])]),_:2},1032,[`value`]))),128))]),_:3})]),_:3},8,[`value`]))}},[[`__scopeId`,`data-v-6e557e84`]]);export{te as t};