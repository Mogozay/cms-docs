# Cart

## Get a buyer cart

`(GET) /api/arcadier/carts/50c4bd2c-bfbc-4681-ad9b-651e63731d79`


> **Description**: Return the cart details of a buyer ID whether he is signed in or not. The cart details consist of an array of `cart item ID`. Arcadier API v2 does not manage any `cart ID`.

::: tip
For now, Arcadier API v2 does not support a cart for a guest / anonymous user
A buyer user cart never expires.
:::


> Testing purpose

Get the cart for the buyer user `chris31@voilaah.com`

`(GET) /api/arcadier/carts/50c4bd2c-bfbc-4681-ad9b-651e63731d79`



**Query Request Details:**

| Param         | Description                   | Type      | Rules     |
|---------------|------------------------------ |-----------|-----------|
| **token**     | Value of the token            | string    | required  |
| **buyerId**   | Value of the user Id          | string    | required  |



> Request

`(GET) /api/arcadier/carts/{buyerId}`

 > Response

```
(CODE: 200)
{
    "version": "v1",
    "resource": "buyer",
    "status": "success",
    "data": [
        "TotalRecords": 2,
        "PageNumber": 1,
        "PageSize": 24,
        "Records": [
            {
                "ID": "a6195d4e-a5d8-497f-9a20-e9dc26e350c2",
                "Quantity": "1",
                "CurrencyCode": "SGD",
                "SubTotal": "1000.00",
                "Freight": "2.50",
                "Notes": "",
                "DiscountAmount": "0.00",
                "CartItemType": "delivery",
                "ShippingMethod": {
                    "ID": "e0d303ae-638f-443a-9ffb-05f8b53043df",
                    "Price": "2.50",
                    "CombinedPrice": "2.50",
                    "CurrencyCode": "SGD",
                    "Description": "Singapore Delivery"
                },
                "AddOns": [],
                "ItemDetail": {
                    "Variants": [],
                    "ID": "4e197cf2-8045-48c0-82a4-f18527a41214",
                    "SKU": "1001",
                    "Name": "Classic Maple Aged Exotic Collection Series",
                    "BuyerDescription": "Ludwig introduces a limited release of exquisite aged exotic veneers available in our Classic Maple series. Uncovered from a private collection over 30 years of age, these samples of Exotic Wood species capture grain-figures far richer in detail than more contemporary versions of it. Simply breathtaking!\r\n\r\n\r\nChoose between 4 different Poly-Glass finishes in 4 of our most popular professional outfits. The Aged Exotic Collection features our 10-ply Shell construction with a matching interior finished with a light sealer coat. All outfits have Mini-Classic Lugs and Cast Brass badges. Tom toms feature Vibra-band suspension units with Triad Brackets and includes a 12.55mm mounting clamp. Floor Toms feature Triad brackets with 12.55mm legs. Bass Drums beautifly show off the finish with no mount, New Cast Claws and Elite Spurs.",
                    "Price": "1000.00",
                    "StockLimited": true,
                    "StockQuantity": "6",
                    "IsVisibleToCustomer": true,
                    "Active": true,
                    "IsAvailable": true,
                    "CurrencyCode": "SGD",
                    "HasChildItems": false
                }
            },
            {
                "ID": "8c6a2b75-291e-44e9-8368-be31edae6ead",
                "Quantity": "1",
                "CurrencyCode": "SGD",
                "SubTotal": "123.00",
                "Freight": "10.00",
                "Notes": "",
                "DiscountAmount": "0.00",
                "CartItemType": "delivery",
                "ShippingMethod": {
                    "ID": "54db6f63-1ee4-4647-8869-c3a16920be22",
                    "Courier": "Tanoo 4",
                    "Method": "pickup",
                    "Price": "10.00",
                    "CombinedPrice": "20.00",
                    "CurrencyCode": "SGD",
                    "Description": "Fastest here"
                },
                "AddOns": [],
                "ItemDetail": {
                    "Variants": [
                        {
                            "ID": "5d2af081-be85-4cec-8a50-53821c9be80b",
                            "Name": "Red",
                            "GroupID": "c730480f-37a5-47b2-b8b4-26f6b59cd187",
                            "GroupName": "Color"
                        },
                        {
                            "ID": "56b65be3-d184-4c68-9d76-517f99abf501",
                            "Name": "Left",
                            "GroupID": "d6554f1c-26de-4d6c-bf52-87d24cdca641",
                            "GroupName": "Hand"
                        }
                    ],
                    "ID": "b195f6cd-7b0d-4ca2-95c9-170989c63f4d",
                    "SKU": "1001",
                    "Name": "Gibson ES-150",
                    "BuyerDescription": "Fully hollow-body electric guitar Gibson ES-150, with a pair of f-holes visible",
                    "Price": "123.00",
                    "StockLimited": false,
                    "StockQuantity": "1",
                    "IsVisibleToCustomer": true,
                    "Active": true,
                    "IsAvailable": true,
                    "CurrencyCode": "SGD",
                    "HasChildItems": false
                }
            }
        ]
    ]
}
```



