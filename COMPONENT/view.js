const model =require("./model");

exports.getAllEntry= async (req,res =>{
    const newData=await model.find();
    res.status(200).json({
        result:true,
        totalEntry:model.lenghth,
        datda:newData,
    })
})
exports.createEntry=async (req, res) =>{
    const newData= await model.create(req,res);
    res.status(201).json(newData);
    }
  exports.getSingleEntry=async (req, res) => {
     const newData = await model.findById(req.params.id);
     res.status(200).json(neData);
  }  

exports.updateSingleEntry=async (req, res)=>{
    const newData =await model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(newData);
}
exports.deleteSingleEntry=async (req, res) =>{
    const newData =await model.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(newData)
}

