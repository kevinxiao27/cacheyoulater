/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("voq94rm2nn7acz7")

  collection.createRule = "@request.data.owner = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("voq94rm2nn7acz7")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
