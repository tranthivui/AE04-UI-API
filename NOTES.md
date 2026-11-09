# 1. API /api/searchProduct
- HTTPS status: 200
- responseCode: 200
- Cấu trúc một sản phẩm
    - id: number
    - name: string
    - price: string
    - brand: string
    - category: {
        usertype:{
            usertype:
        },
        category:
    }
- Có giống API1
## 1.1 query param=jean
- Response:
```
{
  "responseCode": 200,
  "products": [
    {
      "id": 33,
      "name": "Soft Stretch Jeans",
      "price": "Rs. 799",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Jeans"
      }
    },
    {
      "id": 35,
      "name": "Regular Fit Straight Jeans",
      "price": "Rs. 1200",
      "brand": "H&M",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Jeans"
      }
    },
    {
      "id": 37,
      "name": "Grunt Blue Slim Fit Jeans",
      "price": "Rs. 1400",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Jeans"
      }
    }
  ]
}
```

## 1.2 query param=top
- Response:
```
{
  "responseCode": 200,
  "products": [
    {
      "id": 1,
      "name": "Blue Top",
      "price": "Rs. 500",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    },
    {
      "id": 5,
      "name": "Winter Top",
      "price": "Rs. 600",
      "brand": "Mast & Harbour",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    },
    {
      "id": 6,
      "name": "Summer White Top",
      "price": "Rs. 400",
      "brand": "H&M",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    },
    {
      "id": 7,
      "name": "Madame Top For Women",
      "price": "Rs. 1000",
      "brand": "Madame",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    },
    {
      "id": 8,
      "name": "Fancy Green Top",
      "price": "Rs. 700",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    },
    {
      "id": 11,
      "name": "Sleeves Printed Top - White",
      "price": "Rs. 499",
      "brand": "Babyhug",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 12,
      "name": "Half Sleeves Top Schiffli Detailing - Pink",
      "price": "Rs. 359",
      "brand": "Babyhug",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 13,
      "name": "Frozen Tops For Kids",
      "price": "Rs. 278",
      "brand": "Allen Solly Junior",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 14,
      "name": "Full Sleeves Top Cherry - Pink",
      "price": "Rs. 679",
      "brand": "Kookie Kids",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 15,
      "name": "Printed Off Shoulder Top - White",
      "price": "Rs. 315",
      "brand": "Babyhug",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 16,
      "name": "Sleeves Top and Short - Blue & Pink",
      "price": "Rs. 478",
      "brand": "Babyhug",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Dress"
      }
    },
    {
      "id": 18,
      "name": "Little Girls Mr. Panda Shirt",
      "price": "Rs. 1200",
      "brand": "Kookie Kids",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 24,
      "name": "Colour Blocked Shirt – Sky Blue",
      "price": "Rs. 849",
      "brand": "Allen Solly Junior",
      "category": {
        "usertype": {
          "usertype": "Kids"
        },
        "category": "Tops & Shirts"
      }
    },
    {
      "id": 42,
      "name": "Lace Top For Women",
      "price": "Rs. 1400",
      "brand": "Mast & Harbour",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    }
  ]
}
```
## 1.3 query param=tshirt
- Response:
```
{
  "responseCode": 200,
  "products": [
    {
      "id": 2,
      "name": "Men Tshirt",
      "price": "Rs. 400",
      "brand": "H&M",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    },
    {
      "id": 28,
      "name": "Pure Cotton V-Neck T-Shirt",
      "price": "Rs. 1299",
      "brand": "H&M",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    },
    {
      "id": 29,
      "name": "Green Side Placket Detail T-Shirt",
      "price": "Rs. 1000",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    },
    {
      "id": 30,
      "name": "Premium Polo T-Shirts",
      "price": "Rs. 1500",
      "brand": "Polo",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    },
    {
      "id": 31,
      "name": "Pure Cotton Neon Green Tshirt",
      "price": "Rs. 850",
      "brand": "H&M",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    },
    {
      "id": 43,
      "name": "GRAPHIC DESIGN MEN T SHIRT - BLUE",
      "price": "Rs. 1389",
      "brand": "Mast & Harbour",
      "category": {
        "usertype": {
          "usertype": "Men"
        },
        "category": "Tshirts"
      }
    }
  ]
}
```

# 1.4 Gọi với từ khóa không có dữ liệu=aokhoa
- HTTPS status: 200
- responseCode: 200
- Response
```
{
  "responseCode": 200,
  "products": []
}
```
# 1.5 Tìm kiếm hoa thường cho cùng một kết quả
# 1.6 API tìm theo tên/category
- Ví dụ search với từ khóa=winter -> Trả về sản phẩm tên chứa winter, category và brand đều không chứa winter
- Ví dụ search với từ khóa=top -> Trả về sản phẩm với tên Little Girls Mr. Panda Shirt không chứa top, category=Tops & Shirts
```
{
  "responseCode": 200,
  "products": [
    {
      "id": 5,
      "name": "Winter Top",
      "price": "Rs. 600",
      "brand": "Mast & Harbour",
      "category": {
        "usertype": {
          "usertype": "Women"
        },
        "category": "Tops"
      }
    }
  ]
}
```

# 2. API 6 /api/searchProduct không truyền param
- HTTPS status: 200
- responseCode: 200
- Response
```
{
  "responseCode": 400,
  "message": "Bad request, search_product parameter is missing in POST request."
}
```
# 3. UI /products
- Locator ô tìm kiếm: getByRole("textbox",{name:"Search Product"})
- Button tìm kiếm: locator("#submit_search")
- Sau khi tìm:
    - URL đổi thành: /products?search=jean
    - Tiêu đề đổi thành: Searched Products
- Tìm kiếm với từ khóa không có kết quả: UI hiển thị tiêu đề Searched Products với list rỗng
- Có thể vào thẳng bằng URL /products?search=jean thay vì gõ vào ô tìm kiếm. Kết quả giống nhau

# 4. So sánh
- Với cùng một từ khóa
    - Số sản phẩm trên UI bằng số sản phẩm API trả về
    - Thứ tự giống nhau