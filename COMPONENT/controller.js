const {getAllEntry, 
    getSingleEntry, 
    createEntry, 
    updateSingleEntry, 
    deleteSingleEntry
}=require("./view");
const express= require("express");
const router= express.router();

router.route("/").get(getAllEntry).post(createEntry);

router
.route("/:id")
.get(getSingleEntry)
.patch(updateSingleEntry)
.delete(deleteSingleEntry);

module.exports= router;