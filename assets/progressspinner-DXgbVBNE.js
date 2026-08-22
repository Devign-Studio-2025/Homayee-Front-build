import{At as e,C as t,E as n,G as r,I as i,J as a,Jt as o,N as s,S as c,b as l}from"./vue-router-BnwDwtmz.js";import{d as u}from"./focustrap-DONpghBA.js";import{d}from"./index-Cmv3-6c7.js";var f=d.extend({name:`progressspinner`,style:`
.p-progressspinner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
}

.p-progressspinner-circle {
    width: 100%;
    height: 100%;
}

.p-progressspinner-circle-track {
    stroke: dt('content.border.color');
}

.p-progressspinner-circle-range {
    stroke: dt('progressspinner.color.one');
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s;
}

[data-state="determinate"] .p-progressspinner-circle-range {
    transform: rotate(-90deg);
    transform-origin: center;
}

[data-state="indeterminate"] .p-progressspinner-circle {
    animation: p-progressspinner-rotate 2s linear infinite;
    transform-origin: center;
}

[data-state="indeterminate"] .p-progressspinner-circle-range {
    stroke-dasharray: 1, 302;
    stroke-dashoffset: 0;
    animation:
        p-progressspinner-dash 1.5s ease-in-out infinite,
        p-progressspinner-color 6s ease-in-out infinite;
}

.p-progressspinner-value {
    fill: dt('text.muted.color');
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 302;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 136, 302;
        stroke-dashoffset: -54px;
    }
    100% {
        stroke-dasharray: 1, 302;
        stroke-dashoffset: -302px;
    }
}

@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: dt('progressspinner.color.one');
    }
    40% {
        stroke: dt('progressspinner.color.two');
    }
    66% {
        stroke: dt('progressspinner.color.three');
    }
    80%,
    90% {
        stroke: dt('progressspinner.color.four');
    }
}
`,classes:{root:`p-progressspinner`,circle:`p-progressspinner-circle`,circleTrack:`p-progressspinner-circle-track`,circleRange:`p-progressspinner-circle-range`,value:`p-progressspinner-value`}});s(),e();var p={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:u,props:{value:{type:Number,default:null},strokeWidth:{type:Number,default:4},animationDuration:{type:String,default:`2s`},min:{type:Number,default:0},max:{type:Number,default:100}},style:f,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{isDeterminate:function(){return Number.isFinite(this.value)},determinateState:function(){return this.isDeterminate?`determinate`:`indeterminate`},validRange:function(){return Number.isFinite(this.min)&&Number.isFinite(this.max)&&this.max>this.min},clampedValue:function(){if(!this.isDeterminate)return 0;if(!this.validRange)return Number.isFinite(this.min)?this.min:0;var e=Number.isFinite(this.value)?this.value:this.min;return Math.min(Math.max(e,this.min),this.max)},percent:function(){return!this.isDeterminate||!this.validRange?0:(this.clampedValue-this.min)/(this.max-this.min)*100},roundedPercent:function(){return Math.round(this.percent)},radius:function(){return(100-this.strokeWidth)/2},circumference:function(){return 2*Math.PI*this.radius},dashOffset:function(){return this.circumference-this.percent/100*this.circumference},svgStyle:function(){return{"animation-duration":this.animationDuration}}}},m=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-state`,`data-value`],h=[`r`,`stroke-width`],g=[`r`,`stroke-width`,`stroke-dasharray`,`stroke-dashoffset`];function _(e,s,u,d,f,p){return r(),t(`div`,i({class:e.cx(`root`),role:`progressbar`,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":p.isDeterminate?p.clampedValue:void 0,"data-state":p.determinateState,"data-value":p.isDeterminate?p.clampedValue:void 0},e.ptmi(`root`)),[(r(),t(`svg`,i({class:e.cx(`circle`),viewBox:`0 0 100 100`,style:p.svgStyle},e.ptm(`circle`)),[l(`circle`,i({class:e.cx(`circleTrack`),cx:`50`,cy:`50`,r:p.radius,fill:`none`,"stroke-width":e.strokeWidth},e.ptm(`circleTrack`)),null,16,h),l(`circle`,i({class:e.cx(`circleRange`),cx:`50`,cy:`50`,r:p.radius,fill:`none`,"stroke-width":e.strokeWidth,"stroke-dasharray":p.isDeterminate?p.circumference:void 0,"stroke-dashoffset":p.isDeterminate?p.dashOffset:void 0},e.ptm(`circleRange`)),null,16,g),p.isDeterminate?(r(),t(`text`,i({key:0,class:e.cx(`value`),x:`50`,y:`50`,"text-anchor":`middle`,"dominant-baseline":`central`},e.ptm(`value`)),[a(e.$slots,`default`,{value:p.clampedValue,percent:p.roundedPercent},function(){return[n(o(p.roundedPercent)+`%`,1)]})],16)):c(``,!0)],16))],16,m)}p.render=_;export{p as t};