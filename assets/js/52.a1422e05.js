(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{252:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"product-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-model"}},[s._v("#")]),s._v(" Product model")]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("Product")]),s._v(" model is the central entity of your shop installation.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("These are only examples of the most commonly used relationships.\nTake a look at the "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/blob/develop/models/Product.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("Product model's code"),a("OutboundLink")],1),s._v(" to gain deeper insights.")])]),s._v(" "),a("h2",{attrs:{id:"access-pricing-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-pricing-information"}},[s._v("#")]),s._v(" Access pricing information")]),s._v(" "),a("p",[s._v("To access a product's pricing information see "),a("RouterLink",{attrs:{to:"/development/pricing-information.html"}},[s._v("accessing pricing information")]),s._v(".")],1),s._v(" "),a("h2",{attrs:{id:"property-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-values"}},[s._v("#")]),s._v(" Property values")]),s._v(" "),a("p",[s._v("A product's property values are accessible via the "),a("code",[s._v("property_values")]),s._v(" relationship.")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("property_values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("CAUTION")]),s._v(" "),a("p",[s._v("If you are working with Variants make sure to call the "),a("code",[s._v("all_property_values")]),s._v(" relation instead.\nThis includes all property values of the "),a("code",[s._v("Product")]),s._v(" and the "),a("code",[s._v("Variant")]),s._v(" combined.")])]),s._v(" "),a("p",[s._v("To get the value of a specific property the "),a("code",[s._v("getPropertyValue")]),s._v(" method can be used.")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Returns the value of Property ID 4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Returns the value of the Property with the "size" slug')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValueBySlug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'size'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Returns the value of the Property with the "Size" name')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValueByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'size'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"grouped-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouped-values"}},[s._v("#")]),s._v(" Grouped values")]),s._v(" "),a("p",[s._v("You can access all property values grouped by their property value group by using the "),a("code",[s._v("grouped_properties")]),s._v("\naccessor:")]),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("entry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("product")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("grouped_properties")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display_value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("raw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("unit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endfor")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endfor")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"custom-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-fields"}},[s._v("#")]),s._v(" Custom fields")]),s._v(" "),a("p",[s._v("Custom fields can be used by the customer to add additional information\nto a product when it is added to the shopping cart.")]),s._v(" "),a("p",[s._v('This enables you to add options like "Personal engraving" or "Wrap item as gift" to your products.')]),s._v(" "),a("p",[s._v("To access these fields use the "),a("code",[s._v("custom_fields")]),s._v(" relationship.")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("custom_fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"accessories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessories"}},[s._v("#")]),s._v(" Accessories")]),s._v(" "),a("p",[s._v('Products can be linked together via the product form in the October CMS backend.\nThis is useful to display a "You might also like" or a "Accessories to this product"\nlist.')]),s._v(" "),a("p",[s._v("To retrieve linked products you can use the following relationships:")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Get all linked products")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("accessories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Get all products this model is an accessory of")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("is_accessory_of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);