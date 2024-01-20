/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("voq94rm2nn7acz7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjsr3cuw",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("voq94rm2nn7acz7")

  // remove
  collection.schema.removeField("yjsr3cuw")

  return dao.saveCollection(collection)
})
