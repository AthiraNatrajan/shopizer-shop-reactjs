(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[26],{740:function(e,a,s){"use strict";s.r(a);var t=s(6),n=s(21),r=s(574),i=s(0),c=s(23),l=s(578),o=s.n(l),d=s(188),m=s(737),u=s(736),j=s(576),p=s(577),h=s(602),b=s(43),v=s(24),O=s(59),x=s(189),g=s(58),y=s(73),f=s(628),N=s.n(f),C=s(66),P=s(716),w=s.n(P),A=s(60),S=s(54),_=s(7),q={name:"userName",validate:{required:{value:!0,message:"User Name is required"}}},T={name:"currentPassword",validate:{required:{value:!0,message:"Current Password is required"}}},D={name:"password",validate:{required:{value:!0,message:"Password is required"},validate:{hasSpecialChar:function(e){return e&&e.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)||"Password must be minimum of 8 characters atleast one number and one special character"}}}},k={name:"repeatPassword",validate:{required:{value:!0,message:"Repeat Password is required"}}},E={name:"username",validate:{required:{value:!0,message:"User Name is required"}}},I={name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},L={firstName:{name:"firstName",validate:{required:{value:!0,message:"Firstname is required"}}},lastName:{name:"lastName",validate:{required:{value:!0,message:"Lastname is required"}}},company:{name:"company"},address:{name:"address",validate:{required:{value:!0,message:"Address is required"}}},city:{name:"city",validate:{required:{value:!0,message:"City is required"}}},country:{name:"country",validate:{required:{value:!0,message:"Country is required"}}},stateProvince:{name:"stateProvince",validate:{required:{value:!0,message:"State is required"}}},postalCode:{name:"postalCode",validate:{required:{value:!0,message:"Postal code is required"}}},phone:{name:"phone",validate:{required:{value:!0,message:"Phone number is required"},minLength:{value:10,message:"Enter a 10-digit number"}}},email:{name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},shipPhone:{name:"shipPhone",validate:{required:{value:!0,message:"Phone number is required"},minLength:{value:10,message:"Enter a 10-digit number"}}},shipEmail:{name:"shipEmail",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},shipFirstName:{name:"shipFirstName",validate:{required:{value:!0,message:"Firstname is required"}}},shipLastName:{name:"shipLastName",validate:{required:{value:!0,message:"Lastname is required"}}},shipCompany:{name:"shipCompany"},shipAddress:{name:"shipAddress",validate:{required:{value:!0,message:"Address is required"}}},shipCity:{name:"shipCity",validate:{required:{value:!0,message:"City is required"}}},shipCountry:{name:"shipCountry",validate:{required:{value:!0,message:"Country is required"}}},shipStateProvince:{name:"shipStateProvince",validate:{required:{value:!0,message:"State is required"}}},shipPostalCode:{name:"shipPostalCode",validate:{required:{value:!0,message:"Postal code is required"}}}};a.default=Object(g.connect)((function(e){return{countryData:e.userData.country,userData:e.userData.userData,stateData:e.userData.state,shipStateData:e.userData.shipState,merchant:e.merchantData.merchant}}),(function(e){return{setLoader:function(a){e(Object(O.b)(a))},setUser:function(a){e(Object(y.k)(a))},deleteAllFromCart:function(){e(Object(A.g)())},getState:function(a){e(Object(y.j)(a))},getShippingState:function(a){e(Object(y.i)(a))}}}))(Object(C.multilanguage)((function(e){var a=e.setUser,s=e.deleteAllFromCart,l=e.merchant,O=e.strings,g=e.location,y=e.setLoader,f=e.getState,C=e.getShippingState,P=e.countryData,A=e.stateData,U=e.shipStateData,B=e.userData,F=g.pathname,R=Object(x.useToasts)().addToast,Y=Object(c.f)(),M=Object(i.useState)(!1),H=Object(r.a)(M,2),K=H[0],$=H[1],z=Object(h.b)({mode:"onChange",criteriaMode:"all"}),V=z.register,J=z.handleSubmit,W=z.errors,Z=z.watch,G=z.setError,Q=z.clearErrors,X=z.reset,ee=Object(h.b)({mode:"onChange"}),ae=ee.register,se=ee.errors,te=ee.handleSubmit,ne=ee.control,re=ee.setValue,ie=Object(h.b)({mode:"onChange"}),ce=ie.register,le=ie.errors,oe=ie.handleSubmit,de=ie.control,me=ie.setValue,ue=Object(h.b)({mode:"onChange"}),je=ue.register,pe=ue.errors,he=ue.handleSubmit,be=ue.setValue;Object(i.useEffect)((function(){ve(),f(),C()}),[]);var ve=function(){var e=Object(n.a)(Object(t.a)().mark((function e(){var a,s;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.a.ACTION.AUTH+v.a.ACTION.CUSTOMER+v.a.ACTION.PROFILE,e.prev=1,e.next=4,b.a.get(a);case 4:s=e.sent,console.log(s),s&&(be("username",s.userName),be("email",s.emailAddress),f(s.billing.country),re("firstName",s.billing.firstName),re("lastName",s.billing.lastName),re("company",s.billing.company),re("address",s.billing.address),re("country",s.billing.country),re("city",s.billing.city),setTimeout((function(){re("stateProvince",s.billing.zone)}),2e3),re("postalCode",s.billing.postalCode),re("phone",s.billing.phone),re("email",s.emailAddress),s.delivery&&(C(s.delivery.country),me("shipFirstName",s.delivery.firstName),me("shipLastName",s.delivery.lastName),me("shipCompany",s.delivery.company),me("shipAddress",s.delivery.address),me("shipCountry",s.delivery.country),me("shipCity",s.delivery.city),setTimeout((function(){me("shipStateProvince",s.delivery.zone)}),2e3),me("shipPostalCode",s.delivery.postalCode),me("shipPhone",s.delivery.phone))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),Y.push("/login");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(n.a)(Object(t.a)().mark((function e(a){var s,n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,s=v.a.ACTION.CUSTOMER+v.a.ACTION.PASSWORD,n={password:a.password,repeatPassword:a.repeatPassword,current:a.currentPassword,username:a.userName},e.next=6,b.a.post(s,n);case 6:e.sent&&(X({}),R("Your password has been changed successfully!",{appearance:"success",autoDismiss:!0})),y(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),R("Your current password is wrong",{appearance:"error",autoDismiss:!0}),y(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),xe=function(){var e=Object(n.a)(Object(t.a)().mark((function e(a){var s,n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,s=v.a.ACTION.AUTH+v.a.ACTION.CUSTOMER+v.a.ACTION.ADDRESS,n={id:B.id,billing:{company:a.company,address:a.address,city:a.city,postalCode:a.postalCode,stateProvince:a.stateProvince,country:a.country,zone:a.stateProvince,firstName:a.firstName,lastName:a.lastName,phone:a.phone}},e.next=6,b.a.patch(s,n);case 6:R("Your billing address has been updated successfully.",{appearance:"success",autoDismiss:!0}),y(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),R("Your billing address has been updated fail.",{appearance:"error",autoDismiss:!0}),y(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.a)(Object(t.a)().mark((function e(a){var s,n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,s=v.a.ACTION.AUTH+v.a.ACTION.CUSTOMER+v.a.ACTION.ADDRESS,n={id:B.id,delivery:{company:a.shipCompany,address:a.shipAddress,city:a.shipCity,postalCode:a.shipPostalCode,stateProvince:a.shipStateProvince,country:a.shipCountry,zone:a.shipStateProvince,firstName:a.shipFirstName,lastName:a.shipLastName,phone:a.shipPhone}},console.log(n),e.next=7,b.a.patch(s,n);case 7:R("Your delivery address has been updated successfully.",{appearance:"success",autoDismiss:!0}),y(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),R("Your delivery address has been updated fail.",{appearance:"error",autoDismiss:!0}),y(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),ye=function(){var e=Object(n.a)(Object(t.a)().mark((function e(a){var s,n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,s=v.a.ACTION.AUTH+v.a.ACTION.CUSTOMER,n={emailAddress:a.email},e.next=6,b.a.patch(s,n);case 6:R("Your account has been updated successfully.",{appearance:"success",autoDismiss:!0}),y(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),R("Your account has been updated fail.",{appearance:"error",autoDismiss:!0}),y(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),fe=function(){console.log("confrim"),$(!K)},Ne=function(){var e=Object(n.a)(Object(t.a)().mark((function e(){var n;return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete"),console.log("delete"),fe(),y(!0),e.prev=4,n=v.a.ACTION.AUTH+v.a.ACTION.CUSTOMER,e.next=8,b.a.delete(n);case 8:R("Your account has been deleted successfully.",{appearance:"success",autoDismiss:!0}),Y.push("/login"),a(""),Object(S.e)("token",""),s(),y(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),R("Your account has been deleted fail.",{appearance:"error",autoDismiss:!0}),y(!1);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)(i.Fragment,{children:[Object(_.jsx)(o.a,{children:Object(_.jsxs)("title",{children:[l.name," | ",O["My Account"]]})}),Object(_.jsx)(d.BreadcrumbsItem,{to:"/",children:O.Home}),Object(_.jsx)(d.BreadcrumbsItem,{to:""+F,children:O["My Account"]}),Object(_.jsxs)(j.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[Object(_.jsx)(p.a,{}),Object(_.jsx)("div",{className:"myaccount-area pb-80 pt-100",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:"row",children:Object(_.jsx)("div",{className:"ml-auto mr-auto col-lg-9",children:Object(_.jsx)("div",{className:"myaccount-wrapper",children:Object(_.jsxs)(u.a,{defaultActiveKey:"3",children:[Object(_.jsxs)(m.a,{className:"single-my-account mb-20",children:[Object(_.jsx)(m.a.Header,{className:"panel-heading",children:Object(_.jsx)(u.a.Toggle,{variant:"link",eventKey:"3",children:Object(_.jsxs)("h3",{className:"panel-title",children:[Object(_.jsx)("span",{children:"1 ."})," ",O["Your account"]]})})}),Object(_.jsx)(u.a.Collapse,{eventKey:"3",children:Object(_.jsx)(m.a.Body,{children:Object(_.jsxs)("div",{className:"myaccount-info-wrapper",children:[Object(_.jsx)("div",{className:"account-info-wrapper",children:Object(_.jsx)("h4",{children:O["Your account"]})}),Object(_.jsxs)("form",{onSubmit:he(ye),children:[Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["User Name"]}),Object(_.jsx)("input",{type:"text",name:E.name,disabled:!0,ref:je(E.validate)}),pe[E.name]&&Object(_.jsx)("p",{className:"error-msg",children:W[E.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["Email address"]}),Object(_.jsx)("input",{type:"text",name:I.name,ref:je(I.validate)}),pe[I.name]&&Object(_.jsx)("p",{className:"error-msg",children:pe[I.name].message})]})})]}),Object(_.jsx)("div",{className:"billing-back-btn",children:Object(_.jsx)("div",{className:"billing-btn",children:Object(_.jsx)("button",{type:"submit",children:O.Continue})})})]})]})})})]}),Object(_.jsxs)(m.a,{className:"single-my-account mb-20",children:[Object(_.jsx)(m.a.Header,{className:"panel-heading",children:Object(_.jsx)(u.a.Toggle,{variant:"link",eventKey:"0",children:Object(_.jsxs)("h3",{className:"panel-title",children:[Object(_.jsx)("span",{children:"2 ."})," ",O["Billing Address"]," "]})})}),Object(_.jsx)(u.a.Collapse,{eventKey:"0",children:Object(_.jsx)(m.a.Body,{children:Object(_.jsxs)("div",{className:"myaccount-info-wrapper",children:[Object(_.jsx)("div",{className:"account-info-wrapper",children:Object(_.jsx)("h4",{children:O["Billing Information"]})}),Object(_.jsxs)("form",{onSubmit:te(xe),children:[Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["First Name"]}),Object(_.jsx)("input",{type:"text",name:L.firstName.name,ref:ae(L.firstName.validate)}),se[L.firstName.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.firstName.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["Last Name"]}),Object(_.jsx)("input",{type:"text",name:L.lastName.name,ref:ae(L.lastName.validate)}),se[L.lastName.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.lastName.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O["Company Name"]}),Object(_.jsx)("input",{type:"text",name:L.company.name,ref:ae(L.company.validate)})]})}),Object(_.jsx)("div",{className:"col-lg-12",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)(N.a,{url:"https://maps.googleapis.com/maps/api/js?key="+window._env_.APP_MAP_API_KEY+"&libraries=places",onLoad:function(){var e=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{types:["address"]});e.addListener("place_changed",(function(){var a=e.getPlace();re("country",a.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name),f(a.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name);var s=a.address_components.find((function(e){return e.types.some((function(e){return"locality"===e}))}));void 0!==s&&re("city",s.short_name);var t=a.address_components.find((function(e){return e.types.some((function(e){return"postal_code"===e}))}));void 0!==t&&re("postalCode",t.long_name);for(var n={street_number:"short_name",route:"long_name",sublocality:"sublocality"},r=[],i=0;i<a.address_components.length;i++){var c=a.address_components[i].types[0];if(n[c]){var l=a.address_components[i][n[c]];r.push(l)}}re("address",r.toString()),setTimeout((function(){re("stateProvince",a.address_components.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).short_name)}),2e3)}))}}),Object(_.jsx)("label",{children:O["Street Address"]}),Object(_.jsx)("input",{className:"billing-info",placeholder:O["House number and street name"],type:"text",id:"autocomplete",name:L.address.name,ref:ae(L.address.validate)}),se[L.address.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.address.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.Country}),Object(_.jsx)(h.a,{name:L.country.name,control:ne,rules:L.country.validate,render:function(e){return Object(_.jsxs)("select",{onChange:function(a){e.onChange(a.target.value),f(a.target.value)},value:e.value,children:[Object(_.jsx)("option",{children:O["Select a country"]}),P.map((function(e,a){return Object(_.jsx)("option",{value:e.code,children:e.name},a)}))]})}}),se[L.country.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.country.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.State}),A&&A.length>0?Object(_.jsx)(h.a,{name:L.stateProvince.name,control:ne,rules:L.stateProvince.validate,render:function(e){return Object(_.jsxs)("select",{onChange:function(a){return e.onChange(a.target.value)},value:e.value,children:[Object(_.jsx)("option",{children:O["Select a state"]}),A.map((function(e,a){return Object(_.jsx)("option",{value:e.code,children:e.name},a)}))]})}}):Object(_.jsx)("input",{type:"text",name:L.stateProvince.name,ref:ae(L.stateProvince.validate)}),se[L.stateProvince.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.stateProvince.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O["Town/City"]}),Object(_.jsx)("input",{type:"text",name:L.city.name,ref:ae(L.city.validate)}),se[L.city.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.city.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.Postcode}),Object(_.jsx)("input",{type:"text",name:L.postalCode.name,ref:ae(L.postalCode.validate)}),se[L.postalCode.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.postalCode.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O.Phone}),Object(_.jsx)("input",{type:"number",name:L.phone.name,ref:ae(L.phone.validate)}),se[L.phone.name]&&Object(_.jsx)("p",{className:"error-msg",children:se[L.phone.name].message})]})})]}),Object(_.jsx)("div",{className:"billing-back-btn",children:Object(_.jsx)("div",{className:"billing-btn",children:Object(_.jsx)("button",{type:"submit",children:O.Continue})})})]})]})})})]}),Object(_.jsxs)(m.a,{className:"single-my-account mb-20",children:[Object(_.jsx)(m.a.Header,{className:"panel-heading",children:Object(_.jsx)(u.a.Toggle,{variant:"link",eventKey:"1",children:Object(_.jsxs)("h3",{className:"panel-title",children:[Object(_.jsx)("span",{children:"3 ."})," ",O["Delivery Address"]," "]})})}),Object(_.jsx)(u.a.Collapse,{eventKey:"1",children:Object(_.jsx)(m.a.Body,{children:Object(_.jsxs)("div",{className:"myaccount-info-wrapper",children:[Object(_.jsx)("div",{className:"account-info-wrapper",children:Object(_.jsx)("h4",{children:O["Delivery Information"]})}),Object(_.jsxs)("form",{onSubmit:oe(ge),children:[Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["First Name"]}),Object(_.jsx)("input",{type:"text",name:L.shipFirstName.name,ref:ce(L.shipFirstName.validate)}),le[L.shipFirstName.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipFirstName.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["Last Name"]}),Object(_.jsx)("input",{type:"text",name:L.shipLastName.name,ref:ce(L.shipLastName.validate)}),le[L.shipLastName.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipLastName.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O["Company Name"]}),Object(_.jsx)("input",{type:"text",name:L.shipCompany.name,ref:ce(L.shipCompany.validate)})]})}),Object(_.jsx)("div",{className:"col-lg-12",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)(N.a,{url:"https://maps.googleapis.com/maps/api/js?key="+window._env_.APP_MAP_API_KEY+"&libraries=places",onLoad:function(){var e=new google.maps.places.Autocomplete(document.getElementById("autocomplete1"),{types:["address"]});e.addListener("place_changed",(function(){var a=e.getPlace();console.log(a),me("shipCountry",a.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name),C(a.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name);var s=a.address_components.find((function(e){return e.types.some((function(e){return"locality"===e}))}));void 0!==s&&me("shipCity",s.short_name);var t=a.address_components.find((function(e){return e.types.some((function(e){return"postal_code"===e}))}));void 0!==t&&me("shipPostalCode",t.long_name);for(var n={street_number:"short_name",route:"long_name",sublocality:"sublocality"},r=[],i=0;i<a.address_components.length;i++){var c=a.address_components[i].types[0];if(n[c]){var l=a.address_components[i][n[c]];r.push(l)}}me("shipAddress",r.toString()),setTimeout((function(){me("shipStateProvince",a.address_components.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).short_name)}),2e3)}))}}),Object(_.jsx)("label",{children:O["Street Address"]}),Object(_.jsx)("input",{className:"billing-info",placeholder:"House number and street name",type:"text",id:"autocomplete1",name:L.shipAddress.name,ref:ce(L.shipAddress.validate)}),le[L.shipAddress.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipAddress.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.Country}),Object(_.jsx)(h.a,{name:L.shipCountry.name,control:de,rules:L.shipCountry.validate,render:function(e){return Object(_.jsxs)("select",{onChange:function(a){e.onChange(a.target.value),C(a.target.value)},value:e.value,children:[Object(_.jsx)("option",{children:O["Select a country"]}),P.map((function(e,a){return Object(_.jsx)("option",{value:e.code,children:e.name},a)}))]})}}),le[L.shipCountry.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipCountry.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.State}),U&&U.length>0?Object(_.jsx)(h.a,{name:L.shipStateProvince.name,control:de,rules:L.shipStateProvince.validate,render:function(e){return Object(_.jsxs)("select",{onChange:function(a){return e.onChange(a.target.value)},value:e.value,children:[Object(_.jsx)("option",{children:O["Select a state"]}),U.map((function(e,a){return Object(_.jsx)("option",{value:e.code,children:e.name},a)}))]})}}):Object(_.jsx)("input",{type:"text",name:L.shipStateProvince.name,ref:ce(L.shipStateProvince.validate)}),le[L.shipStateProvince.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipStateProvince.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O["Town/City"]}),Object(_.jsx)("input",{type:"text",name:L.shipCity.name,ref:ce(L.shipCity.validate)}),le[L.shipCity.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipCity.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info mb-20",children:[Object(_.jsx)("label",{children:O.Postcode}),Object(_.jsx)("input",{type:"text",name:L.shipPostalCode.name,ref:ce(L.shipPostalCode.validate)}),le[L.shipPostalCode.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipPostalCode.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O.Phone}),Object(_.jsx)("input",{type:"number",name:L.shipPhone.name,ref:ce(L.shipPhone.validate)}),le[L.shipPhone.name]&&Object(_.jsx)("p",{className:"error-msg",children:le[L.shipPhone.name].message})]})})]}),Object(_.jsx)("div",{className:"billing-back-btn",children:Object(_.jsx)("div",{className:"billing-btn",children:Object(_.jsx)("button",{type:"submit",children:O.Continue})})})]})]})})})]}),Object(_.jsxs)(m.a,{className:"single-my-account mb-20",children:[Object(_.jsx)(m.a.Header,{className:"panel-heading",children:Object(_.jsx)(u.a.Toggle,{variant:"link",eventKey:"2",children:Object(_.jsxs)("h3",{className:"panel-title",children:[Object(_.jsx)("span",{children:"4 ."})," ",O["Change your password"]]})})}),Object(_.jsx)(u.a.Collapse,{eventKey:"2",children:Object(_.jsx)(m.a.Body,{children:Object(_.jsxs)("div",{className:"myaccount-info-wrapper",children:[Object(_.jsx)("div",{className:"account-info-wrapper",children:Object(_.jsx)("h4",{children:O["Change Password"]})}),Object(_.jsxs)("form",{onSubmit:J(Oe),children:[Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["User Name"]}),Object(_.jsx)("input",{type:"text",name:q.name,ref:V(q.validate)}),W[q.name]&&Object(_.jsx)("p",{className:"error-msg",children:W[q.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O["Current Password"]}),Object(_.jsx)("input",{type:"password",name:T.name,ref:V(T.validate)}),W[T.name]&&Object(_.jsx)("p",{className:"error-msg",children:W[T.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsx)("label",{children:O.Password}),Object(_.jsx)("input",{type:"password",onChange:function(e){return function(e){if(""!==Z("repeatPassword")&&Z("repeatPassword")!==e.target.value)return G(k.name,{type:"notMatch",message:"Repeat Password should be the same as a password"});Q(k.name)}(e)},name:D.name,ref:V(D.validate)}),W[D.name]&&Object(_.jsx)("p",{className:"error-msg",children:W[D.name].message})]})}),Object(_.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(_.jsxs)("div",{className:"billing-info",children:[Object(_.jsxs)("label",{children:[O["Repeat Password"],"Repeat Password"]}),Object(_.jsx)("input",{type:"password",onChange:function(e){return function(e){if(Z("password")!==e.target.value)return G(k.name,{type:"notMatch",message:"Repeat Password should be the same as a password"})}(e)},name:k.name,ref:V(k.validate)}),W[k.name]&&Object(_.jsx)("p",{className:"error-msg",children:W[k.name].message})]})})]}),Object(_.jsx)("div",{className:"billing-back-btn",children:Object(_.jsx)("div",{className:"billing-btn",children:Object(_.jsx)("button",{type:"submit",children:O.Continue})})})]})]})})})]}),Object(_.jsxs)(m.a,{className:"single-my-account mb-20",children:[Object(_.jsx)(m.a.Header,{className:"panel-heading",children:Object(_.jsx)(u.a.Toggle,{variant:"link",eventKey:"4",children:Object(_.jsxs)("h3",{className:"panel-title",children:[Object(_.jsx)("span",{children:"5 ."})," ",O["Account Management"]]})})}),Object(_.jsx)(u.a.Collapse,{eventKey:"4",children:Object(_.jsx)(m.a.Body,{children:Object(_.jsx)("div",{className:"myaccount-info-wrapper",children:Object(_.jsx)("form",{children:Object(_.jsx)("div",{className:"account-management",children:Object(_.jsx)("div",{className:"delete-btn",children:Object(_.jsx)("button",{type:"button",onClick:fe,children:O["Delete your account"]})})})})})})})]})]})})})})})}),K&&Object(_.jsx)(w.a,{showCancel:!0,cancelBtnBsStyle:"light",confirmBtnText:"Yes, delete it!",confirmBtnBsStyle:"danger",onConfirm:Ne,onCancel:fe,title:"Are you sure?",children:"Are you sure that you want to permanently delete this account"})]})]})})))}}]);
//# sourceMappingURL=26.6aae08a4.chunk.js.map