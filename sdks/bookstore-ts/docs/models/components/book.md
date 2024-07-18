# Book

Represents a book in the store


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier                                                                             |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Title of the publication                                                                      |
| `publishDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Publication date                                                                              |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Price in USD                                                                                  |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `author`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Author of the book                                                                            |
| `isbn`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | ISBN of the book                                                                              |