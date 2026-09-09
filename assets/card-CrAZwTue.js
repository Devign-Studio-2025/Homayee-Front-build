import{C as e,G as t,I as n,J as r,N as i,S as a,b as o}from"./vue-router-BnwDwtmz.js";import{d as s}from"./focustrap-v9GJiGPA.js";import{d as c}from"./index-DuD4-Ib_.js";var l=c.extend({name:`card`,style:`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}});i();var u={name:`Card`,extends:{name:`BaseCard`,extends:s,style:l,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function d(i,s,c,l,u,d){return t(),e(`div`,n({class:i.cx(`root`)},i.ptmi(`root`)),[i.$slots.header?(t(),e(`div`,n({key:0,class:i.cx(`header`)},i.ptm(`header`)),[r(i.$slots,`header`)],16)):a(``,!0),o(`div`,n({class:i.cx(`body`)},i.ptm(`body`)),[i.$slots.title||i.$slots.subtitle?(t(),e(`div`,n({key:0,class:i.cx(`caption`)},i.ptm(`caption`)),[i.$slots.title?(t(),e(`div`,n({key:0,class:i.cx(`title`)},i.ptm(`title`)),[r(i.$slots,`title`)],16)):a(``,!0),i.$slots.subtitle?(t(),e(`div`,n({key:1,class:i.cx(`subtitle`)},i.ptm(`subtitle`)),[r(i.$slots,`subtitle`)],16)):a(``,!0)],16)):a(``,!0),o(`div`,n({class:i.cx(`content`)},i.ptm(`content`)),[r(i.$slots,`content`)],16),i.$slots.footer?(t(),e(`div`,n({key:1,class:i.cx(`footer`)},i.ptm(`footer`)),[r(i.$slots,`footer`)],16)):a(``,!0)],16)],16)}u.render=d;export{u as t};