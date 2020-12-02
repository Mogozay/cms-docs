(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{267:function(t,e,a){"use strict";a.r(e);var v=a(0),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This documentation is describing a sub-part of the Eclia RESTFUL API as a proxy for Arcadier API v2.")]),t._v(" "),a("p",[t._v("No admin token coming from the Arcadier APi will sent over as a basic security protocol.")]),t._v(" "),a("ul",[a("li",[t._v("all the dates are expressed in UNIX timestamp format")]),t._v(" "),a("li",[t._v("you can immediately to ping the api here "),a("code",[t._v("/api/ping")])])]),t._v(" "),a("blockquote",[a("p",[t._v("All the provided API endpoints will require the client ID and client Secret coming from the Arcadier Marketplace.")])]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("All your request must included the clientId and clientSecret")]),t._v(" "),a("h4",{attrs:{id:"body-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-header"}},[t._v("#")]),t._v(" Body Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Params")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("Content-Type")])]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("clientID")])]),t._v(" "),a("td",[t._v("clientID from your Arcadier marketplace")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("clientSecret")])]),t._v(" "),a("td",[t._v("clientSecret from your Arcadier marketplace")])])])]),t._v(" "),a("h2",{attrs:{id:"quick-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-reference"}},[t._v("#")]),t._v(" Quick reference")]),t._v(" "),a("blockquote",[a("p",[t._v("Available endpoints list: (Last updated 7th Feb 2020)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Done")]),t._v(" "),a("th",[t._v("Verb")]),t._v(" "),a("th",[t._v("Path")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Arcadier API v2 correspondance")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/ping")])]),t._v(" "),a("td",[t._v("testing the API")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/signup")])]),t._v(" "),a("td",[t._v("Register a new buyer user")]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/accounts/register")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/signin")])]),t._v(" "),a("td",[t._v("Login a buyer user")]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/token")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/signin")])]),t._v(" "),a("td",[t._v("Login a buyer user with existing auth session and redirect to url")]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/token")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/logout")])]),t._v(" "),a("td",[t._v("Logout a buyer user "),a("strong",[t._v("NEW 25/08/2019")])]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/accounts/sign-out")])])]),t._v(" "),a("tr",[a("td",[t._v("[ ]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/password/{buyerId}")])]),t._v(" "),a("td",[a("s",[t._v("Reset an existing buyer user password")]),t._v(" not documented")]),t._v(" "),a("td",[a("code",[t._v("???")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("PUT")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/users/{buyerId}")])]),t._v(" "),a("td",[t._v("Update an existing buyer user account profile")]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/users/{buyerId}")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/carts/{buyerId}")])]),t._v(" "),a("td",[t._v("Get the content of the current cart of a buyer user")]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/users/{buyerID}/carts")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/shipping-methods")])]),t._v(" "),a("td",[t._v("Get the marketplace level shipping methods "),a("strong",[t._v("NEW 25/08/2019")])]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/{adminId}/shipping-methods")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/arcadier/payment-gateways")])]),t._v(" "),a("td",[t._v("Get the marketplace level payment gateways "),a("strong",[t._v("NEW 06/09/2019")])]),t._v(" "),a("td",[a("code",[t._v("https://{marketplace}.arcadier.io/api/v2/admins/{adminId}/payment-gateways")])])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/index")])]),t._v(" "),a("td",[t._v("Get the necessary data to display the homepage defined in the CMS settings "),a("strong",[t._v("UPDATED 10/09/2019")])]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("s",[a("code",[t._v("/api/eclia/coupons")])])]),t._v(" "),a("td",[t._v("Get the list of available coupons")]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("GET")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/discounts")])]),t._v(" "),a("td",[t._v("Get the list of available and active discounts")]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[x]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/apply-discount")])]),t._v(" "),a("td",[t._v("(@Deprecated in favor of "),a("code",[t._v("/api/eclia/cart/apply-discount-code")]),t._v(") Check whether the current user can apply a discount or not")]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[-]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/cart/apply-discount")])]),t._v(" "),a("td",[t._v("Check whether the current cart can apply any active discount or not")]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[-]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/cart/apply-discount-code")])]),t._v(" "),a("td",[t._v("Check whether the current user can apply a discount Code or not")]),t._v(" "),a("td",[t._v("na")])]),t._v(" "),a("tr",[a("td",[t._v("[-]")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[a("code",[t._v("/api/eclia/cart/complete-order")])]),t._v(" "),a("td",[t._v("Notify Eclia that an order has been complete by a customer")]),t._v(" "),a("td",[t._v("na")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);