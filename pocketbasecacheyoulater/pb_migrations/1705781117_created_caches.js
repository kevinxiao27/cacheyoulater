/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "voq94rm2nn7acz7",
    "created": "2024-01-20 20:05:17.135Z",
    "updated": "2024-01-20 20:05:17.135Z",
    "name": "caches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ljl6zyaa",
        "name": "Date_Posted",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "u0zkqd2x",
        "name": "CacheImage",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("voq94rm2nn7acz7");

  return dao.deleteCollection(collection);
})
