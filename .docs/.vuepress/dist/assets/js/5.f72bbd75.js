(window.webpackJsonp=window.webpackJsonp||[]).push([[5,15],{314:function(t,e,i){},316:function(t,e,i){"use strict";i(314)},317:function(t,e,i){"use strict";i(172),i(28),i(315),i(318),i(102),i(173),i(319),i(321),i(14),i(323),i(50),i(75),i(103);var r=i(322),n=i(324),o=i(325),s=i(326),a={synchronize:"synchronize",layoutStart:"layoutStart",layoutEnd:"layoutEnd",layoutAbort:"layoutAbort",add:"add",remove:"remove",showStart:"showStart",showEnd:"showEnd",hideStart:"hideStart",hideEnd:"hideEnd",filter:"filter",sort:"sort",move:"move",send:"send",beforeSend:"beforeSend",receive:"receive",beforeReceive:"beforeReceive",dragInit:"dragInit",dragStart:"dragStart",dragMove:"dragMove",dragScroll:"dragScroll",dragEnd:"dragEnd",dragReleaseStart:"dragReleaseStart",dragReleaseEnd:"dragReleaseEnd",destroy:"destroy"},u=(i(327),i(30),i(35),i(29)),c=i(51),d=new(function(){function t(){Object(u.a)(this,t),this._store=new Map,this._itemStore=new Map,this._draggingGridItem=null,this._draggingItem=null}return Object(c.a)(t,[{key:"setItemsForGridId",value:function(t,e){this._itemStore.set(t,e)}},{key:"getItemFromGridId",value:function(t,e){return this._itemStore.get(t).find((function(t){return t.id==e.getElement().dataset.itemKey}))}},{key:"setDraggingGridItem",value:function(t){this._draggingGridItem=t}},{key:"setDraggingItem",value:function(t){this._draggingItem=t}},{key:"getDraggingGridItem",value:function(){return this._draggingGridItem}},{key:"getDraggingItem",value:function(){return this._draggingItem}},{key:"addGrid",value:function(t,e){var i=t+"";this._store.has(i)||this._store.set(i+"",[]),this._store.get(i).push(e)}},{key:"addGridToGroups",value:function(t,e){var i=this;t.forEach((function(t){return i.addGrid(t,e)}))}},{key:"getGrids",value:function(t){var e=this;if(Array.isArray(t)){var i=[];return t.forEach((function(t){return i=i.concat(e._store.get(t+""))})),i}var r=t+"";return this._store.get(r)}}]),t}()),l=function(){function t(){Object(u.a)(this,t)}return Object(c.a)(t,[{key:"isUnitTesting",value:function(){return void 0!==process.env.JEST_WORKER_ID}}]),t}(),h="_$muuri_id",g="100px",m="100px",f={name:"Vuuri",props:{className:{type:String,required:!1,default:function(){return"class".concat(Object(s.v4)().replace(/-/g,""))}},options:{type:Object,required:!1,default:function(){return{}}},value:{type:Array,required:!1},itemKey:{type:String,required:!1,default:function(){return h}},getItemWidth:{type:Function,required:!1,default:function(){return g}},getItemHeight:{type:Function,required:!1,default:function(){return m}},dragEnabled:{type:Boolean,required:!1,default:!1},dragHandle:{type:String,required:!1,default:{selector:".muuri-item:first-child"}.select},groupId:{type:[String,Number],required:!1},groupIds:{type:[Array],required:!1}},data:function(){return{copiedItems:[],events:{},muuriOptions:{}}},watch:{value:function(t){this.internallySet||this._sync(t,this.copiedItems)}},computed:{selector:function(){return".".concat(this.className)}},methods:{update:function(){var t=this;this.$nextTick((function(){t.muuri.refreshItems().layout(!0,(function(){return t.$emit("updated")}))}))},_setup:function(){var t=this;this.muuri=new o.a(this.selector,this.muuriOptions),this.groupId&&d.addGrid(this.groupId,this.muuri),this.groupIds&&d.addGridToGroups(this.groupIds,this.muuri),l.isUnitTesting||(this.observer=new ResizeObserver((function(){t._resizeOnLoad()})),this.observer.observe(this.$refs.muuri)),this._sync(this.value,[]),this.$nextTick((function(){d.setItemsForGridId(t.gridKey,t.value)}))},_setupNonReactiveProps:function(){this.muuri=void 0,this.observer=void 0,this.gridKey=Object(s.v4)().replace(/-/g,"")},_setupOptions:function(){if(this.dragEnabled&&(this.muuriOptions=Object(r.a)(Object(r.a)({},this._generateDragOptions()),this.muuriOptions)),this.groupId||this.groupIds){var t=[];this.groupId&&t.push(this.groupId),this.groupIds&&(t=t.concat(this.groupIds)),this.muuriOptions.dragSort=function(){return d.getGrids(t)}}this.muuriOptions=Object(r.a)(Object(r.a)({},this.options),this.muuriOptions)},_generateDragOptions:function(){return{dragEnabled:!0,dragHandle:this.dragHandle,dragContainer:document.querySelector(".muuri-grid".concat(this.selector)),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}},_registerEvents:function(){var t=this;Object.values(a).forEach((function(e){t.events[e]=function(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];t.$emit.apply(t,[e].concat(r))},t.muuri.on(e,t.events[e]),e===a.dragStart&&t.muuri.on(e,t._onDragStart),e===a.send&&t.muuri.on(e,t._onItemSend),e===a.receive&&t.muuri.on(e,t._onItemReceive),e===a.move&&t.muuri.on(e,t._onItemMove),e===a.dragEnd&&t.muuri.on(e,t._onDragEnd)}))},_unregisterEvents:function(){var t=this;Object.values(a).forEach((function(e){t.muuri.off(e,t.events[e]),delete t.events[e]}))},_onDragStart:function(t){d.setDraggingGridItem(t)},_onItemMove:function(t){var e=t.item,i=this._reOrderWithItem(e);this._emitValue(i)},_onItemSend:function(t){var e=t.item,i=this.value.findIndex((function(t){return t.id==e.getElement().dataset.itemKey})),r=this.value.splice(i,1)[0];d.setDraggingItem(r),this._emitValue(this.value)},_onItemReceive:function(){var t=d.getDraggingItem();this.value.push(t);var e=this._reOrderWithItem(d.getDraggingGridItem());this._emitValue(e)},_onDragEnd:function(){d.setDraggingGridItem(null),d.setDraggingItem(null)},_reOrderWithItem:function(t){var e=this,i=t.getGrid(),r=0,n=i.getItems().reduce((function(t,e){return t[e.getElement().dataset.itemKey]=r,r+=1,t}),{});return this.value.reduce((function(t,i){return t[n[i[e.itemKey]]]=i,t}),[])},_getItemStyles:function(t){return{width:this.getItemWidth(t),height:this.getItemHeight(t)}},_generateItemKey:function(t){t._$muuri_id=Object(s.v4)()},_resizeOnLoad:Object(n.debounce)((function(){var t=this;this.$nextTick((function(){t.update()}),100)})),_getDiff:function(t,e){var i=this;return Object(n.differenceWith)(t,e,(function(t,e){return t[i.itemKey]===e[i.itemKey]}))},_sync:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&i&&this._remove(e,i).then((function(){t.update(),t._add(e,i),d.setItemsForGridId(t.gridKey,t.copiedItems)}))},_remove:function(t,e){var i=this,r=this._getDiff(e,t);if(!r.length)return Promise.resolve();var n=[];return r.forEach((function(t){var e=i.muuri.getItems().find((function(e){return t[i.itemKey]+""===e.getElement().dataset.itemKey}));e&&n.push(e)})),n.length?new Promise((function(t){i.muuri.hide(n,{onFinish:function(){i.muuri.remove(n),r.forEach((function(t){var e=i.copiedItems.findIndex((function(e){return e.id===t.id}));i.copiedItems.splice(e,1)})),t()}})})):Promise.resolve()},_add:function(t,e){var i=this,r=this._getDiff(t,e);(r=this._getDiff(r,this.copiedItems)).length&&(this.itemKey===h&&r.forEach((function(t){return i._generateItemKey(t)})),this.copiedItems=this.copiedItems.concat(r),this.$nextTick((function(){r.forEach((function(t){var e=document.querySelector("".concat(i.selector,' [data-item-key="').concat(t[i.itemKey],'"]'));i.muuri.add(e,{layout:!1,active:!1})})),i.muuri.filter((function(){return!0}))})))},_emitValue:function(t){var e=this;this.internallySet=!0,this.$emit("input",t),this.$nextTick((function(){e.internallySet=!1,d.setItemsForGridId(e.gridKey,e.value)}))}},created:function(){this._setupNonReactiveProps(),this._setupOptions()},mounted:function(){this._setup(),this._registerEvents()},beforeDestroy:function(){this._unregisterEvents(),this.$emit("on-destroy",this)}},v=(i(316),i(49)),p=Object(v.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"muuri",staticClass:"muuri-grid",class:t.className,attrs:{"data-grid-key":t.gridKey}},t._l(t.copiedItems,(function(e){return i("div",{key:e[t.itemKey],staticClass:"muuri-item",style:t._getItemStyles(e),attrs:{"data-item-key":e[t.itemKey]}},[i("div",{staticClass:"muuri-item-content"},[t._t("item",null,{item:e})],2)])})),0)}),[],!1,null,"25c13f04",null).exports;e.a=p},330:function(t,e,i){},338:function(t,e,i){"use strict";i(330)},363:function(t,e,i){},375:function(t,e,i){"use strict";i.r(e);var r={name:"GridDemoItem",props:{item:{required:!0}},methods:{onDeleteClicked:function(){this.$emit("on-delete",this.item)}}},n=(i(338),i(49)),o=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-item",style:{backgroundColor:this.item.color}},[e("div",{staticClass:"grid-card-handle",style:{color:this.item.textColor}},[this._v("\n    "+this._s(this.item.name)+"\n  ")]),this._v(" "),e("div",{staticClass:"grid-card-remove",on:{click:this.onDeleteClicked}},[e("svg",{staticClass:"board-item-action-icon icon-delete",attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"}})])])])}),[],!1,null,"687b75b6",null);e.default=o.exports},408:function(t,e,i){"use strict";i(363)},429:function(t,e,i){"use strict";i.r(e);i(318),i(319);var r=i(322),n=i(317);function o(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=i.length,n=0;n<t;n++)e+=i.charAt(Math.floor(Math.random()*r));return e}var s={name:"GridDemo",components:{GridDemoItem:i(375).default,vuuri:n.a},data:function(){return{items:[],options:{showDuration:400,showEasing:"ease",hideDuration:400,hideEasing:"ease",layoutDuration:400,layoutEasing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",sortData:{title:function(t,e){return e.getAttribute("data-title")||""},color:function(t,e){return e.getAttribute("data-color")||""}},dragEnabled:!0,dragHandle:".grid-card-handle",dragContainer:document.querySelector(".muuri-grid"),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}}},methods:{onSearchFilterChange:function(){},onOrderFilterChange:function(){},onColorFilterChange:function(){},onLayoutFilterChange:function(){},onAddClicked:function(){this._buildItems()},onDeleteClicked:function(t){var e=this.items.findIndex((function(e){return e.id===t.id}));this.items.splice(e,1)},_buildItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Math.max(1,Math.floor(Math.random()*t)),i=0;i<e;i++)this.items.push(this._generateItem())},_generateItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=0;e<t;e++)this.items.push(this._generateItem())},_generateItem:function(){return Object(r.a)(Object(r.a)({id:Math.random(),name:o(2)},this._getColor()),{},{width:this.getSize(),height:this.getSize()})},getItemWidth:function(t){return"".concat(t.width,"px")},getItemHeight:function(t){return"".concat(t.height,"px")},getSize:function(){return Math.random()<.5?90:210},_getColor:function(){var t,e,i=Math.random();return"#aaffdc"===(t=i<.333?"#aaffdc":i<.666?"#ff69ea":"rgb(139, 152, 255)")?e="#5455ff":"#ff69ea"===t?e="#ffe67a":"rgb(139, 152, 255)"===t&&(e="#aaffdc"),{color:t,textColor:e}}},created:function(){this._generateItems()}},a=(i(408),i(49)),u=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"grid-demo"},[t._m(0),t._v(" "),i("div",{staticClass:"demo"},[i("vuuri",{attrs:{"item-key":"id","get-item-width":t.getItemWidth,"get-item-height":t.getItemHeight,options:t.options},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[i("GridDemoItem",{attrs:{item:r},on:{"on-delete":t.onDeleteClicked}})]}}]),model:{value:t.items,callback:function(e){t.items=e},expression:"items"}}),t._v(" "),i("div",{staticClass:"grid-footer"},[i("button",{staticClass:"grid-button add-more-items",on:{click:t.onAddClicked}},[i("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}})])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"section-title"},[e("span",[this._v("Grid Demo")])])}],!1,null,"51a8f104",null);e.default=u.exports}}]);